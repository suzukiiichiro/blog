---
title: "$B!J#1#0!K!Z(Bchmod$B![%7%'%k%9%/%j%W%H%3%^%s%I3hMQ>R2p(B"
description: "$B%U%!%$%k!&%G%#%l%/%H%j$N%Q!<%_%C%7%g%s$rJQ99$9$k(B"
date: 2022-07-06T10:12:50+09:00
draft: false
authors: suzuki
image: bash.jpg
categories:
  - programming
tags:
  - $B%7%'%k%9%/%j%W%H(B
  - Bash
  - $BNkLZ0]0lO:(B
---

## chmod$B%3%^%s%I(B
- $B%Q!<%_%C%7%g%s$rI=$9%"%k%U%!%Y%C%H$H?tCM$N0UL#(B
- $B%Q!<%_%C%7%g%s$rJQ99$9$k(B
- $B%Q!<%_%C%7%g%s$NJQ99FbMF$r3NG'$9$k$K$O!)(B


## chmod$B%3%^%s%I35MW(B
$B%U%!%$%k$d%G%#%l%/%H%j$K%"%/%;%9$G$-$k$+$I$&$+$O!"%U%!%$%k$N!V%Q!<%_%C%7%g%s!J5v2DB0@-!K!W$K$h$C$F7h$^$j$^$9!#$3$N%Q!<%_%C%7%g%s$rJQ99$9$k%3%^%s%I$,!V(Bchmod$B!W$G$9!#(B


## chmod$B%3%^%s%I$N=q<0(B
chmod [$B%*%W%7%g%s(B] $B%b!<%I(B $B%U%!%$%k(B1 $B%U%!%$%k(B2 $B%U%!%$%k(B3$B!D!D(B


## chmod$B%3%^%s%I$N<g$J%*%W%7%g%s(B

|$B%*%W%7%g%s(B    |$B0UL#(B|
|--------------|----|
|-R	|$B%U%!%$%k$H%G%#%l%/%H%j$r:F5"E*$KJQ99$9$k(B|
|-v	|$B=hM}$7$?FbMF$r=PNO$9$k(B|
|-c	|$BJQ99$,9T$o$l$?>l9g$N$_=hM}FbMF$r=PNO$9$k(B|
|-f	|$B$[$H$s$I$N%(%i!<%a%C%;!<%8$r=PNO$7$J$$(B|


{{% tips-list tips %}}
$B%R%s%H(B
: $B0lMw$N%*%W%7%g%s$O0lIt$G$9!#(B $ man chmod   $B$J$I$G!"(Bchmod$B$N;H$$J}$r3NG'$7$F$/$@$5$$!#(B
{{% /tips-list %}}


## chmod$B%3%^%s%I>\:Y@bL@(B

### $B%Q!<%_%C%7%g%s$rI=$9%"%k%U%!%Y%C%H$H?tCM$N0UL#(B


|$B5-9f(B|$B?t;z(B    |$B0UL#(B|
|----|--------|----|
|r   |4       |$BFI$_(B|
|w   |2       |$B=q$-(B|
|x   |1       |$B<B9T(B|
|-   |0       |$B5qH](B|


$B6qBNE*$K0J2<$N$h$&$KI=<($5$l$k>l9g!"!V=jM-<T!W!V=jM-%0%k!<%W!W!V$=$l0J30!W$N#37e$GI=$5$l$^$9!#(B

rw-rw-r--   664
rwxr-xr-x   755

$B$9$/$J$/$H$b<+J,<+?H$O$*$*$`$M!V=jM-<T!W$H$J$j$^$9$N$G!"(B

rw-rw-r--   664
$B$N>l9g$O!"=jM-<T!J<+J,<+?H!K$O!"(Brw- 6 $B$G$9$N$G!"(B
$BFI$_!&=q$-$O$G$-$k$b$N$N<B9T$O$G$-$J$$!J<B9T$NI,MW$,$J$$!K%U%!%$%k!&%G%#%l%/%H%j$H$$$&$3$H$K$J$j$^$9!#(B

rwxr-xr-x   755
$B$N>l9g$O!"=jM-<T!J<+J,<+?H!K$O!"(Brwx 7 $B$G$9$N$G!"(B
$BFI$_!&=q$-!&<B9T$,2DG=$J%U%!%$%k!&%G%#%l%/%H%j$G$"$k$H$$$&$3$H$K$J$j$^$9!#(B


### $B%Q!<%_%C%7%g%s$rJQ99$9$k(B

$B$$$m$$$m$JJ}K!$,$"$j$^$9!#(B
$B0lHLE*$K$O!J$J$K$,0lHLE*$+$b$o$+$j$^$;$s$,!K0J2<$NDL$j$H$J$j$^$9!#(B

sample.txt$B$N%Q!<%_%C%7%g%s$r(B664$B$KJQ99$9$k(B
```
$ chmod 664 sample.txt
```

sample.txt$B$N%Q!<%_%C%7%g%s$r(B755$B$KJQ99$9$k(B
```
$ chmod 755 sample.txt
```

## $B%Q!<%_%C%7%g%s$NJQ99FbMF$r3NG'$9$k$K$O!)(B

$B!!(Bchmod$B%3%^%s%I$G!V(B-v$B!W%*%W%7%g%s$r;XDj$9$k$H!"%3%^%s%I$N<B9TFbMF$,J,$+$k$h$&$K$J$j$^$9!#%Q!<%_%C%7%g%s$,JQ99$5$l$J$+$C$?>l9g$b!"8=>u$,$I$N$h$&$K$J$C$F$$$k$+$,J,$+$k$h$&$KI=<($5$l$^$9!#(B

```
$ chmod -v 755 sample.txt
'sample.txt' $B$N%b!<%I$r(B 0664 (rw-rw-r--)$B$+$i(B 0775 (rwxrwxr-x)$B$XJQ99$7$^$7$?(B
```


{{% tips-list tips %}}
$B%R%s%H(B
: -v $B%*%W%7%g%s$O>o$K$D$1$F<B9T$7$^$7$g$&!#2?$r<B9T$7$?$N$+$rMzNr$K;D$7$F$*$/$3$H$G?6$jJV$C$F3NG'$9$k$3$H$,$G$-$^$9!#(B
{{% /tips-list %}}

{{% tips-list tips %}}
$B%R%s%H(B
: $ chmod $B%3%^%s%I$O$H$F$b=EMW!"$+$D%;%-%e%j%F%#>eCm0U$,I,MW$J%3%^%s%I$G$9!#$J$s$G$b$+$s$G$b(B777$B$K$7$F$*$/$H$$$&BgGO</$b$N$,8e$r@d$A$^$;$s$,!"$d$a$^$7$g$&!#(B
{{% /tips-list %}}

## $B=q@R$N>R2p(B

{{% amazon

title="$B>\2r(B $B%7%'%k%9%/%j%W%H(B $BBg7?K\(B  2006/1/16"

url="https://www.amazon.co.jp/gp/product/4873112672/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4873112672&linkCode=as2&tag=nlpqueens-22&linkId=ef087fd92d3628bb94e1eb10cb202d43"

summary=`Unix$B$N%W%m%0%i%`$O!V%D!<%k!W$H8F$P$l$^$9!#(B
Unix$B$O!"=hM}$r<B8=$9$k$?$a$KJ#?t$NF;6q(B($B%D!<%k(B)$B$rAH$_9g$o$;$k!V%=%U%H%&%'%"%D!<%k!W$H$$$&;WA[$N2<$K@_7W$5$l$F$$$k$?$a$G$9!#(B
$B$=$7$F$3$l$i%D!<%k$r!VAH$_9g$o$;$k!W$H$$$&$3$H$3$=$,(BUnix$B$N???q$G$9!#(B
$B$^$?!"%7%'%k%9%/%j%W%H$N:n@.$K$O8@8l<+BN$@$1$G$J$/$=$l$>$l$N%D!<%k$KBP$9$kM}2r$b5a$a$i$l$^$9!#(B
$B$D$^$j!"$"$k%D!<%k$,2?$N$?$a$N$b$N$G$"$j!"$=$l$rC1BN$"$k$$$OB>$N%W%m%0%i%`$HAH$_9g$o$;$FMxMQ$9$k$K$O$I$N$h$&$K$9$l$P$h$$$+$H$$$&$3$H$rM}2r$7$J$1$l$P$J$j$^$;$s!#(B
$BK\=q$O!"(BUnix$B%7%9%F%`$X$NM}2r$r?<$a$J$,$i!"%7%'%k%9%/%j%W%H$N4pAC$+$i1~MQ$^$G$rI}9-$/2r@b$7$^$9!#(B
$BI8=`2=$5$l$?%7%'%k$rDL$8$F(BUnix(Linux$B$d(BFreeBSD$B!"(BMac OS X$B$J$I$"$i$f$k(BUnix$B8_49(BOS$B$r4^$`(B)$B$N3F<o%D!<%k$rAH$_9g$o$;!"(B
$BL\E*$N=hM}$r<B8=$9$k$?$a$NJ}K!$r>\$7$/3X$V$3$H$,$G$-$^$9!#(B
`
imageUrl="https://m.media-amazon.com/images/I/51EAPCH56ML._SL250_.jpg"
%}}

{{% amazon

title="UNIX$B%7%'%k%9%/%j%W%H(B $B%^%9%?!<%T!<%9(B132"

url="https://www.amazon.co.jp/gp/product/4797377623/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4797377623&linkCode=as2&tag=nlpqueens-22&linkId=3c8d4566263ae99374221c4f8f469154"

summary=`$B$9$Y$F$N(BUNIX$B%(%s%8%K%"I,7H(B!!

$B%5!<%P!<4IM}!"%M%C%H%o!<%/4IM}$J$I!"8=>l$G;H$($k%F%/%K%C%/$rK-IY$K$A$j$P$a$?%7%'%k%9%/%j%W%H%5%s%W%k=8$N7hDjHG!#(B
$BCN$j$?$$$3$H$,$-$C$H8+$D$+$kHkL)$NF;6qH"!#(BLinux$B!"(BFreeBSD$B!"(BMacOS$BBP1~!#(B
`
imageUrl="https://m.media-amazon.com/images/I/51R5SZKrEAL._SL250_.jpg"
%}}


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
imageUrl="https://m.media-amazon.com/images/I/41i956UyusL._SL250_.jpg"
%}}

{{% amazon

title="$B?7$7$$%7%'%k%W%m%0%i%_%s%0$N652J=q(B $BC19TK\(B"

url="https://www.amazon.co.jp/gp/product/4797393106/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4797393106&linkCode=as2&tag=nlpqueens-22&linkId=f514a6378c1c10e59ab16275745c2439"

summary=`$B%(%-%9%Q!<%H$rL\;X$;(B!!

$B%7%9%F%`4IM}$d%=%U%H%&%'%"3+H/$J$I!"(B
$B<B:]$N6HL3$G$O7g$+$;$J$$%7%'%k%9%/%j%W%H$NCN<1$rE0Dl2r@b(B

$B$[$H$s$I$N%G%#%9%H%j%S%e!<%7%g%s$G%G%U%)%k%H$H$J$C$F$$$k(Bbash$B$KFC2=$9$k$3$H$G!"(B
$BN`=q$H:9JL2=$r?^$k$H$H$b$K!"$h$j<BA)E*$J%W%m%0%i%_%s%0$r>R2p$7$^$9!#(B
$B$^$?%W%m%0%i%_%s%0<jK!$NM}2r$K7g$+$;$J$$(BLinux$B$N;EAH$_$K$D$$$F$b$G$-$k$+$.$j2r@b$7$^$7$?!#(B
$B%$%^%I%-$N%(%s%8%K%"I,7H$N0l:}!#(B

$B"'L\<!(B
CHAPTER01 $B%7%'%k$C$F$J$s$@$m$&(B
CHAPTER02 $B%7%'%k%9%/%j%W%H$H$O2?$+(B
CHAPTER03 $B%7%'%k%9%/%j%W%H$N4pK\(B
CHAPTER04 $BJQ?t(B
CHAPTER05 $B%/%)!<%F%#%s%0(B
CHAPTER06 $B@)8f9=B$(B
CHAPTER07 $B%j%@%$%l%/%H$H%Q%$%W(B
CHAPTER08 $B4X?t(B
CHAPTER09 $BAH$_9~$_%3%^%s%I(B
CHAPTER10 $B@55,I=8=$HJ8;zNs(B
CHAPTER11 $B%7%'%k%9%/%j%W%H$N<B9TJ}K!(B
CHAPTER12 $B%7%'%k%9%/%j%W%H$N%5%s%W%k$G3X$\$&(B
CHAPTER13 $B%7%'%k%9%/%j%W%H$N<BMQNc(B
CHAPTER14 $B%F%9%H$H%G%P%C%0(B
CHAPTER15 $BFI$_$d$9$$%7%'%k%9%/%j%W%H(B
`
imageUrl="https://m.media-amazon.com/images/I/41d1D6rgDiL._SL250_.jpg"
%}}




