import { BetaAnalyticsDataClient } from '@google-analytics/data';
import * as dotenv from 'dotenv';
dotenv.config();

const propertyId = process.env.GA4_PROPERTY_ID;
const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

const client = new BetaAnalyticsDataClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

async function sendToSlack(message: string) {
  if (!slackWebhookUrl) {
    console.log('Slack webhook URL not configured. Skipping notification.');
    console.log(message);
    return;
  }

  try {
    const response = await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: message })
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.statusText}`);
    }

    console.log('✅ Slack通知を送信しました');
  } catch (error) {
    console.error('❌ Slack通知の送信に失敗:', error);
    console.log('メッセージ内容:');
    console.log(message);
  }
}

async function run() {
  const today = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  let report = `📊 *サハラサバカ GA4 デイリーレポート*\n${today}\n\n`;

  try {
    // 昨日のデータ
    const [yesterdayRes] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: 'yesterday', endDate: 'yesterday' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' }
      ],
    });

    const yRow = yesterdayRes.rows?.[0];
    if (yRow) {
      const users = yRow.metricValues?.[0].value || '0';
      const sessions = yRow.metricValues?.[1].value || '0';
      const pageviews = yRow.metricValues?.[2].value || '0';
      const avgDuration = parseFloat(yRow.metricValues?.[3].value || '0').toFixed(0);
      const bounceRate = (parseFloat(yRow.metricValues?.[4].value || '0') * 100).toFixed(1);

      report += `*昨日の実績*\n`;
      report += `• ユーザー: ${users}人\n`;
      report += `• セッション: ${sessions}回\n`;
      report += `• ページビュー: ${pageviews}回\n`;
      report += `• 平均滞在時間: ${avgDuration}秒\n`;
      report += `• 直帰率: ${bounceRate}%\n\n`;
    }

    // 過去7日間の概要
    const [weekRes] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      metrics: [
        { name: 'activeUsers' },
        { name: 'sessions' },
      ],
    });

    const wRow = weekRes.rows?.[0];
    if (wRow) {
      const users = wRow.metricValues?.[0].value || '0';
      const sessions = wRow.metricValues?.[1].value || '0';

      report += `*過去7日間*\n`;
      report += `• ユーザー: ${users}人\n`;
      report += `• セッション: ${sessions}回\n\n`;
    }

    // 人気ページ（昨日）
    const [pageRes] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: 'yesterday', endDate: 'yesterday' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 5,
    });

    if (pageRes.rows && pageRes.rows.length > 0) {
      report += `*人気ページ TOP5（昨日）*\n`;
      pageRes.rows.forEach((r, i) => {
        const path = r.dimensionValues?.[0].value || '';
        const views = r.metricValues?.[0].value || '0';
        report += `${i + 1}. ${path}: ${views}PV\n`;
      });
      report += '\n';
    }

    // カスタムイベント確認
    const [eventRes] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: 'yesterday', endDate: 'yesterday' }],
      dimensions: [{ name: 'eventName' }],
      metrics: [{ name: 'eventCount' }],
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 10,
    });

    const events = new Map<string, number>();
    eventRes.rows?.forEach(r => {
      const eventName = r.dimensionValues?.[0].value || '';
      const count = parseInt(r.metricValues?.[0].value || '0');
      events.set(eventName, count);
    });

    // AI経由イベントのチェック
    const aiVisits = events.get('ai_visit') || 0;
    const affiliateClicks = events.get('affiliate_click') || 0;
    const sponsorInquiries = events.get('sponsor_inquiry') || 0;

    if (aiVisits > 0 || affiliateClicks > 0 || sponsorInquiries > 0) {
      report += `*🤖 AI経由アクション（昨日）*\n`;
      if (aiVisits > 0) report += `• AI経由訪問: ${aiVisits}回\n`;
      if (affiliateClicks > 0) report += `• アフィリエイトクリック: ${affiliateClicks}回\n`;
      if (sponsorInquiries > 0) report += `• スポンサー問い合わせ: ${sponsorInquiries}件\n`;
      report += '\n';
    }

    report += `📈 詳細: https://analytics.google.com/analytics/web/#/p${propertyId}/reports/intelligenthome`;

  } catch (error: any) {
    report += `\n⚠️ エラーが発生しました: ${error.message}`;
  }

  // Slackに送信
  await sendToSlack(report);
}

run().catch(console.error);
