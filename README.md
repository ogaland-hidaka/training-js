- [環境構築](#環境構築)
- [起動](#起動)
- [研修のプログラム作成方法](#研修のプログラム作成方法)
  - [実行方法](#実行方法)


## 環境構築

1. ローカルのWSLに、新しいディストリビューションを作成（ogatraining）
2. 下記ディレクトリに本プロジェクトをclone
   ```bash
   /var/develop
   ```

## 起動

```bash
docker compose build                # コンテナビルド（少々時間かかるかも）
docker compose up -d                # コンテナ起動
docker compose exec node sh         # コンテナに入る
```

## 研修のプログラム作成方法

- training フォルダ配下に下記のようにフォルダ＆ファイルを作成

```
training
├ basic
│  ├ Level01
│  │  ├ Step01
│  │  └ Step02・・・
│  ├ Level02・・・
└ practice
   ├ Level01
   │  ├ Step01
   │  └ Step02・・・
   ├ Level02・・・
```

### 実行方法
- node コマンドで js ファイルを実行して結果を確認する
```bash
※コンテナに入ってから
/var/www/html # cd training/
/var/www/html/training # node index.js
Hello world
/var/www/html/training #
```

### memo
1. Javascript研修
```
・Alert確認ではなく、コンソールから実行して確認をすること
```