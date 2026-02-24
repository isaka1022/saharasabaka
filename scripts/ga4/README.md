# Google Analytics 4 レポートスクリプト

サハラサバカプロジェクトのGA4データを取得・分析するためのスクリプト集です。

## 前提条件

1. **Google Cloud Project**: Google Analytics Data APIが有効化されたGCPプロジェクト
2. **サービスアカウント**:
   - GCPでサービスアカウントを作成
   - JSONキーファイルをダウンロード
3. **GA4プロパティアクセス**:
   - GA4プロパティの管理画面で「プロパティ設定」を開く
   - サービスアカウントのメールアドレス(`...@...iam.gserviceaccount.com`)を「閲覧者」権限で追加

## セットアップ

### 1. 依存関係のインストール

```bash
cd scripts/ga4
npm install
```

### 2. 環境変数の設定

`.env` ファイルを `scripts/ga4/` に作成:

```bash
GA4_PROPERTY_ID=あなたのプロパティID（数字のみ、例: 123456789）
GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account-key.json
```

#### プロパティIDの確認方法

1. https://analytics.google.com/ にログイン
2. 左下の「管理」⚙️アイコンをクリック
3. 中央カラムの「プロパティ設定」を選択
4. 「プロパティID」をコピー（数字のみ、例: `123456789`）

#### サービスアカウントの作成方法

1. [Google Cloud Console](https://console.cloud.google.com/) にアクセス
2. プロジェクトを選択（または新規作成）
3. 「APIとサービス」→「認証情報」に移動
4. 「認証情報を作成」→「サービスアカウント」
5. サービスアカウント名を入力（例: `ga4-reporter`）
6. 作成後、サービスアカウントをクリック
7. 「キー」タブ→「鍵を追加」→「新しい鍵を作成」
8. JSON形式を選択してダウンロード
9. ダウンロードしたJSONファイルを安全な場所に保存
10. そのパスを `.env` の `GOOGLE_APPLICATION_CREDENTIALS` に設定

#### GA4プロパティへのアクセス権限付与

1. [Google Analytics](https://analytics.google.com/) にログイン
2. 左下の「管理」をクリック
3. 「プロパティ」列の「プロパティのアクセス管理」を選択
4. 右上の「+」→「ユーザーを追加」
5. サービスアカウントのメールアドレス（`...@...iam.gserviceaccount.com`）を入力
6. 役割を「閲覧者」に設定
7. 「追加」をクリック

## 使用方法

### アクセス確認

GA4への接続テスト:

```bash
npm run check
```

### 簡易レポート（推奨）

イベント一覧、流入元、リファラー分析:

```bash
npm run report
```

### 詳細レポート

トラフィック概要、デバイス別、人気ページ、カスタムイベントなどを表示:

```bash
npm run detailed-report
```

### AI経由トラフィック分析

AI経由の訪問、アフィリエイトクリック、スポンサー問い合わせを分析（カスタムイベントが記録されている場合のみ）:

```bash
npm run ai-traffic-report
```

### デイリーレポート（Slack通知）

昨日のデータをSlackに通知:

```bash
npm run daily-report
```

`.env` に `SLACK_WEBHOOK_URL` を設定する必要があります。

## トラブルシューティング

### エラー: `Could not load the default credentials`

→ `GOOGLE_APPLICATION_CREDENTIALS` 環境変数が正しく設定されているか確認してください。

### エラー: `User does not have sufficient permissions`

→ サービスアカウントがGA4プロパティに「閲覧者」権限で追加されているか確認してください。

### エラー: `Property not found`

→ `GA4_PROPERTY_ID` が正しいか（測定ID `G-XXXXXXXX` ではなく、数字のみのプロパティID）確認してください。

## GitHub Actions による自動レポート

毎日 日本時間 9:00 に自動でGA4レポートをSlackに送信します。

### セットアップ手順

#### 1. Slack Webhook URLの取得

1. https://api.slack.com/apps にアクセス
2. 「Create New App」→「From scratch」
3. App名と送信先Workspaceを選択
4. 「Incoming Webhooks」を有効化
5. 「Add New Webhook to Workspace」でチャンネルを選択
6. 生成されたWebhook URLをコピー

#### 2. GitHub Secretsの設定

1. GitHubリポジトリの「Settings」→「Secrets and variables」→「Actions」
2. 以下の3つのSecretを追加:

| Secret名 | 値 |
|----------|---|
| `GA4_PROPERTY_ID` | プロパティID（数字のみ、例: `481468232`） |
| `GA4_SERVICE_ACCOUNT_JSON` | サービスアカウントJSONファイルの内容全体 |
| `SLACK_WEBHOOK_URL` | Slack Webhook URL |

**GA4_SERVICE_ACCOUNT_JSON の設定方法:**

```bash
cat scripts/ga4/service-account.json | pbcopy
```

コピーした内容をそのままSecretに貼り付けます。

#### 3. ワークフローの確認

`.github/workflows/daily-ga4-report.yml` が作成されていることを確認します。

#### 4. 手動実行テスト

1. GitHubリポジトリの「Actions」タブ
2. 「Daily GA4 Report to Slack」を選択
3. 「Run workflow」で手動実行
4. Slackに通知が届くことを確認

#### 5. スケジュール実行

毎日 UTC 0:00（日本時間 9:00）に自動実行されます。

実行時間を変更したい場合は、`.github/workflows/daily-ga4-report.yml` の `cron` を編集:

```yaml
schedule:
  # 毎日 日本時間 18:00 (UTC 9:00) に実行
  - cron: '0 9 * * *'
```

## カスタムイベント一覧

実装済みのカスタムイベント:

| イベント名 | パラメータ | 説明 |
|-----------|-----------|------|
| `ai_visit` | `ai_platform`, `page_path`, `referer` | AI経由の訪問 |
| `ai_conversion` | `ai_platform`, `conversion_type`, `time_to_conversion_ms` | AI経由のコンバージョン |
| `affiliate_click` | `product_name`, `affiliate_type`, `ai_platform` | アフィリエイトリンククリック |
| `sponsor_inquiry` | `inquiry_type`, `ai_platform` | スポンサー問い合わせ |

## 参考リンク

- [Google Analytics Data API (Node.js)](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries)
- [GA4 ディメンションと指標](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema)
