// Получаем контекст рисования на canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Функция для рисования прямоугольника с заданным цветом
function drawRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

// Функция для рисования треугольника (крыша)
function drawTriangle(x1, y1, x2, y2, x3, y3, color) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

// Функция для рисования круга (дерево)
function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

// Функция для рисования ствола дерева
function drawTree(x, y, trunkWidth, trunkHeight, foliageRadius) {
  // Ствол дерева
  drawRect(x - trunkWidth / 2, y, trunkWidth, trunkHeight, "saddlebrown");

  // Листва дерева
  drawCircle(x, y - trunkHeight, foliageRadius, "forestgreen");
}

// Рисуем домик
// Основное тело дома
drawRect(200, 200, 200, 150, "lightblue");
// Крыша дома
drawTriangle(200, 200, 400, 200, 300, 100, "brown");

// Рисуем окна
drawRect(230, 230, 40, 40, "white");
drawRect(330, 230, 40, 40, "white");

// Рисуем двери
drawRect(270, 270, 60, 80, "peru");

// Рисуем деревья
drawTree(100, 300, 20, 60, 40);
drawTree(500, 300, 20, 60, 40);
