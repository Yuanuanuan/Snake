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

let d = 'right';

const draw = () => {
  console.log('hello')
  for (let i = 0; i < snake.length; i++) {
    if (i === 0) {
      ctx.fillStyle = '#d2a9a3';
    } else {
      ctx.fillStyle = '#cfe6ed';
    }
    ctx.strokeStyle = 'white';
    ctx.fillRect(snake[i].X, snake[i].y, unit, unit);
    ctx.strokeRect(snake[i].X, snake[i].y, unit, unit);
  }

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  if (d === 'left') {
    snakeX -= unit;
  } else if (d === 'up') {
    snakeY -= unit;
  } else if (d === 'right') {
    snakeX += unit;
  } else if (d === 'down') {
    snakeY += unit;
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  }

  snake.pop();

  snake.unshift(newHead);
}

let myGame = setInterval(draw, 100);