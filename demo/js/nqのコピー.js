/*--------------------------------------------
共通変数
---------------------------------------------*/
var SIZE = $('#num').val();
var COUNT = 0;

//JS追加変数
var TIMER = false;
var startTime = new Date();
var SELECT = [];
var STEP = 0;
/*--------------------------------------------
設定
---------------------------------------------*/
class init {
  //値を初期化
  initValue(){
    startTime = new Date();
    $('#output').html('');
    $('#res').html('');
    $('#text > *').html('');
    SIZE = $('#num').val();
    SELECT = [];
    STEP = 0;
    COUNT = 0;
  }
  //テーブルを設定
  makeTable(target){
    var ARR = [];
    var html = '<table id="table" class="table table-bordered table-sm"></table>';
    $(target).append(html);
    for(var x = 0; x < SIZE; x++) {
      $(target+' table').append('<tr class="tr-'+x+'"></tr>');
      for(var y = 0; y < SIZE; y++) {
        $(target+' table').find('.tr-'+x).append('<td class="td-'+x+y+'" data-val="'+x+','+y+'"></td>').html();
        if(x == 0) { SELECT.push([x, y]); }
        ARR.push([x,y])
      }
    }
  }
}

/*--------------------------------------------
クイーンを配置
---------------------------------------------*/
class setQueen {
  conflictQueen(){
    for(var i = 0; i < SELECT.length; i++){
      for(var l = 0; l < i; l++){
        //横のチェック
        if( SELECT[i][0] == SELECT[l][0] ) { return false; }
        //対角のチェック
        for(var k = 0; k < i; k++){
          if( Number(SELECT[k][0]+i-k) == SELECT[i][0]) { return false; }
          if( Number(SELECT[k][0]-i+k) == SELECT[i][0]) { return false; }
        }
      }
    }
    return true;
  }
  selects(){
    $('#count-text').text(`総当たり：${COUNT} 回目`)
    $('#output .queen').removeClass('queen');
    $(`#res .id${COUNT+1}`).remove();
    for(var i = 0; i < SELECT.length; i++){
      $(`#output .td-${SELECT[i].join('')}`).addClass('queen');
    }
    if( this.conflictQueen() ) {
      if($(`#res .id${COUNT}`).length > 0){ $(`#res .id${COUNT}`).remove(); }
      $('#output table').clone().addClass(`id${COUNT}`).appendTo('#res')
      if(SIZE % 2 == 1){
        $('#res tr:nth-child('+Math.ceil(SIZE / 2)+')').addClass('c_g');
        $('#res td:nth-child('+Math.ceil(SIZE / 2)+')').addClass('c_g');
      }
      if($('#isstop').prop('checked')){
        $('#stop').trigger('click');
      }
    }
  }
}

/*--------------------------------------------
NQueen1
ブルートフォース
---------------------------------------------*/
class nQueen01 {
  //1ステップ進める
  increaseStep(n){
    if(SELECT[SIZE - 1-n][0] < SIZE - 1) {
      for(var i = 0; i < n; i++){ SELECT[SIZE - 1-i] = [0, SIZE - 1-i]; }
      SELECT[SIZE - 1-n] = [++SELECT[SIZE - 1-n][0], SELECT[SIZE - 1-n][1]];
      if(n >= 1) { STEP = 0; }
    } else {
      for(var i = 0; i < n; i++){  SELECT[SIZE - 1-i] = [0, SIZE - 1-i]; }
      SELECT[SIZE - 1-n] = [++SELECT[SIZE - 1-n][0], SELECT[SIZE - 1-n][1]];
      ++STEP;
      this.increaseStep(STEP);
    }
    _setQueen.selects();
  }
  //1ステップ戻る
  decreaseStep(n){
    if(SELECT[SIZE - 1-n][0] > 0) {
      for(var i = 0; i < n; i++){ SELECT[SIZE - 1-i] = [SIZE - 1, SIZE - 1-i]; }
      SELECT[SIZE - 1-n] = [--SELECT[SIZE - 1-n][0], SELECT[SIZE - 1-n][1]];
      if(n >= 1) { STEP = 0; }
    } else {
      for(var  i = 0; i < n; i++){ SELECT[SIZE - 1-i] = [0, SIZE - 1-i]; }
      SELECT[SIZE - 1-n] = [--SELECT[SIZE - 1-n][0], SELECT[SIZE - 1-n][1]];
      ++STEP;
      if(STEP > SIZE - 1) { return; }
      this.decreaseStep(STEP);
    }
    _setQueen.selects();
  }
}

