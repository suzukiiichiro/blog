---
authors: suzuki
title: "【wLu】Bashで便利なコマンドを作ってみようって話" 
description: "今回は、シェルスクリプトとnkfコマンドを使って、日常よく使う作業を簡単にしてみようって話です"
date: 2021-12-23T10:27:27+09:00
image: 2021-12-23-bash.jpg
draft: false
categories:
  - programming
tags:
  - プログラミング
  - シェルスクリプト
  - Bash
  - nkf
  - ユーティリティ
  - 鈴木維一郎
---


## 必要なもの

ネットワーク漢字フィルター nkf
※macの場合、[Homebrew](https://brew.sh/index_ja "Homebrew") が必要になります。

## nkf インストールの手順
まず、nkfがインストールされているかを確認します。
```bash
$ which nkf 
/usr/local/bin/nkf
```

インストールされていない場合、macの場合はbrewでインストールします。
```bash
$ brew install nkf 
```

インストールしようとすると以下のエラーが出ることがあります
```bash
Error: The `brew link` step did not complete successfully
The formula built, but is not symlinked into /usr/local
Could not symlink share/man/ja/man1/nkf.1
/usr/local/share/man/ja/man1 is not writable.

```

権限周りを下記のコマンドを打って変更します。
```bash
sudo chmod 775 /usr/local/share/man/ja/man1
sudo chown <ユーザ名>:admin /usr/local/share/man/ja/man1
```
下記のページを参考にさせていただきました
<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fblog.kozakana.net%2F2018%2F09%2Fhomebrew_link_error%2F" title="Homebrewでインストール時にlinkが出来ないエラー | Simple is Beautiful." class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe></p>

コマンドを確認します。
```bash
$ nkf -v
Network Kanji Filter Version 2.1.5 (2018-12-15)
Copyright (C) 1987, FUJITSU LTD. (I.Ichikawa).
Copyright (C) 1996-2018, The nkf Project.
```

##  使い方
nkfコマンドとは？
「nkf」は「Network Kanji Filter」の略で、LinuxとWindowsなど、異なるOS間でテキストデータを交換する際に問題となる文字コードと改行コードを変換するためのコマンドです。

nkfコマンドの書式
nkf オプション ファイル名

UTF-8に変換する場合は、オプションに wLu をつけて変換します。
```bash
$ nkf -wLu isofile.txt > utf8.txt
```

### 変換の流れ（手動編）

元ファイル  moto.txt (UTF-8以外のファイルエンコード、改行コード）
  ↓
変換後のファイル ato.txt(UTF-8に変換したファイル）
  ↓
変換後のファイルをリネームする
```bash
# UTF-8に変換
$ nkf -wLu moto.txt > ato.txt

# 変換後のファイルを元のファイル名にリネームする
$ mv ato.txt moto.txt

# vimiでファイルエンコードを確認する
$ vim moto.txt
```

面倒ですね。ここで、一発でUTF-8に変換するコマンドを作成してみます。


###  変換の流れ（自動編）
```bash
# UTF-8に変換 wLu コマンドをこれから自作します
$ wLu moto.txt
$ vim moto.txt ← UTF-8 に変換されている！
```

### コマンドの内容

まずファイルを作ります。ファイル名は wLu とします
```bash
# wLu というファイルを作成
$ :> wLu

# vim で wLu を開く
$ vim wLu 
```

以下の内容をファイルに貼り付ける

```bash
#!/bin/bash

#################################################
# パラメータで渡されたファイル名をutf8に変換する
#
# 使い方
# wLu UTF-8に変換したいファイル名
# wLu を /usr/local/bin/にコピーすると
# 通常のコマンドとして本実行ファイルを利用する事が出来ます。
#
#################################################
#
filename="$1" ;
#
function wLu(){
  if [ -f "$filename" ]; then
    cat "$filename" | nkf -wLu > "$filename".u ;
    mv "$filename".u "$filename" ;
  fi
}
#
if ! which nkf >/dev/null 2>&1; then
  echo "nkf がありません" ;
  echo "nkf をインストールして下さい" ; 
  exit ;
fi
#
if [ -z "$filename" ] ; then
  echo "第一引数にファイル名を指定して下さい"
  echo "実行例： wLu filename" ;  
  exit ;
fi
# 実行
wLu ;
# 終了
exit ;
```

作成したファイルには日本語が含まれているため、wLuファイルを UTF-8に変換しておきます。
```bash
# wLu ファイルをnkf -wLu でUTF-8に変換
$ nkf -wLu wLu > wLu.txt

# wLu.txtをwLuにリネームします
$ mv wLu.txt wLu

# 作成したwLuコマンドファイルを/usr/local/bin にコピーします
$ sudo wLu /usr/local/bin/

# コマンドが配置されたかを確認
$ which wLu
$ /usr/local/bin/wLu
```

### 使い方

```bash
# UTF-8以外のファイルエンコードファイル
$ cat moto.txt
$ wLu moto.txt
```

変換結果を一時ファイルにし、リネームする手間が省けます。
便利ですね。

## 書籍の紹介

{{% amazon

title="詳解 シェルスクリプト 大型本 – 2006/1/16"

url="https://www.amazon.co.jp/gp/product/4873112672/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4873112672&linkCode=as2&tag=nlpqueens-22&linkId=ef087fd92d3628bb94e1eb10cb202d43"

summary=`Unixのプログラムは「ツール」と呼ばれます。
Unixは、処理を実現するために複数の道具(ツール)を組み合わせる「ソフトウェアツール」という思想の下に設計されているためです。
そしてこれらツールを「組み合わせる」ということこそがUnixの真髄です。
また、シェルスクリプトの作成には言語自体だけでなくそれぞれのツールに対する理解も求められます。
つまり、あるツールが何のためのものであり、それを単体あるいは他のプログラムと組み合わせて利用するにはどのようにすればよいかということを理解しなければなりません。
本書は、Unixシステムへの理解を深めながら、シェルスクリプトの基礎から応用までを幅広く解説します。
標準化されたシェルを通じてUnix(LinuxやFreeBSD、Mac OS XなどあらゆるUnix互換OSを含む)の各種ツールを組み合わせ、
目的の処理を実現するための方法を詳しく学ぶことができます。
`
imageUrl="https://m.media-amazon.com/images/I/51EAPCH56ML._SL250_.jpg"
%}}

{{% amazon

title="UNIXシェルスクリプト マスターピース132"

url="https://www.amazon.co.jp/gp/product/4797377623/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4797377623&linkCode=as2&tag=nlpqueens-22&linkId=3c8d4566263ae99374221c4f8f469154"

summary=`すべてのUNIXエンジニア必携!!

サーバー管理、ネットワーク管理など、現場で使えるテクニックを豊富にちりばめたシェルスクリプトサンプル集の決定版。
知りたいことがきっと見つかる秘密の道具箱。Linux、FreeBSD、MacOS対応。
`
imageUrl="https://m.media-amazon.com/images/I/51R5SZKrEAL._SL250_.jpg"
%}}


{{% amazon

title="[改訂第3版]シェルスクリプト基本リファレンス ──#!/bin/shで、ここまでできる (WEB+DB PRESS plus) 単行本（ソフトカバー） – 2017/1/20"

url="https://www.amazon.co.jp/gp/product/4774186945/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4774186945&linkCode=as2&tag=nlpqueens-22&linkId=8ef3ff961c569212e910cf3d6e37dcb6"

summary=`定番の1冊『シェルスクリプト基本リファレンス』の改訂第3版。
シェルスクリプトの知識は、プログラマにとって長く役立つ知識です。
本書では、複数のプラットフォームに対応できる移植性の高いシェルスクリプト作成に主眼を置き、
基本から丁寧に解説。
第3版では最新のLinux/FreeBSD/Solarisに加え、組み込み分野等で注目度の高いBusyBoxもサポート。
合わせて、全収録スクリプトに関してWindowsおよびmacOS環境でのbashの動作確認も行い、さらなる移植性の高さを追求。
ますますパワーアップした改訂版をお届けします。`
imageUrl="https://m.media-amazon.com/images/I/41i956UyusL._SL250_.jpg"
%}}

{{% amazon

title="新しいシェルプログラミングの教科書 単行本"

url="https://www.amazon.co.jp/gp/product/4797393106/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4797393106&linkCode=as2&tag=nlpqueens-22&linkId=f514a6378c1c10e59ab16275745c2439"

summary=`エキスパートを目指せ!!

システム管理やソフトウェア開発など、
実際の業務では欠かせないシェルスクリプトの知識を徹底解説

ほとんどのディストリビューションでデフォルトとなっているbashに特化することで、
類書と差別化を図るとともに、より実践的なプログラミングを紹介します。
またプログラミング手法の理解に欠かせないLinuxの仕組みについてもできるかぎり解説しました。
イマドキのエンジニア必携の一冊。

▼目次
CHAPTER01 シェルってなんだろう
CHAPTER02 シェルスクリプトとは何か
CHAPTER03 シェルスクリプトの基本
CHAPTER04 変数
CHAPTER05 クォーティング
CHAPTER06 制御構造
CHAPTER07 リダイレクトとパイプ
CHAPTER08 関数
CHAPTER09 組み込みコマンド
CHAPTER10 正規表現と文字列
CHAPTER11 シェルスクリプトの実行方法
CHAPTER12 シェルスクリプトのサンプルで学ぼう
CHAPTER13 シェルスクリプトの実用例
CHAPTER14 テストとデバッグ
CHAPTER15 読みやすいシェルスクリプト
`
imageUrl="https://m.media-amazon.com/images/I/41d1D6rgDiL._SL250_.jpg"
%}}


