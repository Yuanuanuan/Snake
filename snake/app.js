const canvas = document.getElementById('myCanvas');

const cts = canvas.getContext('2d');
//  getContext() method 會回傳一個canvas的drawing context
//  drawing context 可以用來再canvas內畫圖

const unit = 20;
const row = canvas.height / unit;
const column = canvas.width / unit;

let snake = []; // array中的每個元素，都是一個物件
//  物件的工作是，儲存身體的x, y座標

snake[0] = {
  X: 80,
  y: 0,
}