/*--------------------------------------------
NQueen1
バックトラック
---------------------------------------------*/
// const MAX = 24
// _COUNT = 0;
// var aBoard = [];
// var fA = [];  //横列にクイーンを一つだけ配置
// var fB = [];  //斜め列にクイーンを一つだけ配置
// var fC = [];  //斜め列にクイーンを一つだけ配置
// //各列（縦）におけるのは1つのみ
// for (var i = 0; i < MAX; i++) { aBoard[i] = ''; }
// for (var i = 0; i < 2*MAX-1; i++) { fA[i] = fB[i] = fC[i] = ''; }
// class _nQueen03 {
//   print(){
//     var log = `${++_COUNT} `;
//     for(var j = 0; j < SIZE; j++){
//       log += aBoard[j];
//     }
//     console.log(`log:${log}`);
//   }
//   run (row) {
//     if (row == SIZE) {
//       this.print();
//     } else {
//       // console.log('----------')
//       for(var i = 0; i < SIZE; i++) {
//         aBoard[row] = i;
//         if(fA[i] == 0 && fB[row - i + (SIZE - 1)] == 0 &&  fC[row + i] == 0) {
//           fA[i] = fB[row - i + (SIZE - 1)] = fC[row + i] = 1;
//           this.run(row + 1);
//           fA[i] = fB[row - i + (SIZE - 1)] = fC[row + i] = 0;
//         }
//       }
//     }
//   }
// }


class nQueen03 {
  //ローカル変数
  constructor(){
    this.horizon = [];  //横
    this.position = []; //横
    this.d_right = []; //右45度
    this.d_left = []; //左45度
    for (var i = 0; i < 2 * SIZE - 1; i++) {  this.horizon[i] = this.d_right[i] = this.d_left[i] = 0; }
  }
  outputBoard() {
    for(var i = 0; i < SIZE; i++){
      for (var j = 0; j < SIZE; j++) {
        if(j == this.position[i]){
          SELECT[i] = [i, j];
          _setQueen.selects();
        }
      }
    }
    ++COUNT;
  }
  increaseStep(n){
    if (n == SIZE) {
      this.outputBoard();
    } else {
      for(var i = 0; i < SIZE; i++){
        // this.outputBoard();
        this.position[n] = i;
        if(this.horizon[i] == 0 && this.d_right[n+i] == 0 && this.d_left[n-i+(SIZE - 1)] == 0) {
          this.horizon[i] = this.d_right [n + i] = this.d_left [n - i + ( SIZE -1)] = 1;
          // 次の列を配置
          this.increaseStep(n + 1);
          this.horizon[i] = this.d_right [n + i] = this.d_left [n - i + ( SIZE -1)] = 0;
        }
      }
    }
  }
}



/*--------------------------------------------
実行
---------------------------------------------*/
//テーブルを作成
const _init = new init()
_init.initValue();
_init.makeTable('#output');
//クイーンの配置
const _setQueen = new setQueen();
//どのnQueenで解くかを決める
var _nqueen = new nQueen01();

// const nq = new _nQueen03();
// nq.run(0);

//1ステップ進める
$('#btn-p').click(function(){
  ++COUNT;
  _nqueen.increaseStep(STEP);
})
//1ステップ戻る
$('#btn-m').click(function(){
    --COUNT;
  _nqueen.decreaseStep(STEP);
})

//自動でステップを進める
$('#start').click(function(){
  $('#start').hide();
  $('#stop').show();
  TIMER = setInterval(function(){
    if($("#output tr:last-child .queen").length != SIZE) {
      $('#btn-p').trigger('click');
    } else {
      clearInterval(TIMER)
      $('#start').show();
      $('#stop').hide();
      $('#res-text').text('解：'+$('#res table').length);
      var endTime = new Date();
      $('#res-time').text(`処理時間：${Math.ceil((endTime - startTime) / 60)} s`);
    }
  }, 0)
})
//一時停止を行う
$('#stop').click(function(){
  $('#start').show();
  $('#stop').hide();
  clearInterval(TIMER);
})
//値に変更があった場合
$('#num').keyup(function(){
  _init.initValue()
  _init.makeTable('#output'); 
})
//モードの切替
$('#mode').change(function(){
  _init.initValue()
  _init.makeTable('#output');
  switch($(this).val()){
    case "1":
      _nqueen = new nQueen01(); 
      break;
    case "3":
      _nqueen = new nQueen03();
      break;
    default:
      break;
  }
})


