---
title: "Hugoでテーマが反映されない（画面が真っ白のまま）"
date: 2021-12-21T18:08:57+09:00
draft: true
image: "2021-12-21.jpg"
authors: wyoshi
categories:
  - web
tags:
  - Hugo
  - Web
  - デザイン
  - web
  - 開発
  - HTML
  - Webデザイナー
  - フロントエンジニア
---
Hugoではテーマ（theme）を使って簡単にブログやサイトを作成することが可能です。テーマはGitHubなどにたくさん公開されて簡単に導入することが可能です。
しかし、テーマををインストールするのを忘れてしまうと、不具合の原因につながってしまうので注意が必要です。

今回はHugoを使って構築したサイトで、テーマが反映されずに画面が真っ白のまま担ってしまった場合の対処法を説明してきます。

## テーマはサブモジュールでインストール
テーマはGitで管理されていることが多いので、そのままインストールしてしまうとHugoのディレクトリを汚染してしまいます。
Hugoでテーマをインストールする際はサブモジュール（submodule）として管理するようにしましょう。そうすることで、本来のHugoディレクトリに影響を与えることなく、テーマのアップデートなどを実行できます。

## サイトをクローンしたら画面が真っ白のままになった
Hugoで作成したサイトを別の端末などでクローンした際に、画面が真っ白になってしまうことがあります。この問題に直面した場合は、まずはテーマがインストールされているかを確認しましょう。

インストールされていない場合は、サブモジュール化されたテーマを再度インストールすることで画面が真っ白い状態から正常な表示に変わるかと思います。

サブモジュールのインストールコマンドは下記のようになります。
```bash
git submodule update --init --recursive
```

Hugoのサイトを```git clone```する際は、テーマが反映されない場合が多いので、サブモジュールのインストールも忘れずに行うようにしましょう。

