import { BetaAnalyticsDataClient } from '@google-analytics/data';
import * as dotenv from 'dotenv';
dotenv.config();

const propertyId = process.env.GA4_PROPERTY_ID;
const client = new BetaAnalyticsDataClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

async function run() {
  console.log('========================================');
  console.log('  サハラサバカ GA4 詳細レポート');
  console.log('========================================\n');

  // 全体のトラフィック概要
  const [overviewRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    metrics: [
      { name: 'activeUsers' },
      { name: 'sessions' },
      { name: 'screenPageViews' },
      { name: 'averageSessionDuration' },
      { name: 'bounceRate' }
    ],
  });

  console.log('=== 全体概要 (過去30日) ===');
  const row = overviewRes.rows?.[0];
  if (row) {
    console.log(`アクティブユーザー: ${row.metricValues?.[0].value}`);
    console.log(`セッション: ${row.metricValues?.[1].value}`);
    console.log(`ページビュー: ${row.metricValues?.[2].value}`);
    console.log(`平均セッション時間: ${parseFloat(row.metricValues?.[3].value || '0').toFixed(0)}秒`);
    console.log(`直帰率: ${(parseFloat(row.metricValues?.[4].value || '0') * 100).toFixed(1)}%`);
  }

  // トラフィックソース
  const [srcRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'sessionDefaultChannelGroup' }],
    metrics: [{ name: 'sessions' }, { name: 'activeUsers' }, { name: 'bounceRate' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  });
  console.log('\n=== トラフィックソース (過去30日) ===');
  srcRes.rows?.forEach(r => {
    const bounce = (parseFloat(r.metricValues?.[2].value || '0') * 100).toFixed(1);
    console.log(`${r.dimensionValues?.[0].value}: セッション=${r.metricValues?.[0].value}, ユーザー=${r.metricValues?.[1].value}, 直帰率=${bounce}%`);
  });

  // デバイス別
  const [devRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'deviceCategory' }],
    metrics: [{ name: 'sessions' }, { name: 'activeUsers' }, { name: 'bounceRate' }],
  });
  console.log('\n=== デバイス別 (過去30日) ===');
  devRes.rows?.forEach(r => {
    const bounce = (parseFloat(r.metricValues?.[2].value || '0') * 100).toFixed(1);
    console.log(`${r.dimensionValues?.[0].value}: セッション=${r.metricValues?.[0].value}, ユーザー=${r.metricValues?.[1].value}, 直帰率=${bounce}%`);
  });

  // 人気ページ
  const [pageRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }, { name: 'averageSessionDuration' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 10,
  });
  console.log('\n=== 人気ページ TOP10 (過去30日) ===');
  pageRes.rows?.forEach(r => {
    const dur = parseFloat(r.metricValues?.[1].value || '0').toFixed(0);
    console.log(`${r.dimensionValues?.[0].value}: PV=${r.metricValues?.[0].value}, 平均滞在=${dur}秒`);
  });

  // カスタムイベント
  const [eventRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'eventName' }],
    metrics: [{ name: 'eventCount' }],
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
    limit: 15,
  });
  console.log('\n=== カスタムイベント TOP15 (過去30日) ===');
  eventRes.rows?.forEach(r => {
    console.log(`${r.dimensionValues?.[0].value}: ${r.metricValues?.[0].value}回`);
  });

  console.log('\n========================================\n');
}

run().catch(console.error);
