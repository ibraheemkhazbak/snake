var snake;
var direction;
var gui;
var playground = 600;
function setup() {
  createCanvas(playground, 660);
  snake = new Snake();
  gui = new gui();
  pickLocation();

  frameRate(10);
}




function pickLocation() {

  var cols = floor(playground / scl);

  var rows = floor(playground / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));

  food.mult(scl);
  if (food.y < 60) {
    pickLocation();
  }

  for (var i = 0; i < snake.tail.length; i++) {
    var pos = snake.tail[i];
    var d = dist(food.x, food.y, pos.x, pos.y);
    if (d < 1) {
      pickLocation();
    }
  }




}

function draw() {

  background(51);
  gui.bar();
  snake.update();
  gui.score();
  gui.bScore();
  snake.show();
  snake.death();


  if (snake.eats(food)) {
    pickLocation();
  }
  var foodColor = document.getElementById("foodColor");
  noStroke();
  fill(foodColor.value);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW && direction != "down") {
    direction = "up";
    snake.dir(0, -20);

  } else if (keyCode === DOWN_ARROW && direction != "up") {
    direction = "down";
    snake.dir(0, 20);

  } else if (keyCode === RIGHT_ARROW && direction != "left") {
    direction = "right"
    snake.dir(20, 0);

  } else if (keyCode === LEFT_ARROW && direction != "right") {
    direction = "left";
    snake.dir(-20, 0);

  }
}
