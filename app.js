const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');
//  getContext() method 會回傳一個canvas的drawing context
//  drawing context 可以用來再canvas內畫圖

const unit = 20;
const row = canvas.height / unit;
const column = canvas.width / unit;

let snake = []; // array中的每個元素，都是一個物件
//  物件的工作是，儲存身體的x, y座標

const createSnake = () => {
  snake[0] = {
    x: 80,
    y: 0
  }
  
  snake[1] = {
    x: 60,
    y: 0
  }
  
  snake[2] = {
    x: 40,
    y: 0
  }
  
  snake[3] = {
    x: 20,
    y: 0
  }
}

class Fruit {
  constructor() {
    this.x = Math.floor(Math.random() * column) * unit;
    this.y = Math.floor(Math.random() * row) * unit;
  }

  drawFruit() {
    ctx.fillStyle = '#f57371';
    ctx.fillRect(this.x, this.y, unit, unit);
  }

  pickLocation() {
    let overlapping = false;
    let new_x;
    let new_y;

    const checkOverLap = (new_x, new_y) => {
      for (let i = 0; i < snake.length; i++) {
        if (new_x === snake[i].x && new_y === snake[i].y) {
          return overlapping = true;
        } else {
          return overlapping = false;
        }
      }
    }

    do {
      new_x = Math.floor(Math.random() * column) * unit;
      new_y = Math.floor(Math.random() * row) * unit;
      checkOverLap(new_x, new_y);
    } while (overlapping);

    this.x = new_x;
    this.y = new_y;
  }
}

createSnake();

let myFruit = new Fruit();

const changeDirection = (e) => {
  if (e.keyCode === 37 && d != 'right') d = 'left';
  if (e.keyCode === 38 && d != 'down') d = 'up';
  if (e.keyCode === 39 && d != 'left') d = 'right';
  if (e.keyCode === 40 && d != 'up') d = 'down';

  window.removeEventListener('keydown', changeDirection);
}

let score = 0;
let hightScore;
loadHightScore();
document.getElementById('myScore').innerHTML = 'Score : ' + score;
document.getElementById('myScore2').innerHTML = 'Hight Score : ' + hightScore;
const gameOver = document.querySelector('.game-over');

window.addEventListener('keydown', changeDirection)

let d = 'right';

const draw = () => {

  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      clearInterval(myGame);
      localStorage.setItem('hightScore', score);
      gameOver.style.transform = 'translate(-50%, -50%) scale(1)'
      gameOver.style.opacity = '1'
      return;
    }
  }

  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  myFruit.drawFruit();

  for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
      ctx.fillStyle = '#d43d8a';
    } else {
      ctx.fillStyle = '#68aca3';
    }
    ctx.strokeStyle = 'white';

    if (snake[i].x >= canvas.width) snake[i].x = 0;
    if (snake[i].x < 0) snake[i].x = canvas.width - unit;
    if (snake[i].y >= canvas.height) snake[i].y = 0;
    if (snake[i].y < 0) snake[i].y = canvas.height - unit;

    ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
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
    y: snakeY
  }

  if (snake[0].x === myFruit.x && snake[0].y === myFruit.y) {
    console.log('hello')
    myFruit.pickLocation();
    myFruit.drawFruit();
    score++;
    setHightScore(score);
    document.getElementById('myScore').innerHTML = 'Score : ' + score;
    document.getElementById('myScore2').innerHTML = 'Hight Score : ' + hightScore;
  } else {
    snake.pop();
  }

  snake.unshift(newHead);
  window.addEventListener('keydown', changeDirection)
}

let myGame = setInterval(draw, 100);

function loadHightScore() {
  const hight = localStorage.getItem('hightScore')
  if (hight === null) {
    hightScore = 0;
  } else {
    hightScore = Number(hight)
  }
}

function setHightScore(score) {
  if (score > hightScore) {
    localStorage.setItem('hightScore', score);
    hightScore = score;
  }
}