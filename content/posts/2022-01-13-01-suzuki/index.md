---
title: "$B$6$C$/$j$o$+$k!V%7%'%k%9%/%j%W%H#3!W(B"
description: "$B$3$3$G$O(Bbash$B%W%m%0%i%_%s%0$N4pK\E*$J9M$(J}#2$H$7$F!"(Bbash$B%9%/%j%W%H$N0lHLE*$JA`:n$r!"$6$C$/$j$H@bL@$7$^$9!#(B"
date: 2022-01-13T11:26:13+09:00
draft: false
image: 2021-12-23-bash.jpg
categories:
  - $B%W%m%0%i%_%s%0(B
tags:
  - $B%W%m%0%i%_%s%0(B
  - $B%7%'%k%9%/%j%W%H(B
  - Bash
  - $BNkLZ0]0lO:(B
---

# $B$O$8$a$K(B
Bash$B%9%/%j%W%H$O!"%7%'%k%3%^%s%I$N<B9T!"J#?t$N%3%^%s%I$NF1;~<B9T!"4IM}%?%9%/$N%+%9%?%^%$%:!"%?%9%/$N<+F02=$N<B9T$J$I!"$5$^$6$^$JL\E*$K;HMQ$G$-$^$9!#$7$?$,$C$F!"(Bbash$B%W%m%0%i%_%s%0$N4pK\$K4X$9$kCN<1$O$9$Y$F$N(BLinux$B%f!<%6!<$K$H$C$F=EMW$G$9!#$3$N5-;v$O!"(Bbash$B%W%m%0%i%_%s%0$N4pK\E*$J9M$(J}$rM}2r$9$k$N$KLrN)$A$^$9!#$3$3$G$O!"(Bbash$B%9%/%j%W%H$N0lHLE*$JA`:n$N$[$H$s$I$r!"Hs>o$K4JC1$JNc$G@bL@$7$^$9!#(B

$B$3$N5-;v$G$O!"(Bbash$B%W%m%0%i%_%s%0$N<!$N%H%T%C%/$K$D$$$F@bL@$7$^$9!#(B


$B4XO"5-;v(B
[$B$6$C$/$j$o$+$k%7%'%k%9%/%j%W%H#1!W(B](https://suzukiiichiro.github.io/posts/2022-01-07-01-suzuki/)
[$B$6$C$/$j$o$+$k%7%'%k%9%/%j%W%H#2!W(B](https://suzukiiichiro.github.io/posts/2022-01-12-01-suzuki/)
[$B$6$C$/$j$o$+$k%7%'%k%9%/%j%W%H#3!W(B](https://suzukiiichiro.github.io/posts/2022-01-13-01-suzuki/)


## $B4X?t$+$i$NLa$jCM$N<u$1EO$7(B
<font color=orange><b>$B4X?t$+$i$NLa$jCM$N<u$1EO$7!'(B</b></font>
Bash$B4X?t$O!"?tCM$HJ8;zNsCM$NN>J}$rEO$9$3$H$,$G$-$^$9!#4X?t$+$iJ8;zNsCM$rEO$9J}K!$r<!$NNc$K<($7$^$9!#(B'function_return.sh'$B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%3!<%I$rDI2C$7$^$9!#4X?t(Bgreeting$B!J!K$O!"J8;zNsCM$rJQ?t(Bval$B$KJV$7$^$9!#$3$NJQ?t$O!"8e$GB>$NJ8;zNs$HAH$_9g$o$;$F=PNO$7$^$9!#(B

``` bash:function_return.sh
#!/bin/bash

function greeting(){
  str="$B$3$s$K$A$O!"(B$name";
  echo "$str";
}

echo "$B$"$J$?$NL>A0$rF~NO$7$F2<$5$$(B";
read name;

val=$(greeting);
echo "$B4X?t$+$i$NLa$jCM$O!V(B${val}$B!W$G$9!#(B";
```

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ bash function_return.sh
$B$"$J$?$NL>A0$rF~NO$7$F2<$5$$(B
suzuki
$B4X?t$+$i$NLa$jCM$O!V$3$s$K$A$O!"(Bsuzuki$B!W$G$9!#(B
$
```


## $B%G%#%l%/%H%j$r:n@.$9$k(B
<font color=orange><b>$B%G%#%l%/%H%j$r:n@.$9$k!'(B</b></font>
Bash$B$O!V(Bmkdir$B!W%3%^%s%I$r;HMQ$7$F?7$7$$%G%#%l%/%H%j$r:n@.$7$^$9!#(B'make_directory.sh'$B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%3!<%I$rDI2C$7$F!"%f!<%6!<$+$i?7$7$$%G%#%l%/%H%jL>$r<hF@$7$^$9!#%G%#%l%/%H%jL>$,8=:_$N>l=j$KB8:_$7$J$$>l9g$O!"%G%#%l%/%H%j$,:n@.$5$l$^$9!#(B

``` bash:make_directory.sh
#!/bin/bash

echo "$B%G%#%l%/%H%jL>$rF~NO$7$F2<$5$$!#(B"
read newdir

`mkdir "$newdir"`
```

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ bash make_directory.sh
$B%G%#%l%/%H%jL>$rF~NO$7$F2<$5$$!#(B
suzuki
$ ls
suzuki/
```


## $BB8:_$r3NG'$7$F%G%#%l%/%H%j$r:n@.$9$k(B
<font color=orange><b>$BB8:_$r3NG'$7$F%G%#%l%/%H%j$r:n@.$7$^$9!#(B</b></font>
'mkdir'$B%3%^%s%I$r<B9T$9$kA0$K!"8=:_$N>l=j$K%G%#%l%/%H%j$,B8:_$9$k$3$H$r3NG'$9$k>l9g$O!"<!$N%3!<%I$r;HMQ$G$-$^$9!#(B'-d '$B%*%W%7%g%s$O!"FCDj$N%G%#%l%/%H%j$,B8:_$9$k$+$I$&$+$r%F%9%H$9$k$?$a$K;HMQ$5$l$^$9!#(B'directory_exist.sh'$B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%3!<%I$rDI2C$7$F!"B8:_$r3NG'$7$F%G%#%l%/%H%j$r:n@.$7$^$9!#(B

``` bash:directory_exist.sh
#!/bin/bash

echo "$B%G%#%l%/%H%jL>$rF~NO$7$F2<$5$$!#(B";
read ndir;
if [ -d "$ndir" ];then
  echo "$B%G%#%l%/%H%j$,B8:_$7$^$9!#(B";
else
  `mkdir $ndir`;
  echo "$B%G%#%l%/%H%j$r:n@.$7$^$7$?!#(B";
fi
```

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ bash directory_exist.sh
$B%G%#%l%/%H%jL>$rF~NO$7$F2<$5$$!#(B
suzuki
$B%G%#%l%/%H%j$r:n@.$7$^$7$?!#(B
$ ls
suzuki/
$ bash directory_exist.sh
$B%G%#%l%/%H%jL>$rF~NO$7$F2<$5$$!#(B
suzuki
$B%G%#%l%/%H%j$,B8:_$7$^$9!#(B
$
```


## $B%U%!%$%k$rFI$`(B
<font color=orange><b>$B%U%!%$%k$rFI$`!'(B</b></font>
while$B%k!<%W$G(Bread$B%3%^%s%I$r;HMQ$9$k$H!"(Bbash$B$GG$0U$N%U%!%$%k$r(B1$B9T$:$DFI$_<h$k$3$H$,$G$-$^$9!#(B'read_file.sh'$B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%3!<%I$rDI2C$7$F!"(B 'book.txt'$B$H$$$&L>A0$N4{B8$N%U%!%$%k$rFI$_<h$j$^$9!#(B

$B!V(Bbook.txt$B!W%U%!%$%k$r:n@.$7$^$9!#(B

```
$ vim book.txt
```

``` :book.txt
$B%U%!%$%k$rFI$`!'(B
$B%k!<%W$r;HMQ$9$k$H!"(Bbash$B$GG$0U$N%U%!%$%k$r(B1$B9T$:$DFI$_<h$k$3$H$,$G$-$^$9!#(B
'read_file.sh'$B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%3!<%I$rDI2C$7$F!"(B'book.txt'$B$H$$$&L>A0$N4{B8$N%U%!%$%k$rFI$_<h$j$^$9!#(B
```

``` bash:read_file.sh
#!/bin/bash

file='book.txt';
if [ -f "$file" ];then
  while read line;do
    echo "$line";
  done<$file
else
  echo "$file $B%U%!%$%k$,$"$j$^$;$s(B";
fi
```

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ bash read_file.sh
$B%U%!%$%k$rFI$`!'(B
$B%k!<%W$r;HMQ$9$k$H!"(Bbash$B$GG$0U$N%U%!%$%k$r(B1$B9T$:$DFI$_<h$k$3$H$,$G$-$^$9!#(B
'read_file.sh'$B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%3!<%I$rDI2C$7$F!"(B'book.txt'$B$H$$$&L>A0$N4{B8$N%U%!%$%k$rFI$_<h$j$^$9!#(B
```


## $B%U%!%$%k$r:o=|$9$k(B
<font color=orange><b>$B%U%!%$%k$r:o=|$7$^$9!'(B</b></font>
'rm'$B%3%^%s%I$O!"%U%!%$%k$r:o=|$9$k$?$a$K(Bbash$B$G;HMQ$5$l$^$9!#<!$N%3!<%I$r;HMQ$7$F!V(Bdelete_file.sh$B!W$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"%f!<%6!<$+$i%U%!%$%kL>$r<hF@$7$F:o=|$7$^$9!#$3$3$G!"!V(B-i$B!W%*%W%7%g%s$O!"%U%!%$%k$r:o=|$9$kA0$K%f!<%6!<$+$i5v2D$r<hF@$9$k$?$a$K;HMQ$5$l$^$9!#(B

``` bash:delete_file.sh
#!/bin/bash

echo "$B:o=|$9$k%U%!%$%k$^$?$O%G%#%l%/%H%jL>$rF~NO$7$F2<$5$$!#(B"
read fn
rm -i $fn
```

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ ls
suzuki/  book.txt
bash delete_file.sh
$B:o=|$9$k%U%!%$%k$^$?$O%G%#%l%/%H%jL>$rF~NO$7$F2<$5$$!#(B
suzuki
rm: suzuki: is a directory
bash delete_file.sh
$B:o=|$9$k%U%!%$%k$^$?$O%G%#%l%/%H%jL>$rF~NO$7$F2<$5$$!#(B
book.txt
$ ls
suzuki/
$
```


## $B%U%!%$%k$KDI2C(B
<font color=orange><b>$B%U%!%$%k$KDI2C!'(B</b></font>
bash$B$G!V(B>>$B!W1i;;;R$r;HMQ$9$k$H!"4{B8$N%U%!%$%k$K?7$7$$%G!<%?$rDI2C$G$-$^$9!#(B'append_file.sh '$B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%3!<%I$rDI2C$7$F!"%U%!%$%k$N:G8e$K?7$7$$%3%s%F%s%D$rDI2C$7$^$9!#$3$3$G!"!V(BLearning Level 5$B!W$O!"%9%/%j%W%H$N<B9T8e$K!V(Blevel.txt$B!W%U%!%$%k$N$KDI2C$5$l$^$9!#(B

```:level.txt
1. Pro AngularJS
2. Learning JQuery
3. PHP Programming
4. Code Igniter
```

``` bash_append_file.sh
#!/bin/bash

echo "$BDI2C$9$kA0$N%U%!%$%k(B";
cat book.txt;

echo "5. Bash Programming" >> level.txt
echo "$BDI2C$7$?8e$N%U%!%$%k(B"
cat book.txt;
```

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ bash append_file.sh
$BDI2C$9$kA0$N%U%!%$%k(B
1. Pro AngularJS
2. Learning JQuery
3. PHP Programming
4. Code Igniter
$BDI2C$7$?8e$N%U%!%$%k(B
1. Pro AngularJS
2. Learning JQuery
3. PHP Programming
4. Code Igniter
5. Bash Programming
$
```
<font color=red>$B!V(B>$B!W$O%U%!%$%k$r?7$7$/:n@.$7$FDI5-$7$^$9!#(B
$B!V(B>>$B!W$O4{$KB8:_$9$k%U%!%$%k$KDI5-$7$^$9!#$G$9$N$G!"%U%!%$%k$,B8:_$7$J$$$K$b$+$+$o$i$:!"!V(B>>$B!W$r9T$&$H!"$D$$$9$k%U%!%$%k$,$J$$$?$a!"%(%i!<$H$J$j$^$9!#%U%!%$%k$NB8:_$r3NG'$9$k$?$a$NJ}K!$r<!$N>O$G@bL@$7$^$9!#(B</font>


## $B%U%!%$%k$,B8:_$9$k$+$I$&$+$r3NG'(B
<font color=orange><b>$B%U%!%$%k$,B8:_$9$k$+$I$&$+$r%F%9%H$7$^$9!#(B</b></bont>
'-e'$B$^$?$O(B'-f'$B%*%W%7%g%s$r;HMQ$7$F!"(Bbash$BFb$N%U%!%$%k$NB8:_$r3NG'$G$-$^$9!#<!$N%9%/%j%W%H$G$O!"%U%!%$%k$NB8:_$r%F%9%H$9$k$?$a$K!V(B-f$B!W%*%W%7%g%s$,;HMQ$5$l$F$$$^$9!#(B' file_exist.sh '$B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%3!<%I$rDI2C$7$^$9!#$3$3$G!"%U%!%$%kL>$O%3%^%s%I%i%$%s$+$iEO$5$l$^$9!#(B

``` bash:file_exist.sh
#!/bin/bash

filename=$1;
if [ -f "$filename" ];then
  echo "$B%U%!%$%k$,B8:_$7$^$9!#(B";
else
  echo "$B%U%!%$%k$OB8:_$7$^$;$s!#(B";
fi
```

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ ls
book.txt    level.txt
bash file_exist.sh level2.txt
$B%U%!%$%k$OB8:_$7$^$;$s!#(B
bash file_exist.sh level.txt
$B%U%!%$%k$,B8:_$7$^$9!#(B
```


## mail$B%3%^%s%I(B
<font color=orange><b>$B%a!<%k$rAw$k!'(B</b></font>
' mail '$B$^$?$O(B ' sendmail '$B%3%^%s%I$r;HMQ$7$FEE;R%a!<%k$rAw?.$G$-$^$9!#$3$l$i$N%3%^%s%I$r;HMQ$9$kA0$K!"I,MW$J$9$Y$F$N%Q%C%1!<%8$r%$%s%9%H!<%k$9$kI,MW$,$"$j$^$9!#(B' mail_example.sh '$B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%3!<%I$rDI2C$7$FEE;R%a!<%k$rAw?.$7$^$9!#(B
admin@sample.com $B$NItJ,$r<+J,$N%a!<%k%"%I%l%9$KCV$-49$($F<B9T$7$F2<$5$$!#(B

``` bash:mail_example.sh
#!/bin/bash

Recipient=$B!I(Badmin@sample.com$B!I(B
Subject=$B!I(BGreeting$B!I(B
Message=$B!I(BWelcome to our site$B!I(B
`mail -s $Subject $Recipient <<< $Message`
```

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ bash mail_example.sh
```


## date$B%3%^%s%I(B
<font color=orange><b>$B8=:_$NF|IU$r2r@O$9$k!'(B</b></font>
$B$"$J$?$O(B`$B;HMQ$7$F!"8=:_$N%7%9%F%`$NF|IU$H;~9o$NCM$r<hF@$9$k$3$H$,$G$-!"F|IU(B`$B%3%^%s%I$r!#F|IU$H;~9o$NCM$N$9$Y$F$NItJ,$O!"!V(BY$B!W!"!V(Bm$B!W!"!V(Bd$B!W!"!V(BH$B!W!"!V(BM$B!W!"$*$h$S!V(BS$B!W$r;HMQ$7$F2r@O$G$-$^$9!#(B'date_parse.sh'$B$H$$$&L>A0$N?7$7$$%U%!%$%k$r:n@.$7!"<!$N%3!<%I$rDI2C$7$F!"F|!"7n!"G/!";~!"J,!"IC$NCM$r6h@Z$j$^$9!#(B

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

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ bash date_parse.sh
2022$BG/(B 1$B7n(B13$BF|(B $BLZMKF|(B 12$B;~(B19$BJ,(B06$BIC(B JST
Current Date is: 13-01-2022
Current Time is: 12:19:06
$
```


## wait$B%3%^%s%I(B
<font color=orange><b>wait$B%3%^%s%I!'(B</b></font>
wait  $B$O!"<B9TCf$N%W%m%;%9$N40N;$rBT5!$9$k(BLinux$B$NAH$_9~$_%3%^%s%I$G$9!#(B wait $B%3%^%s%I$O!"FCDj$N%W%m%;%9(BID$B$^$?$O%8%g%V(BID$B$G;HMQ$5$l$^$9!#(Bwait$B%3%^%s%I$G%W%m%;%9(BID$B$^$?$O%8%g%V(BID$B$,;XDj$5$l$F$$$J$$>l9g!"8=:_$N$9$Y$F$N;R%W%m%;%9$,40N;$9$k$N$rBT5!$7!"=*N;%9%F!<%?%9$rJV$7$^$9!#(B' wait_example.sh'$B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%9%/%j%W%H$rDI2C$7$^$9!#(B

``` bash:wait_example.sh
#!/bin/bash

echo "Wait command" &
process_id=$!
wait $process_id
echo "Exited with status $?"
```

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ bash wait_example.sh
Wait command
Exited with status 0
$
```


## sleep$B%3%^%s%I(B
<font color=orange><b>sleep$B%3%^%s%I!'(B</b></font>
$B%3%^%s%I$N<B9T$rFCDj$N4|4V0l;~Dd;_$9$k>l9g$O!"(Bsleep$B%3%^%s%I$r;HMQ$G$-$^$9!#CY1dNL$O!"(B $BIC!J(Bs$B!K!"J,!J(Bm$B!K!";~4V!J(Bh$B!K!"$*$h$SF|!J(Bd$B!K$G@_Dj$G$-$^$9!#(B'sleep_example.sh' $B$H$$$&L>A0$N%U%!%$%k$r:n@.$7!"<!$N%9%/%j%W%H$rDI2C$7$^$9!#$3$N%9%/%j%W%H$O!"<B9T8e(B5$BIC4VBT5!$7$^$9!#(B

``` bash:sleep_example.sh
#!/bin/bash

echo $B!H(BWait for 5 seconds$B!I(B
sleep 5
echo $B!H(BCompleted$B!I(B
```

bash$B%3%^%s%I$G%U%!%$%k$r<B9T$7$^$9!#(B

```
$ bash sleep_example.sh
$B!H(BWait for 5 seconds$B!I(B
$B!H(BCompleted$B!I(B
$
```


# $B4XO"5-;v(B
[$B$6$C$/$j$o$+$k%7%'%k%9%/%j%W%H#1!W(B](https://suzukiiichiro.github.io/posts/2022-01-07-01-suzuki/)
[$B$6$C$/$j$o$+$k%7%'%k%9%/%j%W%H#2!W(B](https://suzukiiichiro.github.io/posts/2022-01-12-01-suzuki/)
[$B$6$C$/$j$o$+$k%7%'%k%9%/%j%W%H#3!W(B](https://suzukiiichiro.github.io/posts/2022-01-13-01-suzuki/)

# $B=q@R$N>R2p(B
{{% amazon

title="[$B2~D{Bh(B3$BHG(B]$B%7%'%k%9%/%j%W%H4pK\%j%U%!%l%s%9(B $B(!(!(B#!/bin/sh$B$G!"$3$3$^$G$G$-$k(B (WEB+DB PRESS plus) $BC19TK\!J%=%U%H%+%P!<!K(B  2017/1/20"

url="https://www.amazon.co.jp/gp/product/4774186945/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4774186945&linkCode=as2&tag=nlpqueens-22&linkId=8ef3ff961c569212e910cf3d6e37dcb6"

summary=`$BDjHV$N(B1$B:}!X%7%'%k%9%/%j%W%H4pK\%j%U%!%l%s%9!Y$N2~D{Bh(B3$BHG!#(B
$B%7%'%k%9%/%j%W%H$NCN<1$O!"%W%m%0%i%^$K$H$C$FD9$/LrN)$DCN<1$G$9!#(B
$BK\=q$G$O!"J#?t$N%W%i%C%H%U%)!<%`$KBP1~$G$-$k0\?"@-$N9b$$%7%'%k%9%/%j%W%H:n@.$K<g4c$rCV$-!"(B
$B4pK\$+$iCzG+$K2r@b!#(B
$BBh(B3$BHG$G$O:G?7$N(BLinux/FreeBSD/Solaris$B$K2C$(!"AH$_9~$_J,LnEy$GCmL\EY$N9b$$(BBusyBox$B$b%5%]!<%H!#(B
$B9g$o$;$F!"A4<}O?%9%/%j%W%H$K4X$7$F(BWindows$B$*$h$S(BmacOS$B4D6-$G$N(Bbash$B$NF0:n3NG'$b9T$$!"$5$i$J$k0\?"@-$N9b$5$rDI5a!#(B
$B$^$9$^$9%Q%o!<%"%C%W$7$?2~D{HG$r$*FO$1$7$^$9!#(B`
imageUrl="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4774186945&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=nlpqueens-22"
%}}

{{% amazon

title="UNIX$B%7%'%k%9%/%j%W%H(B $B%^%9%?!<%T!<%9(B132"

url="https://www.amazon.co.jp/gp/product/B00QJINS1A/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00QJINS1A&linkCode=as2&tag=nlpqueens-22&linkId=36dff1cf8fa7d4852b5a4a3cf874304b"

summary=`$B$9$Y$F$N(BUNIX$B%(%s%8%K%"I,7H(B!!

$B%5!<%P!<4IM}!"%M%C%H%o!<%/4IM}$J$I!"8=>l$G;H$($k%F%/%K%C%/$rK-IY$K$A$j$P$a$?%7%'%k%9%/%j%W%H%5%s%W%k=8$N7hDjHG!#(B
$BCN$j$?$$$3$H$,$-$C$H8+$D$+$kHkL)$NF;6qH"!#(BLinux$B!"(BFreeBSD$B!"(BMacOS$BBP1~!#(B
`
imageUrl="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B00QJINS1A&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=nlpqueens-22"
%}}



