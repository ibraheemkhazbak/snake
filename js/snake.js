var food;
var scl = 20;
function Snake() {
  this.snakeColor = document.getElementById("snakeColor");
  this.tailColor = document.getElementById("tailColor");
  this.x = 600 / 2 + 60;
  this.y = 600 / 2 + 60;
  this.pice = true;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.death = function () {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
        this.pice = true
        gui.deaths++;
        console.log("try again");
      }
    }
  }


  this.eats = function (pos) {
    var dis = dist(this.x, this.y, pos.x, pos.y);
    if (dis < 20) {
      this.total++;
      this.pice = false;
      return true;
    } else {
      return false;
    }
  };
  this.update = function () {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];


      }

    }

    this.tail[this.total - 1] = createVector(this.x, this.y);
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    if (this.x >= width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = width;
    } else if (this.y < 0 + gui.guispace) {
      this.y = height;
    } else if (this.y >= height) {
      this.y = 0 + gui.guispace;
    }

  };

  this.show = function () {
    fill(255);

    for (var i = 0; i < this.total; i++) {
      noStroke();
      fill(tailColor.value);
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    noStroke();
    fill(snakeColor.value);
    rect(this.x, this.y, scl, scl);
  };

  this.dir = function (x, y) {

    this.xspeed = x;
    this.yspeed = y;

  }


};

