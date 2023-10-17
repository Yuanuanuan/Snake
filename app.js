const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');
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

snake[1] = {
  X: 60,
  y: 0,
}

snake[2] = {
  X: 40,
  y: 0,
}

snake[3] = {
  X: 20,
  y: 0,
}

for (let i = 0; i < snake.length; i++) {
  if (i === 0) {
    ctx.fillStyle = 'lightgreen';
  } else {
    ctx.fillStyle = 'lightblue';
  }
  ctx.strokeStyle = 'white';
  ctx.fillRect(snake[i].X, snake[i].y, unit, unit);
  ctx.strokeRect(snake[i].X, snake[i].y, unit, unit);
}