# プロジェクト情報

## 1. プロジェクト概要

このアプリは Next.js, Notion を使用した、自分のポートフォリオアプリです。

### URL

<a href="https://next-notion-blog-flax.vercel.app/"><strong>https://next-notion-blog-flax.vercel.app/</strong></a>

---

## 2. 使用技術

### 選定概要

| 言語・インフラ | 使用した技術                 |
| -------------- | ---------------------------- |
| HTML           | JSX                          |
| CSS            | SCSS                         |
| JS             | React（Next.js: App Router） |
| 型             | TypeScript                   |
| サーバー       | Vercel                       |
| CMS            | Notion                       |

---

## 3. git ルール

### 基本的な git 流れ

1. 開発
1. 追加・変更点をステージング
   ▼ ファイル単位で指定
   `git add [ファイル名]`
   ▼ 変更したファイルをすべて指定
   `git add --all`
1. コミット（編集作業をローカルリポジトリに記録させること）
   `git commit -m "メッセージ"`
1. プッシュ（screew のリポジトリにプッシュする）
   `git push`

### commit ルール について

ルール

1. コミットは追加や修正、削除など細かい粒度で行う 複数のタスクが混ざっているコミットは NG
1. コミットの種別を英単語の動詞で示す（Fix、Add、Remove など）
   種別英単語＋内容 で記述する

`[Fix]`：(バグやミスの) 修正
※軽微な問題の修正やちょっとしたエラーの解決などはこれでコミット、タイプミスの修正もこれ
`[Add]`　(ファイルや機能の) 追加
`[Remove]` ：(コードやファイルの) 削除
`[Update]` ：(Fix ではないコードや機能の) 修正改善　作成途中　更新作業等
`[Upgrade]`：(パッケージやドキュメントなどの) 更新
例：コミットの書き方
`git commit -m "[Fix] headerが追従しない不具合を修正"`

---
