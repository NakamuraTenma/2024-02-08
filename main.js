let button = document.getElementById('button');
var btn_text = document.getElementById('btn_text').innerHTML;
var counter_input = document.getElementsByName('counter')[0];

console.log(btn_text);


function click() {
    if (btn_text == "スタート") {
        timer_set();
        btn_text = "ストップ";
        document.getElementById('btn_text').innerHTML = "ストップ";
    } else {
        timer_stop();
        btn_text = "スタート";
        document.getElementById('btn_text').innerHTML = "スタート";
        counter_input.style.visibility = 'visible';
    }
}

button.onclick = click;

function timer_set() {
    // 初期値
    timer_fix = 2; // 小数点以下の桁数(1)

    // 開始時刻
    var now = new Date(); // (2)
    // 1/1000秒単位
    nt = now.getTime(); // (3)

    // タイマー始動
    timerID = setInterval('timer_output()', 1000 / Math.pow(10, timer_fix)); // (4)
}

function timer_stop() {
    // タイマー停止
    clearInterval(timerID);
}

function timer_output() {
    // 現在時刻
    var now = new Date(); // (5)
    // 1/1000秒単位
    mt = now.getTime(); // (6)

    // 開始時刻と現在時刻の差を出力
    var elapsedSeconds = (mt - nt) / 1000;
    document.form_count.counter.value = count_format(elapsedSeconds, timer_fix); // (*7)

    // 3秒を超えた場合はテキストを非表示にする
    if (elapsedSeconds > 3) {
        counter_input.style.visibility = 'hidden';
    } else {
        counter_input.style.visibility = 'visible';
    }
}

function count_format(sec, fix) {
    // sec=秒数 fix=小数桁数
    var ts = sec.toFixed(fix); // 小数点以下の調整
    var tm = Math.floor(ts / 60); // 秒数切り捨て
    ts = ts % 60; // 60秒未満の秒数
    var th = Math.floor(tm / 60); // 分の切り捨て
    tm = tm % 60; // 60分未満の分数
    // 表示の整形
    if (ts < 10) ts = "0" + ts;
    return ts; // 文字列を返す
}
