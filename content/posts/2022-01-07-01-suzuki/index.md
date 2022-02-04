---
authors: suzuki
title: "ざっくりわかるシェルスクリプト「bash-１」"
date: 2022-01-07T10:03:12+09:00
description: "ここではbashプログラミングの基本的な考え方、bashスクリプトの一般的な操作を、ざっくりと説明します。"
draft: false
image: bash.jpg
categories:
  - プログラミング
tags:
  - プログラミング
  - シェルスクリプト
  - Bash
  - 鈴木維一郎
---

# はじめに
Bashスクリプトは、シェルコマンドの実行、複数のコマンドの同時実行、管理タスクのカスタマイズ、タスクの自動化の実行など、さまざまな目的に使用できます。したがって、bashプログラミングの基本に関する知識はすべてのLinuxユーザーにとって重要です。この記事は、bashプログラミングの基本的な考え方を理解するのに役立ちます。ここでは、bashスクリプトの一般的な操作のほとんどを、非常に簡単な例で説明します。

この記事では、bashプログラミングの次のトピックについて説明します。


## Hello World
<font color=orange><b>はじめてのbashコマンド「echo」</b></font>
ターミナルで非常に単純なbashステートメントを実行します。 コマンドの出力は「Hello, World」になります。


```:はじめてのecho
$ echo "Hello, World"
Hello, World
$
```

 はじめてのbashスクリプト「vim」
```bash:はじめてのbashスクリプト
$ vim HelloWorld.sh
＜空のvim HelloWorld.sh が開きます＞
```

vimで開いたHelloWorld.shを編集します。

```bash:HelloWorld.sh
#!/bin/bash

echo "Hello World";
```
 はじめての実行権限「chmod」
bashファイルは2つの方法で実行できます。
１．bashコマンドを使用する方法、
２．bashファイルに実行権限を設定し、ファイルを実行する方法

一つ目の方法「bashコマンドを使用する」
```
$ bash HelloWorld.sh
```

もう一つの方法「chmodで実行権限を付与する」
```
# +x で実行権限を付与
$ chmod +x HelloWorld.sh
# ドット　スラッシュをつけて実行
$ ./HelloWorld.sh
```

{{% tips-list tips %}}
ヒント
: $ ./ でファイルを実行する場合、ソースファイルの先頭行に記載されている

: #!/bin/bash

: という記述をつかって実行されます。
 
: $ ./<ファイル名> 
 
: で実行した場合は、bashコマンド（/bin/bash )を使って実行することを、ソースファイルの先頭で宣言している。という事になります。
: このソースファイルの1行目の記述を「シェバン」と言います。

: /usr/local/bin/awk

