function gui() {
    this.x = 10;
    this.y = 40
    this.size = 40;

    textSize(this.size);
    this.tWidth = textWidth('Score: ');
    this.deaths = 0;
    this.deathcolor = (255 / 10) * this.deaths;
    this.guispace = 60;
    this.bar = function () {
        fill(0);
        rect(0, 0, width, this.guispace);
        stroke(255);
        line(0, this.guispace, width, this.guispace);
    }
    this.score = function () {
        fill(255);
        text("Score: ", this.x, this.y);

        fill(0, 255, 0);
        text(snake.total, this.x + this.tWidth, this.y);




    }
    this.bestScore = [];
    this.bScore = function () {
        fill(255);
        text("Best Score: ", 300, 40);
        var bestScoreW = textWidth("Best Score: ");
        if (this.bestScore[0] < snake.total) {
            this.bestScore[0] = snake.total;
        }

        if (this.bestScore.length === 0) {
            this.bestScore[0] = 0;

        }
        fill(0, 255, 0);
        text(this.bestScore[0], 300 + bestScoreW, 40);
    }


}