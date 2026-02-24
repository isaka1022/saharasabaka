import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { google } from 'googleapis';
import * as dotenv from 'dotenv';
dotenv.config();

async function listProperties() {
  console.log('サービスアカウント情報:');
  console.log('Credentials file:', process.env.GOOGLE_APPLICATION_CREDENTIALS);

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });

    const authClient = await auth.getClient();
    const analytics = google.analytics({ version: 'v3', auth: authClient as any });

    console.log('\n認証成功！');
    console.log('\nGA4プロパティを確認してください:');
    console.log('https://analytics.google.com/');
    console.log('\n管理 > プロパティ設定 でプロパティIDを確認してください');
    console.log('現在設定されているプロパティID:', process.env.GA4_PROPERTY_ID);

  } catch (error: any) {
    console.error('エラー:', error.message);
  }
}

listProperties();