: にあるコマンドを使ってソースファイルを実行( ./<ファイル名>）したい場合は、ソースファイルの先頭行に

: #!/usr/local/bin/awk

: と、記述します。
{{% /tips-list %}}

考え方ですが、bashコマンドで実行する場合のメリットは、ファイルに闇雲に実行権限を与える必要がないことです。実行権限を与える方法は、一般的ではありますが注意も必要です。

chmod の実行権限には +x で実行権限を付与する方法の他、0755 などの数字で付与する場合もあります。
これらを<font color=red>パーミッション</font>と言います。

{{% tips-list tips %}}
ヒント
: 考え方ですが、bashコマンドでファイルを実行する場合のメリットは、ファイルに実行権限をやみくもに与える必要がないことです。
: 同時に、第三者が簡単にファイルを実行できる事を防ぐ、自分自身が誤ってファイルを実行してしまうというケアレスミスを防ぐことができます。
: 実行権限を与える方法は、一般的ではありますが、注意も必要です。
{{% /tips-list %}}

 パーミッションの確認
ターミナルのコマンドでカレントディレクトリ内のファイルやディレクトリの情報を確認します。

```
$ls -l
```
上記のコマンドを実行すると、以下のような一覧が表示されるかと思います。

```
-rw-r--r--  1 user group      9  1月 1 00:00 hoge.txt
drwxr-xr-x  6 user group  20480  1月 1 00:00 ダウンロード
```

 パーミッションの読み方
「-rw-r--r--」や「drwxr-xr-x」の先頭の謎の10文字についてですが、
最初の１文字目はファイル種別を表しています。
-rw-r--r--

<table>
<tr><th>種別</th><th>意味</th></tr>
<tr><td>-</td><td>ファイル</td></tr>
<tr><td>d</td><td>ディレクトリ</td></tr>
<tr><td>l</td><td>シンボリックリンク</td></tr>
</table>

2文字目から4文字目はファイルの所有者に対する権限を表し、
5文字目から7文字目はファイルの所有グループに対する権限を表し、
8文字目から10文字目はその他に対する権限を表しています

上記から-rw-r--r--は、
「ファイル種別」が「ファイル」であり、
「所有者」に「読み取り」と「書き込み」の権限があり、
「所有グループ」に「読み取り」の権限があり、
「その他」に「読み取り」の権限があることを示しています。

drwxr-xr-xは、
「ファイル種別」が「ディレクトリ」であり、
「所有者」に「読み取り」と「書き込み」と「実行」の権限があり、
「所有グループ」に「読み取り」と「実行」の権限があり、
「その他」に「読み取り」と「実行」の権限があることを示しています。

 アクセス権限の変更
アクセス権限を変更する方法について記載します。

パーミッションの変更には<font color=red><b> chmodコマンド</b></font>を使用します。

数値で指定する
```
$ ls -l　
-rw-r--r--  1 user group      9  1月 1 00:00 hoge.txt
$ chmod 764 hoge.txt
$ ls -l
-rwxrw-r--  1 user group      9  1月 1 00:00 hoge.txt
```
上記のコマンドはhoge.txtに対してパーミッションの確認→変更→確認を行っています。
```
$ chmod 764 hoge.txt
```
に関して説明していきます。
ファイルのパーミッションの変更は以下の通りコマンドを実行すれば可能です。
```
chmod モード 対象ファイル名
```
 モードの数字について
<table>
<tr><th>モード(数字)</th><th>モード(アルファベット)</th><th>権限</th></tr>
<tr><td>4</td><td>r</td><td>読み取り</td></tr>
<tr><td>2</td><td>w</td><td>書き込み</td></tr>
<tr><td>1</td><td>x</td><td>実行</td></tr>
</table>
上記の合計値を「所有者」「所有グループ」「その他」の順で入力することでパーミッションを変更することができます。
要するに上記の「764」は
「所有者」に対して「読み取り」「書き込み」「実行」を、
「所有グループ」に対して「読み取り」「書き込み」を、
「その他」に「読み取り」を付与しています。

{{% tips-list tips %}}
ヒント
: 実行したい場合は $ chmod 755 <ファイル名>
: 読み取りのみを許可し、実行しない場合は $ chmod 644 <ファイル名>
: 自分だけの読み取りを許可する場合は $ chmod 600 <ファイル名>
: 通常は上記３種類しか使いません。
: CGI などを使う場合は $ chown や $chgrp を組み合わせて使うことが多いです。
: $ chmod 777 <ファイル名> というパーミッションを軽率に与えず、上手にコマンドを使いこなすことがセキュリティにつながります。
{{% /tips-list %}}



詳しくはこちら
https://qiita.com/shisama/items/5f4c4fa768642aad9e06


## echo コマンド
<font color=orange><b> echoコマンドの使用：</b></font>
さまざまなオプションでechoコマンドを使用できます。
次の例では、いくつかの便利なオプションについて説明します。
オプションなしで「echo」コマンドを使用すると、デフォルトで改行が追加されます。
'-n'オプションは、改行なしでテキストを印刷するために使用され、'-e'オプションは、出力からバックスラッシュ文字を削除するために使用されます。
'echo_example.sh'という名前の新しいbashファイルを作成し、次のスクリプトを追加します。

``` bash:echo_example.sh
#!/bin/bash

echo "改行付きのテキストの印刷";
echo -n "改行なしのテキストの印刷";
echo -e "\n削除\tバックスラッシュ\t文字\n";
```
bashコマンドでファイルを実行します。
```
$ bash echo_example.sh
改行付きのテキストの印刷
改行なしのテキストの印刷
削除	バックスラッシュ	文字
$
```

{{% tips-list tips %}}
ヒント
: echo の利用例は果てしない。ここで説明してもだれも読みはしないだろう。なので、概要の抜粋を説明する

: echo でよく使われるオプションは以下の通り

: オプション	意味
:   -n	      最後の改行を出力しない
:   -e	      エスケープシーケンスを解釈する
:   -E	      エスケープシーケンスを解釈しない（デフォルト）

: エスケープシーケンスとは、上記のバックスラッシュのことだ。
: 以下の4つを覚えておくだけでおおよそは事足りる。

: オプション  意味
:     \r	    キャリッジリターン
:     \n	    改行（フォームフィード＋キャリッジリターン）
:     \t	    水平タブ
:     \\	    バックスラッシュ
{{% /tips-list %}}


## コメント
<font color=orange><b> コメントの使用</b></font>
「#」記号は、bashスクリプトに1行コメントを追加するために使用されます。
'comment_example.sh'という名前の新しいファイルを作成し、1行コメント付きの次のスクリプトを追加します。

``` bash:comment_example.sh
#!/bin/bash

#2つの数値をsumに追加します
((sum=25+35));

#結果を出力します
echo "$sum";
```
bashコマンドでファイルを実行します。
```
$ bash comment_example.sh
60
$
```

{{% tips-list tips %}}
ヒント
: 複数行コメントに関しては次の章で説明します。
{{% /tips-list %}}


## マルチラインコメント
<font color=orange><b> 複数行コメントの使用</b></font>
bashではさまざまな方法で複数行コメントを使用できます。
次の例に簡単な方法を示します。
'multiline-comment.sh'という名前の新しいbashを作成し、次のスクリプトを追加します。
ここでは、「:」と「'」でbashで複数行コメントを実現しています。
次のスクリプトは、5の2乗を計算します。

``` bash:multiline-comment.sh
#!/bin/bash

: '
次のスクリプトは、
数値の2乗値5を計算します。
'
((area=5*5));
echo "$area";
```
bashコマンドでファイルを実行します。

```
$ bash multiline-comment.sh
25
$
```

{{% tips-list tips %}}
ヒント
: 多くの場合、マルチラインコメントの存在は知られていない。
: ほとんどの人は、行頭に「#」をならべて複数行コメントを行う。
: それは、過去のメジャーソースコードの冒頭にそうあるからだ。
: そう、UNIX/Linuxの開発者のほとんどは、マルチラインコメントを知らないのだ。

: 今後出てくるであろうファイルの生成に「touch」というコマンドがある。これ実は 「:>ファイル名」で、空のファイルを生成する事ができる。「:」は、”なにもしないことを示す。if文の中で何もしない場合は、以下のように記述する。

: if [ "$v" -eq 5 ];then
:   : # 何もしない
: fi

: touchは既にファイルがあれば、そのファイルにはさわらない。
: :> は既にファイルがあれば、そのファイルさえも空にする。
: 上記 if 文の中の : は　何もしないことを示す。
: マルチラインコメントも同じ「:」から始まり、何もしないことを示している。

 
{{% /tips-list %}}

## while ループ
<font color=orange><b> whileループの使用</b></font>
whileループの使用法を知るために、「while_example.sh」という名前のbashファイルを作成します。
この例では、whileループが5回繰り返されます。
count変数の値は、各ステップで1ずつ増加します。
count変数の値が5になると、whileループは終了します。
``` bash:while_exapmle.sh
#!/bin/bash

valid=true;
count=1
while [ "$valid" ];do
  echo "$count";
  if [ "$count" -eq 5 ];then
    break;
  fi
  ((count++));
done
```
bashコマンドでファイルを実行します。
```
$ bash while_example.sh
1
2
3
4
5
$
```

{{% tips-list tips %}}
ヒント
: 上記ソースでトリッキーなのはwhileよりもむしろ

: ((COUNT++))

: だろう。
: COUNT = COUNT + 1;

: count=1
: count=$(expr $count + 1) # => 2
: let ++count    # => 2
: let count++    # => 3
: count=$((++count))    # => 2
: count=$((count++))    # => 2
: count=$((count += 1)) # => 3

: 変数に代入する必要がないから $(( )) ではなく、
: (( )) でよい。(( )) の中の変数を表す「$」は記述の必要はない


{{% /tips-list %}}



## for ループ
<font color=orange><b> forループの使用</b></font>
基本的なforループ宣言を示します。
'for_example.sh'という名前のファイルを作成し、forループを使用して、次のスクリプトを追加します。
ここでは、forループは10回繰り返され、変数のすべての値、counterを1行で出力します。
``` bash:for_example.sh
#!/bin/bash

for((counter=10;counter>0;counter--));do
  echo -n "$counter ";
done
printf "\n"
```
bashコマンドでファイルを実行します。
```
$ bash for_example.sh
10 9 8 7 6 5 4 3 2 1
$
```

{{% tips-list tips %}}
ヒント
: 以下、どの記法も同じ。書きやすいものを選べばいい。
{{% /tips-list %}}

``` bash:三つの書き方
# 冗長
for i in \`seq 10\`
do
  echo "test"
done

# 簡素
for i in \`seq 10\`;do
  echo "test"
done

# C/Javaライク
for((i=0;i<10;i++));do
  echo "test"
done
```


## 対話型入力
<font color=orange><b> ユーザー入力の取得</b></font>
'read'コマンドは、bashでユーザーから入力を受け取るために使用されます。
'user_input.sh'という名前のファイルを作成し、ユーザーから入力を取得するための次のスクリプトを追加します。
ここでは、1つの文字列値がユーザーから取得され、他の文字列値を組み合わせて値が表示されます。
``` bash:user_input.sh
#!/bin/bash

echo "あなたの名前を入力して下さい"
read name
echo "ようこそ $name. ＮＬＰへ"
```

bashコマンドでファイルを実行します。

```
$ bash user_input.sh
あなたの名前を入力して下さい
suzuki
ようこそ suzuki。 ＮＬＰへ
$
```

{{% tips-list tips %}}
ヒント
: 以下のソースは read コマンドの手前でechoすらしない
: -p オプションだ。

: read -p "INPUT:" str 
: echo $str1

{{% /tips-list %}}


## If 文
<font color=orange><b> if文を使う</b></font>
単数、または複数の条件でif条件を使用できます。
このステートメントの開始ブロックと終了ブロックは、「if」と「fi」で定義されます。
「simple_if.sh」という名前のファイルを作成し、bashでのifステートメントの使用を確認します。
ここでは、変数nに10が割り当てられています。
$nの値が10未満の場合、出力は「1桁の数値です」になります。
それ以外の場合、出力は「2桁の数値です」になります。
比較のために、ここでは「-lt」を使用しています。

<table>
<tr><th>オプション</th><th>意味</th></tr>
<tr><td>-eq</td><td>同　じ（==）</td></tr>
<tr><td>-lt</td><td>小さい（＜）</td></tr>
<tr><td>-gt</td><td>大きい（＞）</td></tr>
</table>

数値を比較する場合は、「<」「>」「=」ではなく、
-eq -lt -gt を使う必要があります。

文字列を比較する場合は 「==」または 「!=」を使います。
``` bash:simple_if.sh
#!/bin/bash

n=10;
if [ $n -lt 10 ];then
  echo "1桁の数値です";
else
  echo "2桁の数値です";
fi
```
bashコマンドでファイルを実行します。
```
$ bash simple_if.sh
2桁の数値です
$
```

{{% tips-list tips %}}
ヒント
: 数値を比較する場合は、「<」「>」「=」ではなく、
: -eq -lt -gt を使う必要があります。
 
: 文字列を比較する場合は 「==」または 「!=」を使います。
{{% /tips-list %}}



## and 条件を if 文で使う
<font color=orange><b>ANDロジックでifステートメントを使用する：</b></font>
2つ以上の条件を持つifステートメントでは、さまざまなタイプの論理条件を使用できます。
andロジックを使用してifステートメントで複数の条件を定義する方法を次の例に示します。
'&&'は、ifステートメントのandロジックを適用するために使用されます。
'if_with_and.sh'という名前のファイルを作成して、次のコードを確認します。
ここで、ユーザー名とパスワードの変数の値はユーザーから取得され、「admin」および「secret」と比較されます。
両方の値が一致する場合、出力は「有効なユーザー」になります。一致しない場合、出力は「無効なユーザー」になります。

<font color=red>
数値を比較する場合は、「<」「>」「=」ではなく、
-eq -lt -gt を使う必要があります。
文字列を比較する場合は 「==」または 「!=」を使います。
</font>


``` bash:if_with_and.sh
#!/bin/bash

echo "名前を入力して下さい"
read username
echo "パスワードを入力して下さい"
read password

if [[ ("$username"=="admin" && "$password"=="secret") ]];then
  echo "無効なユーザーです";
else
  echo "有効なユーザーです";
fi
```
bashコマンドでファイルを実行します。
```
$ bash if_with_and.sh
名前を入力して下さい
suzuki
パスワードを入力して下さい
password
無効なユーザーです
$
```

{{% tips-list tips %}}
ヒント
: 数値を比較する場合は、「<」「>」「=」ではなく、
: -eq -lt -gt を使う必要があります。
 
: 文字列を比較する場合は 「==」または 「!=」を使います。
{{% /tips-list %}}


<!--
## １０．or 条件を if文で使う
## １１．else if と else
## １２．case 文
## １３．コマンドラインから引数を取得
## １４．名前を使用してコマンドラインから引数を取得する
## １５．変数に2つの文字列を組み合わせる
## １６．文字列の部分文字列を取得する
## １７．変数に2つの数値を追加します
## １８．関数を作成する
## １９．関数パラメーターを使用する
## ２０．スクリプトからの戻り値を渡す
## ２１．ディレクトリを作成する
## ２２．存在を確認してディレクトリを作成する
## ２３．ファイルを読む
## ２４．ファイルを削除する
## ２５．ファイルに追加
## ２６．ファイルが存在するかどうかを確認
## ２７．mailコマンド
## ２８．dateコマンド
## ２９．waitコマンド
## ３０．sleepコマンド
-->

# 関連記事
[【まとめ版】ざっくりわかるシェルスクリプト１」](https://suzukiiichiro.github.io/posts/2022-01-07-01-suzuki/)
[【まとめ版】ざっくりわかるシェルスクリプト２」](https://suzukiiichiro.github.io/posts/2022-01-12-01-suzuki/)
[【まとめ版】ざっくりわかるシェルスクリプト３」](https://suzukiiichiro.github.io/posts/2022-01-13-01-suzuki/)



# 書籍の紹介
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
imageUrl="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4774186945&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=nlpqueens-22"
%}}

{{% amazon

title="UNIXシェルスクリプト マスターピース132"

url="https://www.amazon.co.jp/gp/product/B00QJINS1A/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00QJINS1A&linkCode=as2&tag=nlpqueens-22&linkId=36dff1cf8fa7d4852b5a4a3cf874304b"

summary=`すべてのUNIXエンジニア必携!!

サーバー管理、ネットワーク管理など、現場で使えるテクニックを豊富にちりばめたシェルスクリプトサンプル集の決定版。
知りたいことがきっと見つかる秘密の道具箱。Linux、FreeBSD、MacOS対応。
`
imageUrl="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B00QJINS1A&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=nlpqueens-22"
%}}



<!-- EOL -->
