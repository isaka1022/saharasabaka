import { BetaAnalyticsDataClient } from '@google-analytics/data';
import * as dotenv from 'dotenv';
dotenv.config();

const propertyId = process.env.GA4_PROPERTY_ID;
const client = new BetaAnalyticsDataClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

async function run() {
  console.log('========================================');
  console.log('  サハラサバカ 簡易レポート');
  console.log('========================================\n');

  // 現在記録されているイベント一覧
  const [eventRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'eventName' }],
    metrics: [{ name: 'eventCount' }],
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
  });

  console.log('=== 記録されているイベント (過去30日) ===');
  const events = new Set<string>();
  eventRes.rows?.forEach(r => {
    const eventName = r.dimensionValues?.[0].value || '';
    const count = r.metricValues?.[0].value;
    console.log(`${eventName}: ${count}回`);
    events.add(eventName);
  });

  // カスタムイベントの確認
  console.log('\n=== カスタムイベントの実装状況 ===');
  const customEvents = ['ai_visit', 'ai_conversion', 'affiliate_click', 'sponsor_inquiry'];
  customEvents.forEach(event => {
    const implemented = events.has(event);
    console.log(`${event}: ${implemented ? '✅ 記録あり' : '❌ 未記録'}`);
  });

  if (!events.has('ai_visit')) {
    console.log('\n【メモ】');
    console.log('AI経由トラッキングイベントがまだ記録されていません。');
    console.log('本番環境にデプロイ後、AI経由でサイトにアクセスすると記録されます。');
    console.log('\n実装済みのトラッキング:');
    console.log('- AI経由訪問検出 (ChatGPT, Claude, Perplexity等)');
    console.log('- アフィリエイトリンククリック');
    console.log('- スポンサー問い合わせ');
  }

  // 流入元別の分析
  console.log('\n=== 流入元詳細 (過去30日) ===');
  const [sourceRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'sessionSource' }, { name: 'sessionMedium' }],
    metrics: [{ name: 'sessions' }, { name: 'activeUsers' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 15,
  });

  sourceRes.rows?.forEach(r => {
    const source = r.dimensionValues?.[0].value || '不明';
    const medium = r.dimensionValues?.[1].value || '不明';
    const sessions = r.metricValues?.[0].value;
    const users = r.metricValues?.[1].value;
    console.log(`${source} / ${medium}: セッション=${sessions}, ユーザー=${users}`);
  });

  // リファラー分析（AI検出用）
  console.log('\n=== リファラー分析 (過去30日) ===');
  const [refRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'pageReferrer' }],
    metrics: [{ name: 'sessions' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 10,
  });

  refRes.rows?.forEach(r => {
    const referrer = r.dimensionValues?.[0].value || '(direct)';
    const sessions = r.metricValues?.[0].value;

    // AI プラットフォームの検出
    const isAI =
      referrer.includes('chatgpt') ||
      referrer.includes('claude') ||
      referrer.includes('perplexity') ||
      referrer.includes('gemini') ||
      referrer.includes('you.com');

    const label = isAI ? '🤖 AI' : '';
    console.log(`${referrer}: ${sessions}セッション ${label}`);
  });

  console.log('\n========================================\n');
}

run().catch(console.error);
