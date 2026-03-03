import * as dotenv from "dotenv";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { google } from "googleapis";
import { WebClient } from "@slack/web-api";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";

dotenv.config();

const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID ?? "";
const CREDENTIALS_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS ?? "";
const GSC_SITE_URL = process.env.GSC_SITE_URL ?? "sc-domain:saharasabaka.vercel.app";
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN ?? "";
const SLACK_CHANNEL = process.env.SLACK_CHANNEL ?? "";

if (!GA4_PROPERTY_ID || !CREDENTIALS_PATH) {
  console.error("GA4_PROPERTY_ID or GOOGLE_APPLICATION_CREDENTIALS is missing");
  process.exit(1);
}
if (!SLACK_BOT_TOKEN || !SLACK_CHANNEL) {
  console.error("SLACK_BOT_TOKEN or SLACK_CHANNEL is missing");
  process.exit(1);
}

// --- データ取得 ---

async function fetchGA4DailyTrend(): Promise<{ date: string; users: number; sessions: number; views: number }[]> {
  const client = new BetaAnalyticsDataClient({ keyFilename: CREDENTIALS_PATH });

  const [res] = await client.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
    dimensions: [{ name: "date" }],
    metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }],
    orderBys: [{ dimension: { dimensionName: "date" } }],
  });

  return (res.rows ?? []).map((r) => ({
    date: r.dimensionValues?.[0].value ?? "",
    users: Number(r.metricValues?.[0].value ?? 0),
    sessions: Number(r.metricValues?.[1].value ?? 0),
    views: Number(r.metricValues?.[2].value ?? 0),
  }));
}

async function fetchGSCDailyTrend(): Promise<{ date: string; clicks: number; impressions: number; ctr: number; position: number }[]> {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  const webmasters = google.webmasters({ version: "v3", auth });

  const endDate = new Date().toISOString().split("T")[0];
  const startDate = new Date(Date.now() - 30 * 86400000).toISOString().split("T")[0];

  const res = await webmasters.searchanalytics.query({
    siteUrl: GSC_SITE_URL,
    requestBody: { startDate, endDate, dimensions: ["date"], rowLimit: 31 },
  });

  return (res.data?.rows ?? [])
    .map((r) => ({
      date: r.keys?.[0] ?? "",
      clicks: r.clicks ?? 0,
      impressions: r.impressions ?? 0,
      ctr: Number(((r.ctr ?? 0) * 100).toFixed(2)),
      position: Number((r.position ?? 0).toFixed(1)),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

async function fetchSummaryText(): Promise<{ ga4: string; gsc: string; ai: string }> {
  const client = new BetaAnalyticsDataClient({ keyFilename: CREDENTIALS_PATH });
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  const webmasters = google.webmasters({ version: "v3", auth });

  const endDate = new Date().toISOString().split("T")[0];
  const startDate7 = new Date(Date.now() - 7 * 86400000).toISOString().split("T")[0];

  const [ga4Res, gscRes, aiVisitRes] = await Promise.all([
    client.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
      metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }, { name: "sessions" }],
    }),
    webmasters.searchanalytics.query({
      siteUrl: GSC_SITE_URL,
      requestBody: { startDate: startDate7, endDate, rowLimit: 1 },
    }),
    client.runReport({
      property: `properties/${GA4_PROPERTY_ID}`,
      dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
      dimensions: [{ name: "customEvent:ai_platform" }],
      metrics: [{ name: "eventCount" }],
      dimensionFilter: {
        filter: {
          fieldName: "eventName",
          stringFilter: { value: "ai_visit" },
        },
      },
      orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    }),
  ]);

  // GA4サマリー
  const ga4Row = ga4Res[0].rows?.[0];
  const users = Number(ga4Row?.metricValues?.[0].value ?? 0);
  const views = Number(ga4Row?.metricValues?.[1].value ?? 0);
  const sessions = Number(ga4Row?.metricValues?.[2].value ?? 0);

  // GSCサマリー
  const gscRow = gscRes.data?.rows?.[0];
  const clicks = gscRow?.clicks ?? 0;
  const impressions = gscRow?.impressions ?? 0;
  const ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(1) : "0.0";
  const pos = (gscRow?.position ?? 0).toFixed(1);

  // AI経由サマリー
  let aiText = "*🤖 AI経由トラフィック (直近7日)*\n";
  let totalAI = 0;
  const aiRows = aiVisitRes[0].rows ?? [];
  if (aiRows.length > 0) {
    aiRows.forEach((r) => {
      const platform = r.dimensionValues?.[0].value || "不明";
      const count = Number(r.metricValues?.[0].value ?? 0);
      totalAI += count;
      aiText += `• ${platform}: *${count}*回\n`;
    });
    aiText += `合計: *${totalAI}*回`;
  } else {
    aiText += "記録なし";
  }

  return {
    ga4: `*📊 GA4 (直近7日)*\nユーザー: *${users.toLocaleString()}*　セッション: *${sessions.toLocaleString()}*　PV: *${views.toLocaleString()}*`,
    gsc: `*🔍 Search Console (直近7日)*\nクリック: *${clicks}*　表示回数: *${impressions}*　CTR: *${ctr}%*　平均順位: *${pos}*`,
    ai: aiText,
  };
}

