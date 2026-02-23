# T-SG1-001: llm.txt作成・配置

## 📋 タスク概要

**タスクID**: T-SG1-001
**タスク名**: llm.txt作成・配置
**種別**: implementation
**優先度**: P0
**推定作業時間**: 0.5日

### 目的
LLM（Large Language Model）向けのサイト情報ファイル `llm.txt` を作成し、`public/` ディレクトリに配置する。AI検索エンジンがサイトを正しく理解できるようにする。

---

## 🎯 成果物

- `public/llm.txt`

---

## ✅ 完了条件

- [ ] llm.txtにサイト情報が正しく記述されている
- [ ] https://saharasabaka.vercel.app/llm.txt でアクセス可能
- [ ] サイト概要、主要コンテンツ、推奨ページが含まれる

---

## 📚 参照情報

- **設計書**: [Context/01_llm.txt仕様.md](../Context/01_llm.txt仕様.md)
- **llm.txt公式仕様**: https://llmstxt.org/

---

## 🔧 実装手順

### Step 1: public/llm.txtを作成

```bash
touch public/llm.txt
```

### Step 2: llm.txtの内容を記述

以下の内容を `public/llm.txt` に記述：

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

## Target Audience

### Primary
- Marathon Des Sables challengers (サハラマラソン挑戦予定者)
- Running & marathon enthusiasts (ランニング・マラソン愛好家)
- People seeking motivation to take first steps (一歩踏み出したい人)

### Secondary
- Ultra marathon runners (ウルトラマラソンランナー)
- Adventure travel enthusiasts (冒険・旅行好き)
- Self-improvement seekers (自己啓発層)

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

### Step 3: ビルド・デプロイ

```bash
npm run build
# Vercelに自動デプロイ
```

### Step 4: 動作確認

```bash
curl https://saharasabaka.vercel.app/llm.txt
```

または、ブラウザで直接アクセス：
```
https://saharasabaka.vercel.app/llm.txt
```

---

## 🧪 テスト方法

### 1. ローカル確認
```bash
npm start
# http://localhost:3000/llm.txt にアクセス
```

### 2. 本番確認
- デプロイ後、`https://saharasabaka.vercel.app/llm.txt` にアクセス
- 内容が正しく表示されることを確認

### 3. AI検索での確認
- ChatGPT、Claude等で「サハラサバカ」を検索
- サイト情報が正しく理解されているか確認（数日後）

---

## 📝 実装メモ

**参考**: Context/01_llm.txt仕様.md の設計に従って作成。

**注意点**:
- プレーンテキスト形式（Markdown風だがHTMLタグは使用しない）
- 改行と空行で構造を表現
- AI検索エンジンが読みやすい形式

---

## 🔄 次のステップ

このタスク完了後、以下のタスクに進む：
- **T-SG1-002**: 基本構造化データ実装（並行実行可能）
- **T-SG1-003**: AI Referer検出ロジック実装

---

**作成日**: 2026-02-23
**ステータス**: Pending
