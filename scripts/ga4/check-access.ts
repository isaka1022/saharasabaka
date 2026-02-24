import { BetaAnalyticsDataClient } from '@google-analytics/data';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
dotenv.config();

async function checkAccess() {
  console.log('========================================');
  console.log('  GA4 アクセス確認');
  console.log('========================================\n');

  const credFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  const propertyId = process.env.GA4_PROPERTY_ID;

  console.log('サービスアカウントファイル:', credFile);
  console.log('プロパティID:', propertyId);

  if (!credFile || !propertyId) {
    console.error('\n❌ 環境変数が設定されていません');
    process.exit(1);
  }

  // サービスアカウントの内容を確認
  const creds = JSON.parse(fs.readFileSync(credFile, 'utf-8'));
  console.log('\nサービスアカウント:');
  console.log('  Email:', creds.client_email);
  console.log('  Project:', creds.project_id);

  console.log('\n次の手順を確認してください:');
  console.log('1. https://analytics.google.com/ にアクセス');
  console.log('2. 左下の「管理」⚙️をクリック');
  console.log('3. 中央カラムの「プロパティ設定」を開く');
  console.log('4. 表示されるプロパティIDと設定値を比較:');
  console.log(`   設定値: ${propertyId}`);
  console.log('\n5. 「プロパティのアクセス管理」を開く');
  console.log('6. 以下のメールアドレスが「閲覧者」権限で追加されているか確認:');
  console.log(`   ${creds.client_email}`);

  console.log('\n\nAPI接続テスト中...\n');

  const client = new BetaAnalyticsDataClient({
    keyFilename: credFile
  });

  try {
    const [response] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      metrics: [{ name: 'activeUsers' }],
      limit: 1,
    });

    console.log('✅ 接続成功！');
    console.log('アクティブユーザー（過去7日）:', response.rows?.[0]?.metricValues?.[0].value);
  } catch (error: any) {
    console.error('❌ 接続失敗\n');
    console.error('エラー:', error.message);

    if (error.message.includes('PERMISSION_DENIED')) {
      console.log('\n【対処方法】');
      console.log('サービスアカウントがGA4プロパティに追加されていない可能性があります。');
      console.log('\n手順:');
      console.log('1. https://analytics.google.com/ を開く');
      console.log('2. 管理 > プロパティのアクセス管理');
      console.log(`3. 右上「+」→「ユーザーを追加」で以下を追加:`);
      console.log(`   メール: ${creds.client_email}`);
      console.log(`   役割: 閲覧者`);
      console.log('\n権限追加後、数分待ってから再実行してください。');
    }
  }

  console.log('\n========================================\n');
}

checkAccess().catch(console.error);
