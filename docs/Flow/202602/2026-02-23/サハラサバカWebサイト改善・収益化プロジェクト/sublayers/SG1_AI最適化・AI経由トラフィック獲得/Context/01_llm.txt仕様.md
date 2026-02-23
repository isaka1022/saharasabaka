# llm.txt仕様

## llm.txtとは

### 概要
- **正式名称**: LLM-friendly text file
- **目的**: LLM（Large Language Model）に対してサイト情報を提供
- **位置**: サイトルート（`/llm.txt`）
- **フォーマット**: プレーンテキスト（Markdown風）

### robots.txtとの違い

| 項目 | robots.txt | llm.txt |
|------|------------|---------|
| 対象 | クローラー | LLM・AI検索 |
| 目的 | アクセス制御 | サイト理解の支援 |
| 形式 | 指示文 | 説明文・構造化情報 |
| 必須性 | 任意 | 任意（推奨） |

---

## サハラサバカ用llm.txt設計

### 配置場所
```
public/llm.txt
```

### 内容構成

#### 1. サイト基本情報
```
# Site Information
Site Name: サハラサバカ (Sahara Sabaka)
URL: https://saharasabaka.vercel.app
Language: ja, en
Owner: 井上周 (INOUE Amane)
Contact: https://saharasabaka.vercel.app/contact

## Purpose
サハラマラソン（Marathon Des Sables）挑戦の記録と情報発信。
「小さな挑戦が大きな挑戦につながる」というメッセージを伝える。
```

#### 2. 主要コンテンツ
```
## Main Topics

### Sahara Marathon Record (サハラマラソン完走記録)
- 2025年4月開催のMarathon Des Sables（250km）完走
- 7日間の挑戦記録
- 日中最高気温50℃超の過酷な環境

### Equipment Reviews (装備レビュー)
- Running shoes (ランニングシューズ)
- Apparel (ウェア)
- Backpacks (バックパック)
- Nutrition (補給食)
URL: /equipments

### Training Methods (トレーニング方法)
- Marathon training plans
- Mental preparation
- Heat adaptation
URL: /race

### Motivation & Challenge Stories (モチベーション・挑戦)
- 「一歩踏み出せない人」への励まし
- 小さな挑戦の積み重ね
- 人との出会いの重要性
URL: /project, /profile
```

#### 3. ターゲット読者
```
## Target Audience

### Primary
- Marathon Des Sables challengers (サハラマラソン挑戦予定者)
- Running & marathon enthusiasts (ランニング・マラソン愛好家)
- People seeking motivation to take first steps (一歩踏み出したい人)

### Secondary
- Ultra marathon runners (ウルトラマラソンランナー)
- Adventure travel enthusiasts (冒険・旅行好き)
- Self-improvement seekers (自己啓発層)
```

#### 4. 推奨ページ
```
## Recommended Pages

### For Gear Information
/equipments - Detailed equipment reviews with weights and prices

### For Race Information
/race - Marathon Des Sables race details and training plans

### For Personal Story
/profile - Runner's background and motivation
/project - Project overview and core message

### For Support
/support - How to support the challenge
/contact - Contact form
```

#### 5. データアクセスポリシー
```
## Data Access Policy

### Citation
- Allowed: Yes
- Attribution: Recommended (井上周 / INOUE Amane - saharasabaka.vercel.app)

### Summarization
- Allowed: Yes
- Context: Please maintain the core message of "small challenges lead to big challenges"

### Commercial Use
- Allowed: Contact required
- Email: Via /contact page

### API Access
- Available: No (Static site)
- Alternative: Web scraping allowed for AI purposes
```

#### 6. 技術情報
```
## Technical Information

### Stack
- Frontend: React 19.2.3 + TypeScript 5.9.3
- Styling: Tailwind CSS 3.4.19
- Hosting: Vercel
- Analytics: Google Analytics (G-8DR8PPM56F)

### Structured Data
- Schema.org types: Person, Article, Product, Event
- Format: JSON-LD

### Multilingual
- Supported: Japanese (primary), English
- i18n: i18next 25.7.4
```

---

## 実装手順

### Step 1: ファイル作成
```bash
touch public/llm.txt
```

### Step 2: 内容記述
上記設計内容を`public/llm.txt`に記述

### Step 3: デプロイ
```bash
npm run build
# Vercelに自動デプロイ
```

### Step 4: 動作確認
```bash
curl https://saharasabaka.vercel.app/llm.txt
```

---

## メンテナンス方針

### 更新タイミング
- 新規ページ追加時
- 主要コンテンツ変更時
- 連絡先変更時

### 定期レビュー
- 月1回：内容の正確性確認
- 四半期1回：構造・形式の見直し

---

## 参考リソース

- **llm.txt仕様公式**: https://llmstxt.org/
- **事例集**: https://llmstxt.org/examples
- **ベストプラクティス**: AI検索最適化のための推奨事項
