---
title: "Ｎクイーン問題（６５） Ｎ２５を解決！事実上の日本一に"
date: 2024-04-25T12:33:04+09:00
draft: false
authors: suzuki
image: chess.jpg
categories:
  - programming
tags:
  - N-Queens
  - エイト・クイーン
  - NVIDIA CUDA
  - Ｃ言語
  - 並列処理
  - アルゴリズム
  - 鈴木維一郎

---
![](chess.jpg)
[【参考リンク】Ｎクイーン問題 過去記事一覧はこちらから](https://suzukiiichiro.github.io/search/?keyword=Ｎクイーン問題)

エイト・クイーンのプログラムアーカイブ 
Bash、Lua、C、Java、Python、CUDAまで！
https://github.com/suzukiiichiro/N-Queens

## Ｎ２５を１４０日で解決
２００４年、電気通信大学吉瀬研究室が２２日間かけてＮ２４を解決し世界一を樹立しました。

2004年4月11日 Intel Pentium 4 Xeon 2.8GHzのプロセッサを68個搭載するPCクラスタで２２日間かけてＮ２４を解決
https://www.itmedia.co.jp/news/articles/0410/06/news079.html

その後、Ｎ２６、Ｎ２７を樹立したドイツドレスデン大学に世界一の座を奪われますが、電気通信大学は事実上のNQueensの日本記録保持者でした。
今回、６０回を越えるＮクイーン問題シリーズは、AWS g5g.4xlarge １インスタンスの実行で、１４０日かけてＮ２５を解決しました。

こんなことを何年も追求している人は、少なくとも日本には、「僕と堀内幸太郎君の他にはいないであろう」と勝手に仮定すれば、僕たちが日本一の記録保持者ということです。（とさせておいてください）

少なくとも、１台のサーバーで処理の途中でメモリバーストすることなく、Ｎ２５を解決したことはすごいことですし、現在はさらに新しいロジックでより最適化されたプログラムを用意していますので、次はＮ２６の解決を目指します。

ちゃんと解があっていることも確認できました。
https://ja.wikipedia.org/wiki/エイト・クイーン

Ｎ２６の解決に向け、Ｎクイーン問題で引き続き研究と開発を続けていきます。


## サーバースペック
AWS g5g.4xlarge １インスタンス！

## 実行
```
$ nvcc -O3 -arch=sm_61 -m64 -ptx -prec-div=false 04CUDA_Symmetry_BitBoard.cu && POCL_DEBUG=all ./a.out -n ;
```

## 実行結果
```
$ nvcc -O3 -arch=sm_61 -m64 -ptx -prec-div=false 04CUDA_Symmetry_BitBoard.cu && POCL_DEBUG=all ./a.out -n ;

対称解除法 GPUビットボード
 N:            Total           Unique      dd:hh:mm:ss.ms
 4:                2                1     000:00:00:00.00
 5:               10                2     000:00:00:00.00
 6:                4                1     000:00:00:00.00
 7:               40                6     000:00:00:00.00
 8:               92               12     000:00:00:00.01
 9:              352               46     000:00:00:00.01
10:              724               92     000:00:00:00.01
11:             2680              341     000:00:00:00.01
12:            14200             1787     000:00:00:00.02
13:            73712             9233     000:00:00:00.04
14:           365596            45752     000:00:00:00.04
15:          2279184           285053     000:00:00:00.04
16:         14772512          1846955     000:00:00:00.07
17:         95815104         11977939     000:00:00:00.26
18:        666090624         83263591     000:00:00:01.65
19:       4968057848        621012754     000:00:00:13.80
20:      39029188884       4878666808     000:00:02:02.52
21:     314666222712      39333324973     000:00:18:46.52
22:    2691008701644     336376244042     000:03:00:22.54
23:   24233937684440    3029242658210     001:06:03:49.29
24:  227514171973736   28439272956934     012:23:38:21.02
25: 2207893435808352  275986683743434     140:07:39:29.96
```

## 【参考】２００４年４月１１日、電気通信大学はＮ２４を解決し世界記録に
2004年4月11日 Intel Pentium 4 Xeon 2.8GHzのプロセッサを68個搭載するPCクラスタで２２日間かけてＮ２４を解決
![](P1000526.jpg)

https://www.itmedia.co.jp/news/articles/0410/06/news079.html

```
電通大が「N-queens」問題の世界記録達成 2004年10月06日 18時48分 公開
　数学とコンピュータ科学の古典的問題「N-queens」問題の計算で、電気通信大学の研究グループがこのほど世界記録を達成した。並列処理を活用し、1CPUでは6年かかる計算を22日間に短縮した。

　N-queensはチェスの問題。互いに攻撃しないN個のクイーンをN×Nのボードに配置する解の総数を求める。Nの値を大きくするたびに計算量が急激に増え、従来は得られていた解はN＝23が最高だった。

　同大学の大学院情報システム学研究科並列処理学講座は4月、Xeon/2.8GHz×68プロセッサのシステムとC言語による専用プログラムを使い、世界記録となるN＝24の解の計算に成功した。9月にはN＝23の解を計算したフランスのグループも計算に成功し、得られた値は電通大グループと同じだった。解の値は「227514171973736」。

　フランスグループの計算期間は17日間と電通大グループより短いが、記録には先に結果を得た電通大グループが登録される。成果は電子情報通信学会のレターとして採録される予定。計算に使用したプログラム「qn24b」は、ベンチマーク用として公開している。
```

## 【参考】電気通信大学のプレスリリース
https://www.arch.cs.titech.ac.jp/~kise/nq/index.htm
https://www.arch.cs.titech.ac.jp/~kise/nq/press-2004-10-05.txt

```
報道関係者各位　　　　　　　　　　　　　　　　　　　　　 2003年10月5日
プレスリリース　　　　　　　　 電気通信大学 大学院情報システム学研究科

　　 N-queensの世界記録樹立、6年分の計算を並列処理により22日に短縮


電気通信大学 大学院情報システム学研究科 並列処理学講座（コンピュータお
よびネットワークの高速化を狙いとする並列・分散情報処理の科学と技術に関
する研究）において、N-queens問題の世界記録を樹立しました。

数学および計算機科学の古典的な問題としてN-queensという問題が存在します。
これは、互いに攻撃を行わないようなN個のチェスのクィーンをN x Nのボード
に配置する解の総数を求める問題です。
古くは、チェス盤を利用した8-queensとして1848年にチェスプレーヤーのMax
Bazzelによって導入された問題とされています。2年後の1850年にはCarl Gauss
による解法が議論され、多くの数学者の議論の対象となっています。一般的な
サイズのN-queens問題に拡張され、近年では、計算機科学の例題として広く取
りあげられています。

特に、バックトラックを用いたアルゴリズム、分割統治法、制約充足問題など
の例題として利用されています。
この問題は、クィーンの数に対応するNの値を大きくすると、計算量が一桁程
度急激に増加するために、従来は、N=23 の問題までの解しか得られていませ
んでした。

これに対して、逐次プログラムの効率化と高効率な並列手法を用いて、N-queens
のプログラム(C言語で記述)を構築し、Intel Pentium 4 Xeon 2.8GHzのプロセッ
サを68個搭載するPCクラスタを用いて、世界記録となる N=24 の解を計算する
ことに成功しました。
この計算は、1CPUの場合には6.6年の計算時間が必要となると見積もられていた
もので、この処理を並列処理などにより、68個のプロセッサを用いて、22日間
という現実的な処理時間に短縮することに成功しました。
計算結果が得られたのは2004年4月11日で、得られた N=24 の解の値は、
227,514,171,973,736 です。

その後、N=23の世界記録を樹立したフランスINRIAのProActiveグループにより、
2004年の9月にN=24の解が計算され、我々が計算した値と同じであることが判
明し、計算結果の検証がおこなわれています。フランスのグループは17日間で
結果を得ていますが、先に結果を得た我々が世界記録として登録されます。
この結果は、On-Line Encyclopedia of Integer Sequenceという整数の系列の
データベースにも掲載されました。

今回の世界記録樹立に関する成果は、電子情報通信学会のレターとしての採録
が決まっています。
また、計算に利用したプログラムを誰でも容易に利用できるベンチマークプロ
グラムとして公開しており、この内容に関しては、FIT2004 第3回情報科学技術
フォーラムで発表済みです。

N-queensはGRIDにおけるベンチマークとしても利用されており、2004年の10月
には、GRID上でN-queensの解を計算するコンテストがフランスで開催されます。


【関連するホームページ】

並列処理学講座のホームページ
http://www.yuba.is.uec.ac.jp/

世界記録樹立者のホームページ
http://www.yuba.is.uec.ac.jp/~kis/
http://www.yuba.is.uec.ac.jp/~katagiri/
http://www.yuba.is.uec.ac.jp/~honda/
http://www.yuba.is.uec.ac.jp/~yuba/

英語の技術報告
http://www.yuba.is.uec.ac.jp/~kis/doc/paper/uec-is-2004-06.pdf

ベンチマークプログラムqn24bのホームページ
http://www.yuba.is.uec.ac.jp/~kis/nq/index.htm

On-Line Encyclopedia of Integer Sequence
http://www.research.att.com/~njas/sequences/Seis.html

GRIDコンテストに関するホームページ
http://www-sop.inria.fr/oasis/ProActive/


【本件に関するお問い合わせ先】

電気通信大学 大学院情報システム学研究科　吉瀬 謙二
E-mail: kis@is.uec.ac.jp
TEL: 0424-43-5643
FAX: 0424-43-5644
〒182-8585 東京都調布市調布ヶ丘1-5-1
電気通信大学 大学院情報システム学研究科
```


## ソースコード

ソースコードはこちら
https://github.com/suzukiiichiro/N-Queens/tree/master/11Bit_CUDA

```c :04CUDA_Symmetry_BitBoard.cu
#include <iostream>
#include <vector>
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <string.h>
#include <time.h>
#include <sys/time.h>
#include <cuda.h>
#include <cuda_runtime.h>
#include <device_launch_parameters.h>
#define MAX 27
#define THREAD_NUM 96
// システムによって以下のマクロが必要であればコメントを外してください。
//#define UINT64_C(c) c ## ULL
//
// グローバル変数
unsigned long TOTAL=0;
unsigned long UNIQUE=0;
//GPU で使うローカル構造体
typedef struct local
{
  unsigned int BOUND1,BOUND2;
  unsigned int TOPBIT,ENDBIT,SIDEMASK,LASTMASK;
  unsigned long board[MAX];
  unsigned long COUNT2,COUNT4,COUNT8,TOTAL,UNIQUE;
  unsigned int STEPS;
}local;
// CPU 再帰/非再帰共通 対称解除法
void symmetryOps(unsigned int size,struct local* l)
{
  /**
  ２．クイーンが右上角以外にある場合、
  (1) 90度回転させてオリジナルと同型になる場合、さらに90度回転(オリジナルか
  ら180度回転)させても、さらに90度回転(オリジナルから270度回転)させてもオリ
  ジナルと同型になる。
  こちらに該当するユニーク解が属するグループの要素数は、左右反転させたパター
  ンを加えて２個しかありません。
  */
  if(l->board[l->BOUND2]==1){
    unsigned int ptn;
    unsigned int own;
    for(ptn=2,own=1;own<size;++own,ptn<<=1){
      unsigned int bit;
      unsigned int you;
      for(bit=1,you=size-1;(l->board[you]!=ptn)&&l->board[own]>=bit;--you){
        bit<<=1;
      }
      if(l->board[own]>bit){
        return ;
      }
      if(l->board[own]<bit){
        break;
      }
    }//end for
    // ９０度回転して同型なら１８０度回転しても２７０度回転しても同型である
    if(own>size-1){
      l->COUNT2++;
      return ;
    }//end if
  }//end if
  /**
  ２．クイーンが右上角以外にある場合、
    (2) 90度回転させてオリジナルと異なる場合は、270度回転させても必ずオリジナル
    とは異なる。ただし、180度回転させた場合はオリジナルと同型になることも有り得
    る。こちらに該当するユニーク解が属するグループの要素数は、180度回転させて同
    型になる場合は４個(左右反転×縦横回転)
   */
  //１８０度回転
  if(l->board[size-1]==l->ENDBIT){
    unsigned int you;
    unsigned int own;
    for(you=size-1-1,own=1;own<=size-1;++own,--you){
      unsigned int bit;
      unsigned int ptn;
      for(bit=1,ptn=l->TOPBIT;(ptn!=l->board[you])&&(l->board[own]>=bit);ptn>>=1){
        bit<<=1;
      }
      if(l->board[own]>bit){
        return ;
      }
      if(l->board[own]<bit){
        break;
      }
    }//end for
    //９０度回転が同型でなくても１８０度回転が同型であることもある
    if(own>size-1){
      l->COUNT4++;
      return ;
    }
  }//end if
  /**
  ２．クイーンが右上角以外にある場合、
    (3)180度回転させてもオリジナルと異なる場合は、８個(左右反転×縦横回転×上下反転)
  */
  //２７０度回転
  if(l->board[l->BOUND1]==l->TOPBIT){
    unsigned int ptn;
    unsigned int own;
    unsigned int you;
    unsigned int bit;
    for(ptn=l->TOPBIT>>1,own=1;own<=size-1;++own,ptn>>=1){
      for(bit=1,you=0;(l->board[you]!=ptn)&&(l->board[own]>=bit);++you){
        bit<<=1;
      }
      if(l->board[own]>bit){
        return ;
      }
      if(l->board[own]<bit){
        break;
      }
    }//end for
  }//end if
  l->COUNT8++;
}
/**
  CPU -c
  */
// 非再帰 角にQがないときのバックトラック
void symmetry_backTrack_NR(unsigned int size,unsigned int row,unsigned int _left,unsigned int _down,unsigned int _right,struct local *l)
{
  unsigned int mask=(1<<size)-1;
  unsigned int down[size];
  unsigned int left[size];
  unsigned int right[size];
  unsigned int bitmap[size];
  left[row]=_left;
  down[row]=_down;
  right[row]=_right;
  bitmap[row]=mask&~(left[row]|down[row]|right[row]);
  while(row>0){
    if(bitmap[row]>0){
      if(row<l->BOUND1){ //上部サイド枝刈り
        bitmap[row]|=l->SIDEMASK;
        bitmap[row]^=l->SIDEMASK;
      }else if(row==l->BOUND2){ //下部サイド枝刈り
        if((down[row]&l->SIDEMASK)==0){
          row--; 
        }
        if((down[row]&l->SIDEMASK)!=l->SIDEMASK){
          bitmap[row]&=l->SIDEMASK;
        }
      }
      unsigned int save_bitmap=bitmap[row];
      unsigned int bit=-bitmap[row]&bitmap[row];
      bitmap[row]^=bit;
      l->board[row]=bit; //Qを配置
      if((bit&mask)!=0){
        if(row==(size-1)){
          if( (save_bitmap&l->LASTMASK)==0){
            symmetryOps(size,l);  //対称解除法
          }
          row--;
        }else{
          unsigned int n=row++;
          left[row]=(left[n]|bit)<<1;
          down[row]=(down[n]|bit);
          right[row]=(right[n]|bit)>>1;
          bitmap[row]=mask&~(left[row]|down[row]|right[row]);
        }
      }else{
        row--;
      }
    }else{
      row--;
    }
  }//end while
}
// 非再帰 角にQがあるときのバックトラック
void symmetry_backTrack_corner_NR(unsigned int size,unsigned int row,unsigned int _left,unsigned int _down,unsigned int _right,struct local *l)
{
  unsigned int mask=(1<<size)-1;
  unsigned int bit=0;
  unsigned int down[size];
  unsigned int left[size];
  unsigned int right[size];
  unsigned int bitmap[size];
  left[row]=_left;
  down[row]=_down;
  right[row]=_right;
  bitmap[row]=mask&~(left[row]|down[row]|right[row]);
  while(row>=2){
    if(row<l->BOUND1){
      // bitmap[row]=bitmap[row]|2;
      // bitmap[row]=bitmap[row]^2;
      bitmap[row]&=~2;
    }
    if(bitmap[row]>0){
      bit=-bitmap[row]&bitmap[row];
      bitmap[row]^=bit;
      if(row==(size-1)){
        l->COUNT8++;
        row--;
      }else{
        unsigned int n=row++;
        left[row]=(left[n]|bit)<<1;
        down[row]=(down[n]|bit);
        right[row]=(right[n]|bit)>>1;
        l->board[row]=bit; //Qを配置
        //クイーンが配置可能な位置を表す
        bitmap[row]=mask&~(left[row]|down[row]|right[row]);
      }
    }else{
      row--;
    }
  }//end while
}
// 非再帰 対称解除法
void symmetry_NR(unsigned int size,struct local* l)
{
  l->TOTAL=l->UNIQUE=l->COUNT2=l->COUNT4=l->COUNT8=0;
  unsigned int bit=0;
  l->TOPBIT=1<<(size-1);
  l->ENDBIT=l->SIDEMASK=l->LASTMASK=0;
  l->BOUND1=2;
  l->BOUND2=0;
  l->board[0]=1;
  while(l->BOUND1>1&&l->BOUND1<size-1){
    if(l->BOUND1<size-1){
      bit=1<<l->BOUND1;
      l->board[1]=bit;   //２行目にQを配置
      //角にQがあるときのバックトラック
      symmetry_backTrack_corner_NR(size,2,(2|bit)<<1,1|bit,(2|bit)>>1,l);
    }
    l->BOUND1++;
  }
  l->TOPBIT=1<<(size-1);
  l->ENDBIT=l->TOPBIT>>1;
  l->SIDEMASK=l->TOPBIT|1;
  l->LASTMASK=l->TOPBIT|1;
  l->BOUND1=1;
  l->BOUND2=size-2;
  while(l->BOUND1>0 && l->BOUND2<size-1 && l->BOUND1<l->BOUND2){
    if(l->BOUND1<l->BOUND2){
      bit=1<<l->BOUND1;
      l->board[0]=bit;   //Qを配置
      //角にQがないときのバックトラック
      symmetry_backTrack_NR(size,1,bit<<1,bit,bit>>1,l);
    }
    l->BOUND1++;
    l->BOUND2--;
    l->ENDBIT=l->ENDBIT>>1;
    l->LASTMASK=l->LASTMASK<<1|l->LASTMASK|l->LASTMASK>>1;
  }//ene while
  UNIQUE=l->COUNT2+l->COUNT4+l->COUNT8;
  TOTAL=l->COUNT2*2+l->COUNT4*4+l->COUNT8*8;
}
/**
  CPU -r
  */
// 再帰 角にQがないときのバックトラック
void symmetry_backTrack(unsigned int size,unsigned int row,unsigned int left,unsigned int down,unsigned int right,struct local* l)
{
  unsigned int mask=(1<<size)-1;
  unsigned int bitmap=mask&~(left|down|right);
  if(row==(size-1)){
    if(bitmap){
      if( (bitmap&l->LASTMASK)==0){
        l->board[row]=bitmap;  //Qを配置
        symmetryOps(size,l);    //対称解除
      }
    }
  }else{
    if(row<l->BOUND1){
      bitmap=bitmap|l->SIDEMASK;
      bitmap=bitmap^l->SIDEMASK;
    }else{
      if(row==l->BOUND2){
        if((down&l->SIDEMASK)==0){
          return;
        }
        if( (down&l->SIDEMASK)!=l->SIDEMASK){
          bitmap=bitmap&l->SIDEMASK;
        }
      }
    }
    while(bitmap){
      unsigned int bit=-bitmap&bitmap;
      bitmap=bitmap^bit;
      l->board[row]=bit;
      symmetry_backTrack(size,row+1,(left|bit)<<1,down|bit,(right|bit)>>1,l);
    }
  }
}
// 再帰 角にQがあるときのバックトラック
void symmetry_backTrack_corner(unsigned int size,unsigned int row,unsigned int left,unsigned int down,unsigned int right,struct local* l)
{
  unsigned int mask=(1<<size)-1;
  unsigned int bitmap=mask&~(left|down|right);
  unsigned int bit=0;
  if(row==(size-1)){
    if(bitmap){
      l->board[row]=bitmap;
      l->COUNT8++;
    }
  }else{
    if(row<l->BOUND1){   //枝刈り
      bitmap=bitmap|2;
      bitmap=bitmap^2;
    }
    while(bitmap){
      bit=-bitmap&bitmap;
      bitmap=bitmap^bit;
      l->board[row]=bit;   //Qを配置
      symmetry_backTrack_corner(size,row+1,(left|bit)<<1,down|bit,(right|bit)>>1,l);
    }
  }
}
// 再帰 対称解除法
void symmetry_R(unsigned int size,struct local* l)
{
  l->TOTAL=l->UNIQUE=l->COUNT2=l->COUNT4=l->COUNT8=0;
  unsigned int bit=0;
  l->TOPBIT=1<<(size-1);
  l->ENDBIT=l->LASTMASK=l->SIDEMASK=0;
  l->BOUND1=2;
  l->BOUND2=0;
  l->board[0]=1;
  while(l->BOUND1>1 && l->BOUND1<size-1){
    if(l->BOUND1<size-1){
      bit=1<<l->BOUND1;
      l->board[1]=bit;   //２行目にQを配置
      //角にQがあるときのバックトラック
      symmetry_backTrack_corner(size,2,(2|bit)<<1,1|bit,(2|bit)>>1,l);
    }
    l->BOUND1++;
  }//end while
  l->TOPBIT=1<<(size-1);
  l->ENDBIT=l->TOPBIT>>1;
  l->SIDEMASK=l->TOPBIT|1;
  l->LASTMASK=l->TOPBIT|1;
  l->BOUND1=1;
  l->BOUND2=size-2;
  while(l->BOUND1>0 && l->BOUND2<size-1 && l->BOUND1<l->BOUND2){
    if(l->BOUND1<l->BOUND2){
      bit=1<<l->BOUND1;
      l->board[0]=bit;   //Qを配置
      //角にQがないときのバックトラック
      symmetry_backTrack(size,1,bit<<1,bit,bit>>1,l);
    }
    l->BOUND1++;
    l->BOUND2--;
    l->ENDBIT=l->ENDBIT>>1;
    l->LASTMASK=l->LASTMASK<<1|l->LASTMASK|l->LASTMASK>>1;
  }//ene while
  UNIQUE=l->COUNT2+l->COUNT4+l->COUNT8;
  TOTAL=l->COUNT2*2+l->COUNT4*4+l->COUNT8*8;
}
/**
  GPU -g
  */
__device__
struct dlocal
{
  unsigned int BOUND1,BOUND2;
  unsigned int TOPBIT,ENDBIT,SIDEMASK,LASTMASK;
  unsigned long board[MAX];
  unsigned long COUNT2,COUNT4,COUNT8,TOTAL,UNIQUE;
}dlocal;
__device__ struct dlocal gdl[9999];
// GPU 対称解除法
__host__ __device__
long GPU_symmetryOps(unsigned int size,struct dlocal* l)
{
  /**
  ２．クイーンが右上角以外にある場合、
  (1) 90度回転させてオリジナルと同型になる場合、さらに90度回転(オリジナルか
  ら180度回転)させても、さらに90度回転(オリジナルから270度回転)させてもオリ
  ジナルと同型になる。
  こちらに該当するユニーク解が属するグループの要素数は、左右反転させたパター
  ンを加えて２個しかありません。
  */
  if(l->board[l->BOUND2]==1){
    unsigned int ptn;
    unsigned int own;
    for(ptn=2,own=1;own<size;++own,ptn<<=1){
      unsigned int bit;
      unsigned int you;
      for(bit=1,you=size-1;(l->board[you]!=ptn)&& l->board[own]>=bit;--you){
        bit<<=1;
      }
      if(l->board[own]>bit){
        return 0;
      }
      if(l->board[own]<bit){
        break;
      }
    }//end for
    // ９０度回転して同型なら１８０度回転しても２７０度回転しても同型である
    if(own>size-1){
      l->COUNT2++;
      return 2;
    }//end if
  }//end if
  /**
  ２．クイーンが右上角以外にある場合、
    (2) 90度回転させてオリジナルと異なる場合は、270度回転させても必ずオリジナル
    とは異なる。ただし、180度回転させた場合はオリジナルと同型になることも有り得
    る。こちらに該当するユニーク解が属するグループの要素数は、180度回転させて同
    型になる場合は４個(左右反転×縦横回転)
   */
  //１８０度回転
  if(l->board[size-1]==l->ENDBIT){
    unsigned int you;
    unsigned int own;
    for(you=size-1-1,own=1;own<=size-1;++own,--you){
      unsigned int bit;
      unsigned int ptn;
      for(bit=1,ptn=l->TOPBIT;(ptn!=l->board[you])&&(l->board[own]>=bit);ptn>>=1){
        bit<<=1;
      }
      if(l->board[own]>bit){
        return 0;
      }
      if(l->board[own]<bit){
        break;
      }
    }//end for
    //９０度回転が同型でなくても１８０度回転が同型であることもある
    if(own>size-1){
      l->COUNT4++;
      return 4;
    }
  }//end if
  /**
  ２．クイーンが右上角以外にある場合、
    (3)180度回転させてもオリジナルと異なる場合は、８個(左右反転×縦横回転×上下反転)
  */
  //２７０度回転
  if(l->board[l->BOUND1]==l->TOPBIT){
    unsigned int ptn;
    unsigned int own;
    unsigned int you;
    unsigned int bit;
    for(ptn=l->TOPBIT>>1,own=1;own<=size-1;++own,ptn>>=1){
      for(bit=1,you=0;(l->board[you]!=ptn)&&(l->board[own]>=bit);++you){
        bit<<=1;
      }
      if(l->board[own]>bit){
        return 0;
      }
      if(l->board[own]<bit){
        break;
      }
    }//end for
  }//end if
  l->COUNT8++;
  return 8;
}
// GPU 角にQがないときのバックトラック
__host__ __device__
long GPU_symmetry_backTrack(unsigned int size,unsigned int row,unsigned int left,unsigned int down,unsigned int right,struct dlocal* l)
{
  unsigned long counter=0;
  unsigned int mask=(1<<size)-1;
  unsigned int bitmap=mask&~(left|down|right);
  if(row==(size-1)){
    if(bitmap){
      if( (bitmap& l->LASTMASK)==0){
        l->board[row]=bitmap;  //Qを配置
        counter+=GPU_symmetryOps(size,l);    //対称解除
      }
    }
  }else{
    if(row<l->BOUND1){
      bitmap=bitmap|l->SIDEMASK;
      bitmap=bitmap^l->SIDEMASK;
    }else{
      if(row==l->BOUND2){
        if((down&l->SIDEMASK)==0){
          return 0;
        }
        if( (down&l->SIDEMASK)!=l->SIDEMASK){
          bitmap=bitmap&l->SIDEMASK;
        }
      }
    }
    while(bitmap){
      unsigned int bit=-bitmap&bitmap;
      bitmap=bitmap^bit;
      l->board[row]=bit;
      counter+=GPU_symmetry_backTrack(size,row+1,(left|bit)<<1,down|bit,(right|bit)>>1,l);
    }
  }
  return counter;
}
// GPU 角にQがあるときのバックトラック
__host__ __device__
long GPU_symmetry_backTrack_corner(unsigned int size,unsigned int row,unsigned int left,unsigned int down,unsigned int right,struct dlocal* l)
{
  unsigned long counter=0;
  unsigned int mask=(1<<size)-1;
  unsigned int bitmap=mask&~(left|down|right);
  unsigned int bit=0;
  if(row==(size-1)){
    if(bitmap){
      l->board[row]=bitmap;
      l->COUNT8++;
      counter+=8;
    }
  }else{
    if(row<l->BOUND1){   //枝刈り
      bitmap=bitmap|2;
      bitmap=bitmap^2;
    }
    while(bitmap){
      bit=-bitmap&bitmap;
      bitmap=bitmap^bit;
      l->board[row]=bit;   //Qを配置
      counter+=GPU_symmetry_backTrack_corner(size,row+1,(left|bit)<<1,down|bit,(right|bit)>>1,l);
    }
  }
  return counter;
}
// GPU 対称解除法 -g の実行時のみ呼び出されます
__host__ __device__
void GPU_symmetry_R(unsigned int size,struct local* hostLocal)
{
  // GPU内部で使うための dlocal構造体
  struct dlocal l;
  l.TOTAL=l.UNIQUE=l.COUNT2=l.COUNT4=l.COUNT8=0;
  unsigned int bit=0;
  l.TOPBIT=1<<(size-1);
  l.ENDBIT=l.LASTMASK=l.SIDEMASK=0;
  l.BOUND1=2;
  l.BOUND2=0;
  l.board[0]=1;
  while(l.BOUND1>1 && l.BOUND1<size-1){
    if(l.BOUND1<size-1){
      bit=1<<l.BOUND1;
      l.board[1]=bit;   //２行目にQを配置
      //角にQがあるときのバックトラック
      GPU_symmetry_backTrack_corner(size,2,(2|bit)<<1,1|bit,(2|bit)>>1,&l);
    }
    l.BOUND1++;
  }//end while
  l.TOPBIT=1<<(size-1);
  l.ENDBIT=l.TOPBIT>>1;
  l.SIDEMASK=l.TOPBIT|1;
  l.LASTMASK=l.TOPBIT|1;
  l.BOUND1=1;
  l.BOUND2=size-2;
  while(l.BOUND1>0 && l.BOUND2<size-1 && l.BOUND1<l.BOUND2){
    if(l.BOUND1<l.BOUND2){
      bit=1<<l.BOUND1;
      l.board[0]=bit;   //Qを配置
      //角にQがないときのバックトラック
      GPU_symmetry_backTrack(size,1,bit<<1,bit,bit>>1,&l);
    }
    l.BOUND1++;
    l.BOUND2--;
    l.ENDBIT=l.ENDBIT>>1;
    l.LASTMASK=l.LASTMASK<<1|l.LASTMASK|l.LASTMASK>>1;
  }//ene while
  // 集計値は hostLocalへ代入
  hostLocal->UNIQUE=l.COUNT2+l.COUNT4+l.COUNT8;
  hostLocal->TOTAL=l.COUNT2*2+l.COUNT4*4+l.COUNT8*8;
}
/**
  CUDA13
  */
// GPU -n 対称解除法
__device__ 
int BitBoard_symmetryOps(unsigned int size,unsigned int* board,unsigned int BOUND1,unsigned int BOUND2,unsigned int TOPBIT,unsigned int ENDBIT)
{
  unsigned int own,ptn,you,bit;
  //90度回転
  if(board[BOUND2]==1){ own=1; ptn=2;
    while(own<=size-1){ bit=1; you=size-1;
      while((board[you]!=ptn)&&(board[own]>=bit)){ bit<<=1; you--; }
      if(board[own]>bit){ return 0; } else if(board[own]<bit){ break; }
      own++; ptn<<=1;
    }
    /** 90度回転して同型なら180度/270度回転も同型である */
    if(own>size-1){ return 2; }
  }
  //180度回転
  if(board[size-1]==ENDBIT){ own=1; you=size-1-1;
    while(own<=size-1){ bit=1; ptn=TOPBIT;
      while((board[you]!=ptn)&&(board[own]>=bit)){ bit<<=1; ptn>>=1; }
      if(board[own]>bit){ return 0; } else if(board[own]<bit){ break; }
      own++; you--;
    }
    /** 90度回転が同型でなくても180度回転が同型である事もある */
    if(own>size-1){ return 4; }
  }
  //270度回転
  if(board[BOUND1]==TOPBIT){ own=1; ptn=TOPBIT>>1;
    while(own<=size-1){ bit=1; you=0;
      while((board[you]!=ptn)&&(board[own]>=bit)){ bit<<=1; you++; }
      if(board[own]>bit){ return 0; } else if(board[own]<bit){ break; }
      own++; ptn>>=1;
    }
  }
  return 8; 
}
// GPU -n Ｑが角にある場合のバックトラック内の再帰処理をカーネルで行う
__global__
void BitBoard_cuda_kernel_b1(const unsigned int size,unsigned int mark,unsigned int* _down,unsigned int* _left,unsigned int* _right,unsigned int* _total,unsigned int* _unique,unsigned long _cond,unsigned int _row,unsigned int BOUND1)
{
  const unsigned int mask=(1<<size)-1;
  unsigned long total=0;
  unsigned int unique=0;
  int row=0;
  unsigned int bit;
  //
  //スレッド
  //
  //ブロック内のスレッドID
  const unsigned int tid=threadIdx.x;
  //グリッド内のブロックID
  const unsigned int bid=blockIdx.x;
  //全体通してのID
  const unsigned int idx=bid*blockDim.x+tid;
  //
  //シェアードメモリ
  //
  //sharedメモリを使う ブロック内スレッドで共有
  //10固定なのは現在のmask設定で
  //GPUで実行するのは最大10だから
  //THREAD_NUMはブロックあたりのスレッド数
  __shared__ unsigned int down[THREAD_NUM][10];
  down[tid][row]=_down[idx];
  __shared__ unsigned int left[THREAD_NUM][10];
  left[tid][row]=_left[idx];
  __shared__ unsigned int right[THREAD_NUM][10];
  right[tid][row]=_right[idx];
  __shared__ unsigned int bitmap[THREAD_NUM][10];
  bitmap[tid][row] =mask&~(down[tid][row]|left[tid][row]|right[tid][row]);
  __shared__ unsigned int sum[THREAD_NUM];
  __shared__ unsigned int usum[THREAD_NUM];
  //余分なスレッドは動かさない 
  //GPUはSTEPS数起動するが_cond以上は空回しする
  if(idx<_cond){
    //_down,_left,_rightの情報を
    //down,left,rightに詰め直す 
    //CPU で詰め込んだ t_はSTEPS個あるが
    //ブロック内ではブロックあたりのスレッド数に限定
    //されるので idxでよい
    //
    unsigned int bitmap_tid_row;
    unsigned int down_tid_row;
    unsigned int left_tid_row;
    unsigned int right_tid_row;
    while(row>=0){
      bitmap_tid_row=bitmap[tid][row];
      down_tid_row=down[tid][row];
      left_tid_row=left[tid][row];
      right_tid_row=right[tid][row];
      if(bitmap_tid_row==0){
        row--;
      }else{
        /**11 枝刈り**********/
        if(row+_row<BOUND1) {
          bitmap_tid_row=bitmap[tid][row]&=~2; // bm|=2; bm^=2; (bm&=~2と同等)
        }  
        //クイーンを置く
        //置く場所があるかどうか
        bitmap[tid][row]
          ^=bit
          =(-bitmap_tid_row&bitmap_tid_row);       
        if((bit&mask)!=0){
          //最終行?最終行から１個前の行まで
          //無事到達したら 加算する
          if(row+1==mark){
            //ホストに戻す配列にTOTALを入れる
            //スレッドが１つの場合は配列は１個
            unique++; 
            total+=8;   //対称解除で得られた解数を加算
            //}
            row--;
          }else{
            int rowP=row+1;
            down[tid][rowP]=down_tid_row|bit;
            left[tid][rowP]=(left_tid_row|bit)<<1;
            right[tid][rowP]=(right_tid_row|bit)>>1;
            bitmap[tid][rowP]=mask&~(down[tid][rowP]|left[tid][rowP]|right[tid][rowP]);
            row++;
          }
        }else{
          //置く場所がなければ１個上に
          row--;
        }
      }
    }
    //最後sum[tid]に加算する
    sum[tid]=total;
    usum[tid]=unique;
  }else{
    //_cond未満は空回しするのでtotalは加算しない
    sum[tid]=0;
    usum[tid]=0;
  } 
  //__syncthreads()でブロック内のスレッド間の同期
  //全てのスレッドが__syncthreads()に辿り着くのを待つ
  __syncthreads();
  if(tid<64&&tid+64<THREAD_NUM){
    sum[tid]+=sum[tid+64];
    usum[tid]+=usum[tid+64];
  }
  __syncwarp();
  if(tid<32){
    sum[tid]+=sum[tid+32];
    usum[tid]+=usum[tid+32];
  } 
  __syncwarp();
  if(tid<16){
    sum[tid]+=sum[tid+16];
    usum[tid]+=usum[tid+16];
  } 
  __syncwarp();
  if(tid<8){
    sum[tid]+=sum[tid+8];
    usum[tid]+=usum[tid+8];
  } 
  __syncwarp();
  if(tid<4){
    sum[tid]+=sum[tid+4];
    usum[tid]+=usum[tid+4];
  } 
  __syncwarp();
  if(tid<2){
    sum[tid]+=sum[tid+2];
    usum[tid]+=usum[tid+2];
  } 
  __syncwarp();
  if(tid<1){
    sum[tid]+=sum[tid+1];
    usum[tid]+=usum[tid+1];
  } 
  __syncwarp();
  if(tid==0){
    _total[bid]=sum[0];
    _unique[bid]=usum[0];
  }
}
// GPU -n Ｑが角にない場合のバックトラック内の再帰処理をカーネルで行う
__global__
void BitBoard_cuda_kernel_b2(unsigned int size,unsigned int mark,unsigned int* _down,unsigned int* _left,unsigned int* _right,unsigned int* _total,unsigned int* _unique,unsigned long _cond,unsigned int* board,unsigned int _row,unsigned int BOUND1,unsigned int BOUND2,unsigned int SIDEMASK,unsigned int LASTMASK,unsigned int TOPBIT,unsigned int ENDBIT)
{
  const unsigned int mask=(1<<size)-1;
  unsigned long total=0;
  unsigned int unique=0;
  int row=0;
  unsigned int bit;
  //
  //スレッド
  //
  //ブロック内のスレッドID
  unsigned const int tid=threadIdx.x;
  //グリッド内のブロックID
  unsigned const int bid=blockIdx.x;
  //全体通してのID
  unsigned const int idx=bid*blockDim.x+tid;
  //
  //シェアードメモリ
  //
  //sharedメモリを使う ブロック内スレッドで共有
  //10固定なのは現在のmask設定で
  //GPUで実行するのは最大10だから
  //THREAD_NUMはブロックあたりのスレッド数
  __shared__ unsigned int down[THREAD_NUM][10];
  down[tid][row]=_down[idx];
  __shared__ unsigned int left[THREAD_NUM][10];
  left[tid][row]=_left[idx];
  __shared__ unsigned int right[THREAD_NUM][10];
  right[tid][row]=_right[idx];
  __shared__ unsigned int bitmap[THREAD_NUM][10];
  //down,left,rightからbitmapを出す
  bitmap[tid][row]=mask&~(down[tid][row]|left[tid][row]|right[tid][row]);
  __shared__ unsigned int sum[THREAD_NUM];
  unsigned int c_aBoard[MAX];
  __shared__ unsigned int usum[THREAD_NUM];
  //余分なスレッドは動かさない 
  //GPUはSTEPS数起動するが_cond以上は空回しする
  if(idx<_cond){
    //_down,_left,_rightの情報を
    //down,left,rightに詰め直す 
    //CPU で詰め込んだ t_はSTEPS個あるが
    //ブロック内ではブロックあたりのスレッド数に限定
    //されるので idxでよい
    //
    for(int i=0;i<_row;i++){
      c_aBoard[i]=board[idx*_row+i]; //２次元配列だが1次元的に利用  
    }
    unsigned int bitmap_tid_row;
    unsigned int down_tid_row;
    unsigned int left_tid_row;
    unsigned int right_tid_row;
    while(row>=0){
      bitmap_tid_row=bitmap[tid][row];
      down_tid_row=down[tid][row];
      left_tid_row=left[tid][row];
      right_tid_row=right[tid][row];
      //
      //bitmap[tid][row]=00000000 クイーンを
      //どこにも置けないので1行上に戻る
      if(bitmap_tid_row==0){
        row--;
      }else{
        /**11 枝刈り追加**********/
        //【枝刈り】上部サイド枝刈り
        if(row+_row<BOUND1){             	
          bitmap_tid_row=bitmap[tid][row]&=~SIDEMASK;
          //【枝刈り】下部サイド枝刈り
        }else if(row+_row==BOUND2) {     	
          if((down_tid_row&SIDEMASK)==0){ 
            row--; 
            continue;
          }
          if((down_tid_row&SIDEMASK)!=SIDEMASK){ 
            bitmap_tid_row=bitmap[tid][row]&=SIDEMASK; 
          }
        }
        int save_bitmap=bitmap[tid][row];
        //クイーンを置く
        //置く場所があるかどうか
        bitmap[tid][row]^=c_aBoard[row+_row]=bit=(-bitmap_tid_row&bitmap_tid_row);       
        if((bit&mask)!=0){
          //最終行?最終行から１個前の行まで
          //無事到達したら 加算する
          if(row+1==mark){
            /***11 LASTMASK枝刈り*********************/ 
            if((save_bitmap&LASTMASK)==0){ 
              /***12 symmetryOps 省力化のためBOUND1,BOUND2,TOPBIT,ENDBITを渡す*****/ 
              //int s=BitBoard_symmetryOps(size,c_aBoard,l); 
              int s=BitBoard_symmetryOps(size,c_aBoard,BOUND1,BOUND2,TOPBIT,ENDBIT); 
              if(s!=0){
                //print(size); //print()でTOTALを++しない
                //ホストに戻す配列にTOTALを入れる
                //スレッドが１つの場合は配列は１個
                unique++; 
                total+=s;   //対称解除で得られた解数を加算
              }
              row--;
            }
          }else{
            int rowP=row+1;
            down[tid][rowP]=down_tid_row|bit;
            left[tid][rowP]=(left_tid_row|bit)<<1;
            right[tid][rowP]=(right_tid_row|bit)>>1;
            bitmap[tid][rowP]
              =mask&~(
                  down[tid][rowP]
                  |left[tid][rowP]
                  |right[tid][rowP]);
            row++;
          }
        }else{
          //置く場所がなければ１個上に
          row--;
        }
      }
    }
    //最後sum[tid]に加算する
    sum[tid]=total;
    usum[tid]=unique;
  }else{
    //_cond未満は空回しするのでtotalは加算しない
    sum[tid]=0;
    usum[tid]=0;
  } 
  //__syncthreads()でブロック内のスレッド間の同期
  //全てのスレッドが__syncthreads()に辿り着くのを待つ
  __syncthreads();if(tid<64&&tid+64<THREAD_NUM){
    sum[tid]+=sum[tid+64];
    usum[tid]+=usum[tid+64];
  }
  __syncwarp();if(tid<32){
    sum[tid]+=sum[tid+32];
    usum[tid]+=usum[tid+32];
  } 
  __syncwarp();if(tid<16){
    sum[tid]+=sum[tid+16];
    usum[tid]+=usum[tid+16];
  } 
  __syncwarp();if(tid<8){
    sum[tid]+=sum[tid+8];
    usum[tid]+=usum[tid+8];
  } 
  __syncwarp();if(tid<4){
    sum[tid]+=sum[tid+4];
    usum[tid]+=usum[tid+4];
  } 
  __syncwarp();if(tid<2){
    sum[tid]+=sum[tid+2];
    usum[tid]+=usum[tid+2];
  } 
  __syncwarp();if(tid<1){
    sum[tid]+=sum[tid+1];
    usum[tid]+=usum[tid+1];
  } 
  __syncwarp();if(tid==0){
    _total[bid]=sum[0];
    _unique[bid]=usum[0];
  }
}
// GPU -n Ｑが角にない
void BitBoard_backTrack2G(const unsigned int size,unsigned int row,unsigned int _left,unsigned int _down,unsigned int _right,struct local* l)
{
  //何行目からGPUで行くか。ここの設定は変更可能、設定値を多くするほどGPUで並行して動く
  /***11 size<8の時はmarkが2*********************/
  unsigned int mark=size>12?size-10:3;
  //unsigned int mark=size>11?size-9:3;
  if(size<8){ mark=2; }
  const unsigned int h_mark=row;
  unsigned long totalCond=0;
  unsigned int mask=(1<<size)-1;
  bool matched=false;
  //host
  unsigned int down[32];  down[row]=_down;
  unsigned int right[32]; right[row]=_right;
  unsigned int left[32];  left[row]=_left;
  //bitmapを配列で持つことにより
  //stackを使わないで1行前に戻れる
  unsigned int bitmap[32];
  bitmap[row]=mask&~(left[row]|down[row]|right[row]);
  unsigned int bit;

  unsigned int* hostDown;
  cudaMallocHost((void**) &hostDown,sizeof(int)*l->STEPS);
  unsigned int* hostLeft;
  cudaMallocHost((void**) &hostLeft,sizeof(int)*l->STEPS);
  unsigned int* hostRight;
  cudaMallocHost((void**) &hostRight,sizeof(int)*l->STEPS);
  unsigned int* deviceDown;
  cudaMalloc((void**) &deviceDown,sizeof(int)*l->STEPS);
  unsigned int* deviceLeft;
  cudaMalloc((void**) &deviceLeft,sizeof(int)*l->STEPS);
  unsigned int* deviceRight;
  cudaMalloc((void**) &deviceRight,sizeof(int)*l->STEPS);
  
  unsigned int* hostTotal;
  cudaMallocHost((void**) &hostTotal,sizeof(int)*l->STEPS/THREAD_NUM);
  unsigned int* hostUnique;
  cudaMallocHost((void**) &hostUnique,sizeof(int)*l->STEPS/THREAD_NUM);
  unsigned int* deviceTotal;
  cudaMalloc((void**) &deviceTotal,sizeof(int)*l->STEPS/THREAD_NUM);
  unsigned int* deviceUnique;
  cudaMalloc((void**) &deviceUnique,sizeof(int)*l->STEPS/THREAD_NUM);

  unsigned int* hostBoard;
  cudaMallocHost((void**) &hostBoard,sizeof(int)*l->STEPS*mark);
  unsigned int* deviceBoard;
  cudaMalloc((void**) &deviceBoard,sizeof(int)*l->STEPS*mark);

  //12行目までは3行目までCPU->row==mark以下で 3行目までの
  //down,left,right情報をhostDown ,hostLeft,hostRight
  //に格納
  //する->3行目以降をGPUマルチスレッドで実行し結果を取得
  //13行目以降はCPUで実行する行数が１個ずつ増えて行く
  //例えばn15だとrow=5までCPUで実行し、
  //それ以降はGPU(現在の設定だとGPUでは最大10行実行する
  //ようになっている)
  unsigned int rowP=0;
  unsigned long total=0;
  unsigned long unique=0;
  while(row>=h_mark) {
    //bitmap[row]=00000000 クイーンを
    //どこにも置けないので1行上に戻る
    //06GPU こっちのほうが優秀
    if(bitmap[row]==0){ row--; }
    else{//おける場所があれば進む
      /***11 枝刈り追加*********************/
      //【枝刈り】上部サイド枝刈り
      if(row<l->BOUND1){             	
        bitmap[row]&=~l->SIDEMASK;
        //【枝刈り】下部サイド枝刈り
      }else if(row==l->BOUND2) {     	
        if((down[row]&l->SIDEMASK)==0){ row--; }
        if((down[row]&l->SIDEMASK)!=l->SIDEMASK){ bitmap[row]&=l->SIDEMASK; }
      }
      //06SGPU
      bitmap[row]^=l->board[row]=bit=(-bitmap[row]&bitmap[row]);
      if((bit&mask)!=0){//置く場所があれば先に進む
        rowP=row+1;
        down[rowP]=down[row]|bit;
        left[rowP]=(left[row]|bit)<<1;
        right[rowP]=(right[row]|bit)>>1;
        bitmap[rowP]=mask&~(down[rowP]|left[rowP]|right[rowP]);
        row++;
        if(row==mark){
          //3行目(mark)にクイーンを１個ずつ置いていって、
          //down,left,right情報を格納、
          //その次の行へは進まない。その行で可能な場所にクイー
          //ン置き終わったらGPU並列実行
          //totalCond がthreadIdになる 各スレッドに down,left,right情報を渡す
          //row=2(13行目以降は増えていく。例えばn15だとrow=5)の情報を
          //hostDown,hostLeft,hostRightに格納する
          hostDown[totalCond]=down[row];
          hostLeft[totalCond]=left[row];
          hostRight[totalCond]=right[row];
          for(int i=0;i<mark;i++){
            hostBoard[totalCond*mark+i]=l->board[i];
          }
          //スレッド数をインクリメントする
          totalCond++;
          //最大GPU数に達してしまったら一旦ここでGPUを実行する。STEPSはGPUの同
          //時並行稼働数を制御
          //nの数が少ないうちはtotalCondがSTEPSを超えることはないがnの数が増え
          //て行くと超えるようになる。
          //ここではtotalCond==STEPSの場合だけこの中へ         
          if(totalCond==l->STEPS){
            //matched=trueの時にCOUNT追加 //GPU内でカウントしているので、GPUか
            //ら出たらmatched=trueになってる
            if(matched){
              // デバイスからホストへ転送
              cudaMemcpy(hostTotal, deviceTotal, sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
              cudaMemcpy(hostUnique,deviceUnique,sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
              for(int col=0;col<l->STEPS/THREAD_NUM;col++){
                total+=hostTotal[col];
                unique+=hostUnique[col];
              }
              matched=false;
            }
            // ホストからデバイスへ転送
            cudaMemcpy(deviceDown, hostDown,sizeof(int)*totalCond, cudaMemcpyHostToDevice);
            cudaMemcpy(deviceLeft, hostLeft,sizeof(int)*totalCond, cudaMemcpyHostToDevice);
            cudaMemcpy(deviceRight,hostRight,sizeof(int)*totalCond,cudaMemcpyHostToDevice);
            cudaMemcpy(deviceBoard,hostBoard,sizeof(int)*totalCond*mark,cudaMemcpyHostToDevice);
            // CUDA起動
            BitBoard_cuda_kernel_b2<<<l->STEPS/THREAD_NUM,THREAD_NUM >>>(size,size-mark,deviceDown,deviceLeft,deviceRight,deviceTotal,deviceUnique,totalCond,deviceBoard,row,l->BOUND1,l->BOUND2,l->SIDEMASK,l->LASTMASK,l->TOPBIT,l->ENDBIT);
            //STEPS数の数だけマルチスレッドで起動するのだが、実際に計算が行われ
            //るのはtotalCondの数だけでそれ以外は空回しになる
            //GPU内でカウントしているので、GPUから出たらmatched=trueになってる
            matched=true;
            //totalCond==STEPSルートでGPUを実行したらスレッドをまた0から開始す
            //る(これによりなんどもSTEPS数分だけGPUを起動できる)
            totalCond=0;           
          }
          //hostDown,hostLeft,hostRightに情報を格納したら1行上に上がる
          //これを繰り返すことにより row=2で可能な場所全てにクイーンを置いて
          //hostDown,hostLeft,hostRightに情報を格納する
          row--;
        }
      }else{
        //置く場所がなければ上に上がる。row==mark行に達するまではCPU側で普通に
        //nqueenをやる
        row--;
      }
    }
  }
  //matched=trueの時にCOUNT追加 //GPU内でカウントしているので、GPUから出たら
  //matched=trueになってる
  if(matched){
    // デバイスからホストへ転送
    cudaMemcpy(hostTotal, deviceTotal, sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
    cudaMemcpy(hostUnique,deviceUnique,sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
    // 集計
    for(int col=0;col<l->STEPS/THREAD_NUM;col++){
      total+=hostTotal[col];
      unique+=hostUnique[col];
    }
    matched=false;
  }
  // ホストからデバイスへ転送
  cudaMemcpy(deviceDown, hostDown,sizeof(int)*totalCond,cudaMemcpyHostToDevice);
  cudaMemcpy(deviceLeft, hostLeft,sizeof(int)*totalCond,cudaMemcpyHostToDevice);
  cudaMemcpy(deviceRight,hostRight,sizeof(int)*totalCond,cudaMemcpyHostToDevice);
  cudaMemcpy(deviceBoard,hostBoard,sizeof(int)*totalCond*mark,cudaMemcpyHostToDevice);
  //size-mark は何行GPUを実行するか totalCondはスレッド数
  //STEPS数の数だけマルチスレッドで起動するのだが、実際に計算が行われるのは
  //totalCondの数だけでそれ以外は空回しになる
  // CUDA起動
  BitBoard_cuda_kernel_b2<<<l->STEPS/THREAD_NUM,THREAD_NUM >>>(size,size-mark,deviceDown,deviceLeft,deviceRight,deviceTotal,deviceUnique,totalCond,deviceBoard,mark,l->BOUND1,l->BOUND2,l->SIDEMASK,l->LASTMASK,l->TOPBIT,l->ENDBIT);
  // デバイスからホストへ転送
  cudaMemcpy(hostTotal, deviceTotal, sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
  cudaMemcpy(hostUnique,deviceUnique,sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
  // 集計
  for(int col=0;col<l->STEPS/THREAD_NUM;col++){
    total+=hostTotal[col];
    unique+=hostUnique[col];
  }
  TOTAL+=total;
  UNIQUE+=unique;
  //
  cudaFree(deviceDown);
  cudaFree(deviceLeft);
  cudaFree(deviceRight);
  cudaFree(deviceTotal);
  cudaFree(deviceUnique);
  cudaFree(deviceBoard);
  cudaFreeHost(hostDown);
  cudaFreeHost(hostLeft);
  cudaFreeHost(hostRight);
  cudaFreeHost(hostTotal);
  cudaFreeHost(hostUnique);
  cudaFreeHost(hostBoard);
}
// GPU -n Ｑが角にある
void BitBoard_backTrack1G(const unsigned int size,unsigned int row,unsigned int _left,unsigned int _down,unsigned int _right,struct local* l)
{
  //何行目からGPUで行くか。ここの設定は変更可能、設定値を多くするほどGPUで並行して動く
  /***08 クイーンを２行目まで固定で置くためmarkが3以上必要*********************/
  const unsigned int mark=size>12?size-10:3;
  //mark 行までCPU mark行以降はGPU
  const unsigned int h_mark=row;
  const unsigned int mask=(1<<size)-1;
  unsigned long totalCond=0;
  bool matched=false;
  //host
  unsigned int down[32];  down[row]=_down;
  unsigned int right[32]; right[row]=_right;
  unsigned int left[32];  left[row]=_left;
  //bitmapを配列で持つことにより
  //stackを使わないで1行前に戻れる
  unsigned int bitmap[32];
  bitmap[row]=mask&~(left[row]|down[row]|right[row]);
  unsigned int bit;

  unsigned int* hostDown;
  cudaMallocHost((void**) &hostDown,sizeof(int)*l->STEPS);
  unsigned int* hostLeft;
  cudaMallocHost((void**) &hostLeft,sizeof(int)*l->STEPS);
  unsigned int* hostRight;
  cudaMallocHost((void**) &hostRight,sizeof(int)*l->STEPS);
  unsigned int* deviceDown;
  cudaMalloc((void**) &deviceDown,sizeof(int)*l->STEPS);
  unsigned int* deviceLeft;
  cudaMalloc((void**) &deviceLeft,sizeof(int)*l->STEPS);
  unsigned int* deviceRight;
  cudaMalloc((void**) &deviceRight,sizeof(int)*l->STEPS);

  unsigned int* hostTotal;
  cudaMallocHost((void**) &hostTotal,sizeof(int)*l->STEPS/THREAD_NUM);
  unsigned int* hostUnique;
  cudaMallocHost((void**) &hostUnique,sizeof(int)*l->STEPS/THREAD_NUM);
  unsigned int* deviceTotal;
  cudaMalloc((void**) &deviceTotal,sizeof(int)*l->STEPS/THREAD_NUM);
  unsigned int* deviceUnique;
  cudaMalloc((void**) &deviceUnique,sizeof(int)*l->STEPS/THREAD_NUM);

  //12行目までは3行目までCPU->row==mark以下で 3行目までの
  //down,left,right情報を hostDown,hostLeft,hostRight
  //に格納
  //する->3行目以降をGPUマルチスレッドで実行し結果を取得
  //13行目以降はCPUで実行する行数が１個ずつ増えて行く
  //例えばn15だとrow=5までCPUで実行し、
  //それ以降はGPU(現在の設定だとGPUでは最大10行実行する
  //ようになっている)
  //while(row>=0) {
  int rowP=0;
  unsigned long total=0;
  unsigned long unique=0;
  while(row>=h_mark) {
    //bitmap[row]=00000000 クイーンを
    //どこにも置けないので1行上に戻る
    //06GPU こっちのほうが優秀
    if(bitmap[row]==0){ row--; }
    else{//おける場所があれば進む
      if(row<l->BOUND1) { /***11 枝刈り*********************/
        bitmap[row]&=~2; // bm|=2; bm^=2; (bm&=~2と同等)
      }
      bitmap[row]^=bit=(-bitmap[row]&bitmap[row]);
      if((bit&mask)!=0){//置く場所があれば先に進む
        rowP=row+1;
        down[rowP]=down[row]|bit;
        left[rowP]=(left[row]|bit)<<1;
        right[rowP]=(right[row]|bit)>>1;
        bitmap[rowP]=mask&~(down[rowP]|left[rowP]|right[rowP]);
        row++;
        if(row==mark){
          //3行目(mark)にクイーンを１個ずつ置いていって、
          //down,left,right情報を格納、
          //その次の行へは進まない。その行で可能な場所にクイー
          //ン置き終わったらGPU並列実行
          //totalCond がthreadIdになる 各スレッドに down,left,right情報を渡す
          //row=2(13行目以降は増えていく。例えばn15だとrow=5)の情報を
          //hostDown,hostLeft,hostRightに格納する         
          hostDown[totalCond]=down[row];
          hostLeft[totalCond]=left[row];
          hostRight[totalCond]=right[row];
          //スレッド数をインクリメントする
          totalCond++;
          //最大GPU数に達してしまったら一旦ここでGPUを実行する。STEPSはGPUの同
          //時並行稼働数を制御
          //nの数が少ないうちはtotalCondがSTEPSを超えることはないがnの数が増え
          //て行くと超えるようになる。
          //ここではtotalCond==STEPSの場合だけこの中へ         
          if(totalCond==l->STEPS){
            //matched=trueの時にCOUNT追加 //GPU内でカウントしているので、GPUか
            //ら出たらmatched=trueになってる
            if(matched){
              // デバイスからホストへ転送
              cudaMemcpy(hostTotal, deviceTotal, sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
              cudaMemcpy(hostUnique,deviceUnique,sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
              // 集計
              for(int col=0;col<l->STEPS/THREAD_NUM;col++){
                total+=hostTotal[col];
                unique+=hostUnique[col];
              }
              matched=false;
            }
            // ホストからデバイスへ転送
            cudaMemcpy(deviceDown, hostDown, sizeof(int)*totalCond,cudaMemcpyHostToDevice);
            cudaMemcpy(deviceLeft, hostLeft, sizeof(int)*totalCond,cudaMemcpyHostToDevice);
            cudaMemcpy(deviceRight,hostRight,sizeof(int)*totalCond,cudaMemcpyHostToDevice);
            // CUDA起動
            BitBoard_cuda_kernel_b1<<<l->STEPS/THREAD_NUM,THREAD_NUM >>>(size,size-mark,deviceDown,deviceLeft,deviceRight,deviceTotal,deviceUnique,totalCond,row,l->BOUND1);
            //STEPS数の数だけマルチスレッドで起動するのだが、実際に計算が行われ
            //るのはtotalCondの数だけでそれ以外は空回しになる
            //GPU内でカウントしているので、GPUから出たらmatched=trueになってる
            matched=true;
            //totalCond==STEPSルートでGPUを実行したらスレッドをまた0から開始す
            //る(これによりなんどもSTEPS数分だけGPUを起動できる)
            totalCond=0;           
          }
          //hostDown,hostLeft,hostRightに情報を格納したら1行上に上がる
          //これを繰り返すことにより row=2で可能な場所全てにクイーンを置いて
          //hostDown,hostLeft,hostRightに情報を格納する
          row--;
        }
      }else{
        //置く場所がなければ上に上がる。row==mark行に達するまではCPU側で普通に
        //nqueenをやる
        row--;
      }
    }
  }
  //if(totalCond==l->STEPS){で処理されなかった残りがここで実行される
  //matched=trueの時にCOUNT追加 //GPU内でカウントしているので、GPUから出たら
  //matched=trueになってる
  //
  if(matched){
    // デバイスからホストへ転送
    cudaMemcpy(hostTotal, deviceTotal, sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
    cudaMemcpy(hostUnique,deviceUnique,sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
    // 集計
    for(int col=0;col<l->STEPS/THREAD_NUM;col++){
      total+=hostTotal[col];
      unique+=hostUnique[col];
    }
    matched=false;
  }
  // ホストからデバイスへ転送
  cudaMemcpy(deviceDown, hostDown, sizeof(int)*totalCond,cudaMemcpyHostToDevice);
  cudaMemcpy(deviceLeft, hostLeft, sizeof(int)*totalCond,cudaMemcpyHostToDevice);
  cudaMemcpy(deviceRight,hostRight,sizeof(int)*totalCond,cudaMemcpyHostToDevice);
  // CUDA起動
  BitBoard_cuda_kernel_b1<<<l->STEPS/THREAD_NUM,THREAD_NUM >>>(size,size-mark,deviceDown,deviceLeft,deviceRight,deviceTotal,deviceUnique,totalCond,mark,l->BOUND1);
  // デバイスからホストへ転送
  cudaMemcpy(hostTotal, deviceTotal, sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
  cudaMemcpy(hostUnique,deviceUnique,sizeof(int)*l->STEPS/THREAD_NUM,cudaMemcpyDeviceToHost);
  // 集計
  for(int col=0;col<l->STEPS/THREAD_NUM;col++){
    total+=hostTotal[col];
    unique+=hostUnique[col];
  }
  TOTAL+=total;
  UNIQUE+=unique;
  //開放
  cudaFree(deviceDown);
  cudaFree(deviceLeft);
  cudaFree(deviceRight);
  cudaFree(deviceTotal);
  cudaFree(deviceUnique);
  cudaFreeHost(hostDown);
  cudaFreeHost(hostLeft);
  cudaFreeHost(hostRight);
  cudaFreeHost(hostTotal);
  cudaFreeHost(hostUnique);
}
// GPU -n ビットボードの実行 角にＱがある・ないの分岐を行う
void BitBoard_build(const unsigned int size,int STEPS)
{
  if(size<=0||size>32){return;}
  /**
    int型は unsigned とする
    total: グローバル変数TOTALへのアクセスを極小化する
    */
  struct local l; //GPU で扱う構造体
  l.STEPS=STEPS;
  unsigned int bit=1;
  l.board[0]=1;
  unsigned int left=bit<<1,down=bit,right=bit>>1;
  /**
    2行目は右から3列目から左端から2列目まで
  */
  for(l.BOUND1=2;l.BOUND1<size-1;l.BOUND1++){
    l.board[1]=bit=(1<<l.BOUND1);
    printf("\rBOUND1(%d/%d)",l.BOUND1,size-1);// << std::flush;
    printf("\r");
    fflush(stdout);
    BitBoard_backTrack1G(size,2,(left|bit)<<1,(down|bit),(right|bit)>>1,&l);
  }
  l.TOPBIT=1<<(size-1);
  l.SIDEMASK=l.LASTMASK=(l.TOPBIT|1);
  l.ENDBIT=(l.TOPBIT>>1);
  /**
    1行目右から2列目から
    偶数個は1/2 n=8 なら 1,2,3 奇数個は1/2+1 n=9 なら 1,2,3,4
  */
  for(l.BOUND1=1,l.BOUND2=size-1-1;l.BOUND1<l.BOUND2;l.BOUND1++,l.BOUND2--){
    printf("\r  BOUND2(%d/%d)",l.BOUND1,size/2-1);// << std::flush;
    printf("\r");
    fflush(stdout);
    l.board[0]=bit=(1<<l.BOUND1);
    BitBoard_backTrack2G(size,1,bit<<1,bit,bit>>1,&l);
    l.LASTMASK|=l.LASTMASK>>1|l.LASTMASK<<1;
    l.ENDBIT>>=1;
  }
}
// CUDA 初期化
bool InitCUDA()
{
  int count;
  cudaGetDeviceCount(&count);
  if(count==0){fprintf(stderr,"There is no device.\n");return false;}
  unsigned int i;
  for(i=0;i<count;++i){
    struct cudaDeviceProp prop;
    if(cudaGetDeviceProperties(&prop,i)==cudaSuccess){if(prop.major>=1){break;} }
  }
  if(i==count){fprintf(stderr,"There is no device supporting CUDA 1.x.\n");return false;}
  cudaSetDevice(i);
  return true;
}
//メイン
int main(int argc,char** argv)
{
  bool cpu=false,cpur=false,gpu=false,gpuBitBoard=false;
  unsigned int argstart=2;
  if(argc>=2&&argv[1][0]=='-'){
    if(argv[1][1]=='c'||argv[1][1]=='C'){cpu=true;}
    else if(argv[1][1]=='r'||argv[1][1]=='R'){cpur=true;}
    else if(argv[1][1]=='c'||argv[1][1]=='C'){cpu=true;}
    else if(argv[1][1]=='g'||argv[1][1]=='G'){gpu=true;}
    else if(argv[1][1]=='n'||argv[1][1]=='N'){gpuBitBoard=true;}
    else{ gpuBitBoard=true; } //デフォルトをgpuとする
    argstart=2;
  }
  if(argc<argstart){
    printf("Usage: %s [-c|-g|-r|-s] n STEPS\n",argv[0]);
    printf("  -r: CPU 再帰\n");
    printf("  -c: CPU 非再帰\n");
    printf("  -g: GPU 再帰\n");
    printf("  -n: GPU ビットボード\n");
  }
  if(cpur){ printf("\n\n対称解除法 再帰 \n"); }
  else if(cpu){ printf("\n\n対称解除法 非再帰 \n"); }
  else if(gpu){ printf("\n\n対称解除法 GPU\n"); }
  else if(gpuBitBoard){ printf("\n\n対称解除法 GPUビットボード \n"); }
  if(cpu||cpur)
  {
    unsigned int min=4; 
    unsigned int targetN=17;
    struct timeval t0;
    struct timeval t1;
    printf("%s\n"," N:        Total      Unique      dd:hh:mm:ss.ms");
    for(unsigned int size=min;size<=targetN;size++){
      local l;
      gettimeofday(&t0,NULL);//計測開始
      if(cpur){ //再帰
        symmetry_R(size,&l);
      }
      if(cpu){ //非再帰
        symmetry_NR(size,&l);
      }
      //
      gettimeofday(&t1,NULL);//計測終了
      unsigned int ss;
      unsigned int ms;
      unsigned int dd;
      if(t1.tv_usec<t0.tv_usec) {
        dd=(t1.tv_sec-t0.tv_sec-1)/86400;
        ss=(t1.tv_sec-t0.tv_sec-1)%86400;
        ms=(1000000+t1.tv_usec-t0.tv_usec+500)/10000;
      }else {
        dd=(t1.tv_sec-t0.tv_sec)/86400;
        ss=(t1.tv_sec-t0.tv_sec)%86400;
        ms=(t1.tv_usec-t0.tv_usec+500)/10000;
      }//end if
      unsigned int hh=ss/3600;
      unsigned int mm=(ss-hh*3600)/60;
      ss%=60;
      printf("%2d:%13ld%12ld%8.2d:%02d:%02d:%02d.%02d\n",size,TOTAL,UNIQUE,dd,hh,mm,ss,ms);
    } //end for
  }//end if
  if(gpu||gpuBitBoard)
  {
    int STEPS=24576;
    if(!InitCUDA()){return 0;}
    unsigned int min=4;
    unsigned int targetN=25;
    struct timeval t0;
    struct timeval t1;
    printf("%s\n"," N:            Total          Unique      dd:hh:mm:ss.ms");
    for(unsigned int size=min;size<=targetN;size++){
      gettimeofday(&t0,NULL);
      if(gpu){
        TOTAL=UNIQUE=0;
        local l[MAX];
        GPU_symmetry_R(size,&l[0]);
        TOTAL=l->TOTAL;
        UNIQUE=l->UNIQUE;
      }else if(gpuBitBoard){
        TOTAL=UNIQUE=0;
        BitBoard_build(size,STEPS);
      }
      gettimeofday(&t1,NULL);
      unsigned int ss;
      unsigned int ms;
      unsigned int dd;
      if (t1.tv_usec<t0.tv_usec) {
        dd=(int)(t1.tv_sec-t0.tv_sec-1)/86400;
        ss=(t1.tv_sec-t0.tv_sec-1)%86400;
        ms=(1000000+t1.tv_usec-t0.tv_usec+500)/10000;
      } else {
        dd=(int)(t1.tv_sec-t0.tv_sec)/86400;
        ss=(t1.tv_sec-t0.tv_sec)%86400;
        ms=(t1.tv_usec-t0.tv_usec+500)/10000;
      }//end if
      unsigned int hh=ss/3600;
      unsigned int mm=(ss-hh*3600)/60;
      ss%=60;
      printf("%2d:%17ld%16ld%8.3d:%02d:%02d:%02d.%02d\n",size,TOTAL,UNIQUE,dd,hh,mm,ss,ms);
    }
  }
  return 0;
}
```



## 参考リンク
以下の詳細説明を参考にしてください。
[【参考リンク】Ｎクイーン問題 過去記事一覧](https://suzukiiichiro.github.io/search/?keyword=Ｎクイーン問題)
[【Github】エイト・クイーンのソース置き場 BashもJavaもPythonも！](https://github.com/suzukiiichiro/N-Queens)


Ｎクイーン問題（６３）第七章 並列処理 キャリーチェーン ＮＶＩＤＩＡ ＣＵＤＡ編
https://suzukiiichiro.github.io/posts/2023-08-01-05-n-queens-suzuki/
Ｎクイーン問題（６２）第七章 並列処理 対称解除法 ビットボード ＮＶＩＤＩＡ ＣＵＤＡ編
https://suzukiiichiro.github.io/posts/2023-08-01-04-n-queens-suzuki/
Ｎクイーン問題（６１）第七章 並列処理 対称解除法 ノードレイヤー ＮＶＩＤＩＡ ＣＵＤＡ編
https://suzukiiichiro.github.io/posts/2023-08-01-03-n-queens-suzuki/
Ｎクイーン問題（６０）第七章 並列処理 ミラー ＮＶＩＤＩＡ ＣＵＤＡ編
https://suzukiiichiro.github.io/posts/2023-08-01-02-n-queens-suzuki/
Ｎクイーン問題（５９）第七章 並列処理 ビットマップ ＮＶＩＤＩＡ ＣＵＤＡ編
https://suzukiiichiro.github.io/posts/2023-08-01-01-n-queens-suzuki/
Ｎクイーン問題（５８）第六章 並列処理 pthread C言語編
https://suzukiiichiro.github.io/posts/2023-06-28-09-n-queens-suzuki/
Ｎクイーン問題（５７）第八章 キャリーチェーン C言語編
https://suzukiiichiro.github.io/posts/2023-06-28-08-n-queens-suzuki/
Ｎクイーン問題（５６）第八章 ミラー C言語編
https://suzukiiichiro.github.io/posts/2023-06-28-06-n-queens-suzuki/
Ｎクイーン問題（５５）第八章 ビットマップ C言語編
https://suzukiiichiro.github.io/posts/2023-06-28-05-n-queens-suzuki/
Ｎクイーン問題（５４）第八章 ビットマップ C言語編
https://suzukiiichiro.github.io/posts/2023-06-28-04-n-queens-suzuki/
Ｎクイーン問題（５３）第八章 配置フラグ C言語編
https://suzukiiichiro.github.io/posts/2023-06-28-03-n-queens-suzuki/
Ｎクイーン問題（５２）第八章 バックトラック C言語編
https://suzukiiichiro.github.io/posts/2023-06-28-02-n-queens-suzuki/
Ｎクイーン問題（５１）第八章 ブルートフォース C言語編
https://suzukiiichiro.github.io/posts/2023-06-28-01-n-queens-suzuki/
Ｎクイーン問題（５０）第七章 マルチプロセス Python編
https://suzukiiichiro.github.io/posts/2023-06-21-04-n-queens-suzuki/
Ｎクイーン問題（４９）第七章 マルチスレッド Python編
https://suzukiiichiro.github.io/posts/2023-06-21-03-n-queens-suzuki/
Ｎクイーン問題（４８）第七章 シングルスレッド Python編
https://suzukiiichiro.github.io/posts/2023-06-21-02-n-queens-suzuki/
Ｎクイーン問題（４７）第七章 クラス Python編
https://suzukiiichiro.github.io/posts/2023-06-21-01-n-queens-suzuki/
Ｎクイーン問題（４６）第七章 ステップＮの実装 Python編
https://suzukiiichiro.github.io/posts/2023-06-16-02-n-queens-suzuki/
Ｎクイーン問題（４５）第七章 キャリーチェーン Python編
https://suzukiiichiro.github.io/posts/2023-06-16-01-n-queens-suzuki/
Ｎクイーン問題（４４）第七章　対象解除法 Python編
https://suzukiiichiro.github.io/posts/2023-06-14-02-n-queens-suzuki/
Ｎクイーン問題（４３）第七章　ミラー Python編
https://suzukiiichiro.github.io/posts/2023-06-14-01-n-queens-suzuki/
Ｎクイーン問題（４２）第七章　ビットマップ Python編
https://suzukiiichiro.github.io/posts/2023-06-13-05-n-queens-suzuki/
Ｎクイーン問題（４１）第七章　配置フラグ Python編
https://suzukiiichiro.github.io/posts/2023-06-13-04-n-queens-suzuki/
Ｎクイーン問題（４０）第七章　バックトラック Python編
https://suzukiiichiro.github.io/posts/2023-06-13-03-n-queens-suzuki/
Ｎクイーン問題（３９）第七章　バックトラック準備編 Python編
https://suzukiiichiro.github.io/posts/2023-06-13-02-n-queens-suzuki/
Ｎクイーン問題（３８）第七章　ブルートフォース Python編
https://suzukiiichiro.github.io/posts/2023-06-13-01-n-queens-suzuki/
Ｎクイーン問題（３７）第六章 C言語移植 その１７ pthread並列処理完成
https://suzukiiichiro.github.io/posts/2023-05-30-17-n-queens-suzuki/
Ｎクイーン問題（３６）第六章 C言語移植 その１６ pthreadの実装
https://suzukiiichiro.github.io/posts/2023-05-30-16-n-queens-suzuki/
Ｎクイーン問題（３５）第六章 C言語移植 その１５ pthread実装直前版完成
https://suzukiiichiro.github.io/posts/2023-05-30-15-n-queens-suzuki/
Ｎクイーン問題（３４）第六章 C言語移植 その１４
https://suzukiiichiro.github.io/posts/2023-05-30-14-n-queens-suzuki/
Ｎクイーン問題（３３）第六章 C言語移植 その１３
https://suzukiiichiro.github.io/posts/2023-05-30-13-n-queens-suzuki/
Ｎクイーン問題（３２）第六章 C言語移植 その１２
https://suzukiiichiro.github.io/posts/2023-05-30-12-n-queens-suzuki/
Ｎクイーン問題（３１）第六章 C言語移植 その１１
https://suzukiiichiro.github.io/posts/2023-05-30-11-n-queens-suzuki/
Ｎクイーン問題（３０）第六章 C言語移植 その１０
https://suzukiiichiro.github.io/posts/2023-05-30-10-n-queens-suzuki/
Ｎクイーン問題（２９）第六章 C言語移植 その９
https://suzukiiichiro.github.io/posts/2023-05-30-09-n-queens-suzuki/
Ｎクイーン問題（２８）第六章 C言語移植 その８
https://suzukiiichiro.github.io/posts/2023-05-30-08-n-queens-suzuki/
Ｎクイーン問題（２７）第六章 C言語移植 その７
https://suzukiiichiro.github.io/posts/2023-05-30-07-n-queens-suzuki/
Ｎクイーン問題（２６）第六章 C言語移植 その６
https://suzukiiichiro.github.io/posts/2023-05-30-06-n-queens-suzuki/
Ｎクイーン問題（２５）第六章 C言語移植 その５
https://suzukiiichiro.github.io/posts/2023-05-30-05-n-queens-suzuki/
Ｎクイーン問題（２４）第六章 C言語移植 その４
https://suzukiiichiro.github.io/posts/2023-05-30-04-n-queens-suzuki/
Ｎクイーン問題（２３）第六章 C言語移植 その３
https://suzukiiichiro.github.io/posts/2023-05-30-03-n-queens-suzuki/
Ｎクイーン問題（２２）第六章 C言語移植 その２
https://suzukiiichiro.github.io/posts/2023-05-30-02-n-queens-suzuki/
Ｎクイーン問題（２１）第六章 C言語移植 その１
N-Queens問://suzukiiichiro.github.io/posts/2023-05-30-01-n-queens-suzuki/
Ｎクイーン問題（２０）第五章 並列処理
https://suzukiiichiro.github.io/posts/2023-05-23-02-n-queens-suzuki/
Ｎクイーン問題（１９）第五章 キャリーチェーン
https://suzukiiichiro.github.io/posts/2023-05-23-01-n-queens-suzuki/
Ｎクイーン問題（１８）第四章 エイト・クイーンノスタルジー
https://suzukiiichiro.github.io/posts/2023-04-25-01-n-queens-suzuki/
Ｎクイーン問題（１７）第四章　偉人のソースを読む「Ｎ２４を発見 Ｊｅｆｆ Ｓｏｍｅｒｓ」
https://suzukiiichiro.github.io/posts/2023-04-21-01-n-queens-suzuki/
Ｎクイーン問題（１６）第三章　対象解除法 ソース解説
https://suzukiiichiro.github.io/posts/2023-04-18-01-n-queens-suzuki/
Ｎクイーン問題（１５）第三章　対象解除法 ロジック解説
https://suzukiiichiro.github.io/posts/2023-04-13-02-nqueens-suzuki/
Ｎクイーン問題（１４）第三章　ミラー
https://suzukiiichiro.github.io/posts/2023-04-13-01-nqueens-suzuki/
Ｎクイーン問題（１３）第三章　ビットマップ
https://suzukiiichiro.github.io/posts/2023-04-05-01-nqueens-suzuki/
Ｎクイーン問題（１２）第二章　まとめ
https://suzukiiichiro.github.io/posts/2023-03-17-02-n-queens-suzuki/
Ｎクイーン問題（１１）第二章　配置フラグの再帰・非再帰
https://suzukiiichiro.github.io/posts/2023-03-17-01-n-queens-suzuki/
Ｎクイーン問題（１０）第二章　バックトラックの再帰・非再帰
https://suzukiiichiro.github.io/posts/2023-03-16-01-n-queens-suzuki/
Ｎクイーン問題（９）第二章　ブルートフォースの再帰・非再帰
https://suzukiiichiro.github.io/posts/2023-03-14-01-n-queens-suzuki/
Ｎクイーン問題（８）第一章　まとめ
https://suzukiiichiro.github.io/posts/2023-03-09-01-n-queens-suzuki/
Ｎクイーン問題（７）第一章　ブルートフォース再び
https://suzukiiichiro.github.io/posts/2023-03-08-01-n-queens-suzuki/
Ｎクイーン問題（６）第一章　配置フラグ
https://suzukiiichiro.github.io/posts/2023-03-07-01-n-queens-suzuki/
Ｎクイーン問題（５）第一章　進捗表示テーブルの作成
https://suzukiiichiro.github.io/posts/2023-03-06-01-n-queens-suzuki/
Ｎクイーン問題（４）第一章　バックトラック
https://suzukiiichiro.github.io/posts/2023-02-21-01-n-queens-suzuki/
Ｎクイーン問題（３）第一章　バックトラック準備編
https://suzukiiichiro.github.io/posts/2023-02-14-03-n-queens-suzuki/
Ｎクイーン問題（２）第一章　ブルートフォース
https://suzukiiichiro.github.io/posts/2023-02-14-02-n-queens-suzuki/
Ｎクイーン問題（１）第一章　エイトクイーンについて
https://suzukiiichiro.github.io/posts/2023-02-14-01-n-queens-suzuki/




## 書籍の紹介
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







