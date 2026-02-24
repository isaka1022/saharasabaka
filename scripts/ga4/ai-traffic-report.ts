import { BetaAnalyticsDataClient } from '@google-analytics/data';
import * as dotenv from 'dotenv';
dotenv.config();

const propertyId = process.env.GA4_PROPERTY_ID;
const client = new BetaAnalyticsDataClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

async function run() {
  console.log('========================================');
  console.log('  AI経由トラフィック分析レポート');
  console.log('========================================\n');

  // AI経由訪問数
  const [aiVisitRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'customEvent:ai_platform' }],
    metrics: [{ name: 'eventCount' }],
    dimensionFilter: {
      filter: {
        fieldName: 'eventName',
        stringFilter: { value: 'ai_visit' }
      }
    },
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
  });

  console.log('=== AI経由訪問 (過去30日) ===');
  let totalAIVisits = 0;
  aiVisitRes.rows?.forEach(r => {
    const platform = r.dimensionValues?.[0].value || '不明';
    const count = parseInt(r.metricValues?.[0].value || '0');
    totalAIVisits += count;
    console.log(`${platform}: ${count}回`);
  });
  console.log(`合計: ${totalAIVisits}回`);

  // アフィリエイトリンククリック
  const [affiliateRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [
      { name: 'customEvent:product_name' },
      { name: 'customEvent:affiliate_type' }
    ],
    metrics: [{ name: 'eventCount' }],
    dimensionFilter: {
      filter: {
        fieldName: 'eventName',
        stringFilter: { value: 'affiliate_click' }
      }
    },
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
    limit: 10,
  });

  console.log('\n=== アフィリエイトクリック TOP10 (過去30日) ===');
  let totalClicks = 0;
  affiliateRes.rows?.forEach(r => {
    const product = r.dimensionValues?.[0].value || '不明';
    const type = r.dimensionValues?.[1].value || '不明';
    const count = parseInt(r.metricValues?.[0].value || '0');
    totalClicks += count;
    console.log(`${product} (${type}): ${count}クリック`);
  });
  console.log(`合計: ${totalClicks}クリック`);

  // AI経由のアフィリエイトクリック
  const [aiAffiliateRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'customEvent:ai_platform' }],
    metrics: [{ name: 'eventCount' }],
    dimensionFilter: {
      andGroup: {
        expressions: [
          {
            filter: {
              fieldName: 'eventName',
              stringFilter: { value: 'affiliate_click' }
            }
          },
          {
            notExpression: {
              filter: {
                fieldName: 'customEvent:ai_platform',
                stringFilter: { value: '(not set)' }
              }
            }
          }
        ]
      }
    },
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
  });

  console.log('\n=== AI経由のアフィリエイトクリック (過去30日) ===');
  let aiClicks = 0;
  aiAffiliateRes.rows?.forEach(r => {
    const platform = r.dimensionValues?.[0].value || '不明';
    const count = parseInt(r.metricValues?.[0].value || '0');
    aiClicks += count;
    console.log(`${platform}: ${count}クリック`);
  });
  console.log(`AI経由合計: ${aiClicks}クリック`);
  if (totalClicks > 0) {
    console.log(`AI経由率: ${((aiClicks / totalClicks) * 100).toFixed(1)}%`);
  }

  // スポンサー問い合わせ
  const [sponsorRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'customEvent:inquiry_type' }],
    metrics: [{ name: 'eventCount' }],
    dimensionFilter: {
      filter: {
        fieldName: 'eventName',
        stringFilter: { value: 'sponsor_inquiry' }
      }
    },
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
  });

  console.log('\n=== スポンサー問い合わせ (過去30日) ===');
  let totalInquiries = 0;
  sponsorRes.rows?.forEach(r => {
    const type = r.dimensionValues?.[0].value || '不明';
    const count = parseInt(r.metricValues?.[0].value || '0');
    totalInquiries += count;
    console.log(`${type}: ${count}件`);
  });
  console.log(`合計: ${totalInquiries}件`);

  // AI経由のスポンサー問い合わせ
  const [aiSponsorRes] = await client.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'customEvent:ai_platform' }],
    metrics: [{ name: 'eventCount' }],
    dimensionFilter: {
      andGroup: {
        expressions: [
          {
            filter: {
              fieldName: 'eventName',
              stringFilter: { value: 'sponsor_inquiry' }
            }
          },
          {
            notExpression: {
              filter: {
                fieldName: 'customEvent:ai_platform',
                stringFilter: { value: '(not set)' }
              }
            }
          }
        ]
      }
    },
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
  });

  console.log('\n=== AI経由のスポンサー問い合わせ (過去30日) ===');
  let aiInquiries = 0;
  aiSponsorRes.rows?.forEach(r => {
    const platform = r.dimensionValues?.[0].value || '不明';
    const count = parseInt(r.metricValues?.[0].value || '0');
    aiInquiries += count;
    console.log(`${platform}: ${count}件`);
  });
  console.log(`AI経由合計: ${aiInquiries}件`);
  if (totalInquiries > 0) {
    console.log(`AI経由率: ${((aiInquiries / totalInquiries) * 100).toFixed(1)}%`);
  }

  // サマリー
  console.log('\n========================================');
  console.log('  サマリー');
  console.log('========================================');
  console.log(`AI経由訪問: ${totalAIVisits}回`);
  console.log(`アフィリエイトクリック: ${totalClicks}クリック (AI経由: ${aiClicks})`);
  console.log(`スポンサー問い合わせ: ${totalInquiries}件 (AI経由: ${aiInquiries})`);

  if (totalAIVisits > 0) {
    const cvr = (((aiClicks + aiInquiries) / totalAIVisits) * 100).toFixed(2);
    console.log(`\nAI経由コンバージョン率: ${cvr}%`);
  }

  console.log('\n========================================\n');
}

run().catch(console.error);
