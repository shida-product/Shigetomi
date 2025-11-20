# Google Sitesへの設置方法

## 📋 手順

### 方法1: HTMLファイルをアップロードして埋め込む（推奨）

1. **HTMLファイルをGoogle Driveにアップロード**
   - `language-selector.html` をGoogle Driveにアップロード
   - ファイルを右クリック → 「共有」→ 「リンクを知っている全員」に変更
   - 「リンクをコピー」をクリック

2. **Google Sitesで埋め込み**
   - Google Sitesの編集画面を開く
   - 「挿入」→ 「埋め込み」→ 「URLで埋め込み」
   - コピーしたGoogle DriveのリンクのID部分を使って以下の形式で貼り付け:
   ```
   https://drive.google.com/file/d/FILE_ID/preview
   ```

### 方法2: 外部ホスティングを利用（より確実）

1. **HTMLファイルをウェブサーバーにアップロード**
   - GitHub Pages、Netlify、Vercelなど無料サービスを利用
   - または自社のウェブサーバーにアップロード

2. **Google Sitesで埋め込み**
   - 「挿入」→ 「埋め込み」→ 「URLで埋め込み」
   - アップロードしたHTMLのURLを貼り付け

### 方法3: HTMLを直接貼り付け（制限あり）

Google Sitesは直接HTMLの貼り付けに制限がありますが、以下の方法が可能：
- 「挿入」→ 「埋め込み」→ 「埋め込みコード」を選択
- ただし、JavaScriptやCSSが制限される可能性があります

---

## ⚙️ カスタマイズ方法

### 1. GoogleフォームURLの設定

`language-selector.html` の各ボタンのURLを実際のフォームURLに変更：

```html
<!-- 例: 日本語フォーム -->
<button onclick="selectLanguage('https://docs.google.com/forms/d/e/YOUR_JAPANESE_FORM_ID/viewform', 'ja')">
```

↓ 変更後

```html
<button onclick="selectLanguage('https://docs.google.com/forms/d/e/1FAIpQLSe...YOUR_ACTUAL_ID.../viewform', 'ja')">
```

### 2. アイコンの差し替え

HTMLファイル内の`<!-- ★ アイコン差し替えポイント -->`というコメントがある箇所を探す：

**現在（SVGアイコン）:**
```html
<svg class="custom-icon text-amber-50" xmlns="http://www.w3.org/2000/svg" ...>
  ...
</svg>
```

**画像に差し替える場合:**
```html
<img src="https://your-domain.com/your-icon.png" class="custom-icon" alt="Icon">
```

または、Google Driveにアップロードした画像を使用：
```html
<img src="https://drive.google.com/uc?id=YOUR_IMAGE_FILE_ID" class="custom-icon" alt="Icon">
```

### 3. カラーの変更

主要な色を変更する場合：

- **赤色（メインカラー）**: `red-800` → 別の色（例: `blue-800`）
- **琥珀色（アクセント）**: `amber-400` → 別の色（例: `yellow-400`）

HTML内で検索置換を使って一括変更できます。

### 4. テキストの変更

- ヘッダーの「ようこそ」を施設名に変更
- フッターメッセージをカスタマイズ
- 各言語の説明文を変更

---

## 📱 QRコードの作成

1. Google Sitesで公開したページのURLをコピー
2. QRコード生成サービスを利用（例：https://www.qr-code-generator.com/）
3. URLを入力してQRコードを生成
4. 印刷して施設内に掲示

---

## 🔧 トラブルシューティング

### Q: Google Sitesで表示されない
A: Google Sitesの埋め込み機能には制限があるため、外部ホスティング（GitHub Pagesなど）を推奨します。

### Q: スマホで表示が崩れる
A: HTMLファイルには既にモバイル最適化が含まれています。`<meta name="viewport">`タグが正しく設定されているか確認してください。

### Q: アニメーションが動作しない
A: Google Sitesの埋め込みではJavaScriptやCSSアニメーションが制限される場合があります。外部ホスティングをご利用ください。

---

## 📝 ファイル構成

```
language-selector.html     ← メインファイル（これをアップロード）
README-GoogleSites.md     ← この説明書
```

---

## ✅ 推奨環境

- **スマートフォン**: iOS 12以上、Android 8以上
- **ブラウザ**: Chrome、Safari、Firefox、Edge（最新版）
- **画面サイズ**: 320px以上の幅に対応

---

## 💡 より良い方法

Google Sitesの制限を避けるため、以下のサービスでHTMLをホスティングすることを推奨：

1. **GitHub Pages**（無料・推奨）
   - GitHubアカウント作成
   - リポジトリを作成
   - `language-selector.html`を`index.html`にリネームしてアップロード
   - Settings > Pages で公開

2. **Netlify Drop**（無料・簡単）
   - https://app.netlify.com/drop にアクセス
   - HTMLファイルをドラッグ&ドロップ
   - 即座に公開URL取得

3. **Vercel**（無料）
   - GitHubと連携して自動デプロイ

これらのサービスを使えば、Google Sitesに依存せず、確実に動作するURLを取得できます。