// --- グラフ生成 ---

async function generateLineChart(
  labels: string[],
  datasets: { label: string; data: number[]; color: string; yAxisID?: string }[]
): Promise<Buffer> {
  const chart = new ChartJSNodeCanvas({ width: 800, height: 380, backgroundColour: "white" });

  const hasRightAxis = datasets.some((d) => d.yAxisID === "y2");

  return chart.renderToBuffer({
    type: "line",
    data: {
      labels,
      datasets: datasets.map((d) => ({
        label: d.label,
        data: d.data,
        borderColor: d.color,
        backgroundColor: d.color + "22",
        fill: false,
        tension: 0.3,
        pointRadius: 3,
        yAxisID: d.yAxisID ?? "y",
      })),
    },
    options: {
      responsive: false,
      plugins: { legend: { position: "top" } },
      scales: {
        x: { ticks: { maxRotation: 45, font: { size: 10 } } },
        y: { beginAtZero: true, position: "left" },
        ...(hasRightAxis ? { y2: { beginAtZero: true, position: "right", grid: { drawOnChartArea: false } } } : {}),
      },
    },
  });
}

// --- メイン ---

async function main() {
  const now = new Date().toLocaleDateString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  console.log(`📊 デイリーレポート生成中... (${now})`);

  const [ga4Rows, gscRows, summary] = await Promise.all([
    fetchGA4DailyTrend(),
    fetchGSCDailyTrend().catch(() => {
      console.log("⚠️ Search Console データ取得失敗（スキップ）");
      return [] as { date: string; clicks: number; impressions: number; ctr: number; position: number }[];
    }),
    fetchSummaryText(),
  ]);

  // GA4グラフ: Users / Sessions / PV
  const ga4Labels = ga4Rows.map((r) => `${r.date.slice(4, 6)}/${r.date.slice(6, 8)}`);
  const ga4Chart = await generateLineChart(ga4Labels, [
    { label: "Users", data: ga4Rows.map((r) => r.users), color: "#43A047" },
    { label: "Sessions", data: ga4Rows.map((r) => r.sessions), color: "#1E88E5" },
    { label: "PV", data: ga4Rows.map((r) => r.views), color: "#FB8C00" },
  ]);

  // GSCグラフ: Impressions / Clicks / CTR / Avg Position
  let gscChart: Buffer | null = null;
  if (gscRows.length > 0) {
    const gscLabels = gscRows.map((r) => r.date.replace(/^\d{4}-/, "").replace("-", "/"));
    gscChart = await generateLineChart(gscLabels, [
      { label: "Impressions", data: gscRows.map((r) => r.impressions), color: "#1E88E5" },
      { label: "Clicks", data: gscRows.map((r) => r.clicks), color: "#E53935" },
      { label: "CTR (%)", data: gscRows.map((r) => r.ctr), color: "#8E24AA", yAxisID: "y2" },
      { label: "Avg Position", data: gscRows.map((r) => r.position), color: "#F4511E", yAxisID: "y2" },
    ]);
  }

  // Slack送信
  const slack = new WebClient(SLACK_BOT_TOKEN);

  const messageLines = [
    `🏜️ *saharasabaka* デイリーレポート - ${now}`,
    "",
    summary.ga4,
    "",
    summary.gsc,
    "",
    summary.ai,
  ];

  await slack.chat.postMessage({
    channel: SLACK_CHANNEL,
    text: messageLines.join("\n"),
    mrkdwn: true,
  });

  await slack.filesUploadV2({
    channel_id: SLACK_CHANNEL,
    initial_comment: "📈 GA4 日別トレンド（直近30日）",
    file: ga4Chart,
    filename: `ga4-trend-${Date.now()}.png`,
  });

  if (gscChart) {
    await slack.filesUploadV2({
      channel_id: SLACK_CHANNEL,
      initial_comment: "📈 Search Console 日別トレンド（直近30日）",
      file: gscChart,
      filename: `gsc-trend-${Date.now()}.png`,
    });
  }

  console.log("✅ Slack投稿完了");
}

main().catch((err) => {
  console.error("❌ エラー:", err);
  process.exit(1);
});
