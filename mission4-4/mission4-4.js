function omikujishow(){
var omikuji = new Array("今日の運勢：(大吉)","今日の運勢：(中吉)","今日の運勢：(小吉)");

var number1 = Math.random();
var number2 = number1 * 3;
var number = Math.floor(number2);
var message = omikuji[number];

var object = document.getElementById("omikuji");
object.innerText = message;
}