## クローンするときに一緒にサブモジュールもインストール
そうは言っても、サブモジュールのインストールを忘れることが多いです。
その場合は、初回git cloneする際にsubmodule（サブモジュール）も一緒にcloneすることで不具合を起こすことなく、表示することができます。
```bash
git clone --recursive {クローンしたいリポジトリ}
````

## まとめ
Hugoでテーマが反映されない（画面が真っ白のまま）のときの対応はいかがだったでしょうか。
サブモジュールで管理できるのは便利であると同時に、忘れてしまうとサイトの不具合につながってしまい、別端末で正常に動作していると解決が難しくなってしまうことも多いと思います。
Hugoのサイトをgit cloneする際はサブモジュールでテーマの反映も忘れないようにしておきましょう。

## おすすめの書籍
{{% amazon title=" 改訂2版 わかばちゃんと学ぶ Git使い方入門〈GitHub、SourceTree、コマンド操作対応〉 " url="https://www.amazon.co.jp/改訂2版-わかばちゃんと学ぶ-Git使い方入門〈GitHub、SourceTree、コマンド操作対応〉-湊川-あい/dp/4863543433/?tag=nlpqueens09-22" summary=` マンガと実践で学ぶGitの入門書が最新情報に対応して改訂しました! Gitの概念はもちろん、GitHubについても丁寧に解説しています。これからGitを使い始める人にオススメの1冊です。` imageUrl="https://images-fe.ssl-images-amazon.com/images/I/51ITQMzMG2L.jpg" %}}

{{% amazon title=" いちばんやさしいGit&GitHubの教本 人気講師が教えるバージョン管理&共有入門 (「いちばんやさしい教本」シリーズ) " url="https://www.amazon.co.jp/いちばんやさしいGit-GitHubの教本-人気講師が教えるバージョン管理-共有入門-「いちばんやさしい教本」シリーズ/dp/429500524X/?tag=nlpqueens09-22" summary=` 実際のワークフローをイメージしながら 実践的なGit/GitHubの使い方が身につく「いちばんやさしい」入門書です。 前半は、手元のパソコンでファイルを実際にバージョン管理しながら、 Gitの基本的な使い方を解説。 後半では、実践的なワークフローに沿ってGitHubを使い、 チームメンバーと一緒に開発を進めるための知識が身につきます。` imageUrl="https://images-fe.ssl-images-amazon.com/images/I/51XKtp0hjmL.jpg" %}}

## 書籍の紹介
{{% amazon

title="UNIXという考え方―その設計思想と哲学 単行本 – 2001/2/23"
url="https://www.amazon.co.jp/UNIX%25E3%2581%25A8%25E3%2581%2584%25E3%2581%2586%25E8%2580%2583%25E3%2581%2588%25E6%2596%25B9%25E2%2580%2595%25E3%2581%259D%25E3%2581%25AE%25E8%25A8%25AD%25E8%25A8%2588%25E6%2580%259D%25E6%2583%25B3%25E3%2581%25A8%25E5%2593%25B2%25E5%25AD%25A6-Mike-Gancarz/dp/4274064069/ref=sr_1_1?keywords=unix%25E3%2581%25A8%25E3%2581%2584%25E3%2581%2586%25E8%2580%2583%25E3%2581%2588%25E6%2596%25B9&amp;qid=1667786898&amp;qu=eyJxc2MiOiIxLjEwIiwicXNhIjoiMC4zOSIsInFzcCI6IjAuMzEifQ%253D%253D&amp;sprefix=unix%25E3%2581%25A8%25E3%2581%2584%25E3%2581%2586%252Caps%252C257&amp;sr=8-1&_encoding=UTF8&tag=nlpqueens09-22&linkCode=ur2&linkId=0249eb4cab50d700fb6949eb9aeafef1&camp=247&creative=1211"
imageUrl="https://m.media-amazon.com/images/I/518ME653H3L._SX330_BO1,204,203,200_.jpg"
summary=`   UNIX系のOSは世界で広く使われている。UNIX、Linux、FreeBSD、Solarisなど、商用、非商用を問わず最も普及したOSのひとつであろう。そしてこのOSは30年にわたって使用され続けているものでもある。なぜこれほど長い間使われてきたのか？ その秘密はUNIXに込められた数々の哲学や思想が握っている。
   そもそもUNIXはMulticsという巨大なOSの開発から生まれたものだ。あまりに巨大なMulticsはその複雑さゆえに開発は遅々として進まず、その反省からケン・トンプソンが作ったのがUNIXの初めとされる。その後デニス・リッチーら多数の開発者が携わり、UNIXは発展した。本書はこのUNIXに込められた「思想と哲学」を抽出し、数々のエピソードとともにUNIXの特徴を浮き彫りにしていく。

   たとえば本書で述べられているUNIXの発想のひとつとして「過度の対話式インタフェースを避ける」というものがある。UNIXのシステムは初心者には「不親切」なつくり、つまり親切な対話式のインタフェースはほとんどなく、ユーザーがコマンドを実行しようとするときはオプションをつける形をとっている。この形式はオプションをいちいち覚えねばならず、初心者に決してやさしくない。しかしこれはプログラムを小さく単純なものにし、他のプログラムとの結合性を高くする。そして結果としてUNIXのスケーラビリティと移植性の高さを支えることになっているのだ。このような形式で本書では9つの定理と10の小定理を掲げ、UNIXが何を重視し、何を犠牲にしてきたのかを明快に解説している。

   最終章にはMS-DOSなどほかのOSの思想も紹介されている。UNIXの思想が他のOSとどう違うかをはっきり知ることになるだろう。UNIXの本質を理解するうえで、UNIX信者もUNIX初心者にとっても有用な1冊だ。（斎藤牧人）`
%}}

{{% amazon

title="詳解 シェルスクリプト 大型本  2006/1/16"

url="https://www.amazon.co.jp/gp/proteect/4873112672/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4873112672&linkCode=as2&tag=nlpqueens09-22&linkId=ef087fd92d3628bb94e1eb10cb202d43"

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

url="https://www.amazon.co.jp/gp/proteect/4797377623/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4797377623&linkCode=as2&tag=nlpqueens09-22&linkId=3c8d4566263ae99374221c4f8f469154"

summary=`すべてのUNIXエンジニア必携!!

サーバー管理、ネットワーク管理など、現場で使えるテクニックを豊富にちりばめたシェルスクリプトサンプル集の決定版。
知りたいことがきっと見つかる秘密の道具箱。Linux、FreeBSD、MacOS対応。
`
imageUrl="https://m.media-amazon.com/images/I/51R5SZKrEAL._SL250_.jpg"
%}}


{{% amazon

title="[改訂第3版]シェルスクリプト基本リファレンス ──#!/bin/shで、ここまでできる (WEB+DB PRESS plus) 単行本（ソフトカバー）  2017/1/20"

url="https://www.amazon.co.jp/gp/proteect/4774186945/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4774186945&linkCode=as2&tag=nlpqueens09-22&linkId=8ef3ff961c569212e910cf3d6e37dcb6"

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

url="https://www.amazon.co.jp/gp/proteect/4797393106/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4797393106&linkCode=as2&tag=nlpqueens09-22&linkId=f514a6378c1c10e59ab16275745c2439"

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










