---
authors: suzuki
title: "【２８．dateコマンド】ざっくりわかる「シェルスクリプト」"
description: "dateコマンドを使用して、現在のシステムの日付と時刻の値を取得することができます。日付と時刻は、「Y」、「m」、「d」、「H」、「M」、および「S」を使用します。'date_parse.sh'という名前の新しいファイルを作成し、次のコードを追加して、日、月、年、時、分、秒の値を表示します。"
date: 2022-01-13T11:26:13+09:00
draft: false
image: shellscript.jpg
categories:
  - programming
tags:
  - プログラミング
  - シェルスクリプト
  - Bash
  - 鈴木維一郎
---


## dateコマンド
<font color=orange><b>現在の日付を解析する：</b></font>
dateコマンドを使用して、現在のシステムの日付と時刻の値を取得することができます。日付と時刻は、「Y」、「m」、「d」、「H」、「M」、および「S」を使用します。'date_parse.sh'という名前の新しいファイルを作成し、次のコードを追加して、日、月、年、時、分、秒の値を表示します。

``` bash:date_parse.sh
#!/bin/bash

Year=`date +%Y`;
Month=`date +%m`;
Day=`date +%d`;
Hour=`date +%H`;
Minute=`date +%M`;
Second=`date +%S`;
echo `date`;
echo "Current Date is: $Day-$Month-$Year";
echo "Current Time is: $Hour:$Minute:$Second";
```

bashコマンドでファイルを実行します。

```
$ bash date_parse.sh
2022年 1月13日 木曜日 12時19分06秒 JST
Current Date is: 13-01-2022
Current Time is: 12:19:06
$
```

{{% tips-list tips %}}
ヒント
: dateコマンドは覚えるのではなく、manコマンドで都度、探しましょう。きりがないです。できる事を覚えておけばオッケーです。以下にありきたりなパターンを列挙しておきます。
{{% /tips-list %}}

```
$ date '+%Y/%m/%d'
2005/09/11

$ date '+%Y/%m/%d(%a)'
2005/09/11(Sun)

$ date '+%y/%m/%d'
05/09/11

$ date '+%F'
2005-09-11

$ date '+%D'
09/11/05

$ date '+%R'
01:18

$ date '+%T'
01:18:01

$ date '+%r'
01:18:06 AM

$ date '+%Y/%m/%d%n%r'
2005/09/11
01:18:27 AM
#↑%n を使用することで、出力に改行を含めることができる。

# 1日後
$ date -d '1 day'

# 2日後
$ date -d '2 days

# 1日前
$ date -d '1 day ago'

# 1ヶ月前
$ date -d '1 month ago'

# 1年前
$ date -d '1 year ago'

# 1時間前
$ date -d '1 hour ago'

# 1分前
$ date -d '1 minute ago'

# 1秒前
$ date -d '1 second ago'
```

```:直近5分以内にあるerrorログを表示
$ IFSBK=${IFS} ; IFS=$'\n' ; for record in $(cat /var/log/messages ) ; do if [ $(( $(date +"%s") - 300 )) -lt $(echo ${record} | cut -d" " -f 1,2,3 | date --date="$(cat -)" +"%s") ] ; then echo ${record} ; fi ; done | grep error ; IFS=${IFSBK}
```





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


