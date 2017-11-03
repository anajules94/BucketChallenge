


$(document).ready(function() {

document.getElementById("button-decor");

  // bucket.draw();

  newGame = {
    start: function() {
      this.canvas = document.getElementById('game');
      this.ctx = this.canvas.getContext('2d');
      document.getElementsByClassName('game-over')[0].style.display = 'none';
      drawBackground();
      this.bucket = new Bucket();
      this.bucketResult = this.bucket.answer;
      this.dropArray = [];
      createDrops();
      newGame.printScore();
      newGame.printLives();
      this.requestAnimation = requestAnimationFrame(this.update);
    },
    update: function() {
      clearCanvas();
      drawBackground();
      newGame.bucket.draw();
      for (var i = 0; i < newGame.dropArray.length; i++) {
        newGame.dropArray[i].drop();
        newGame.dropArray[i].draw();
        if(newGame.dropArray[i].collision(i) || newGame.bucket.collision(newGame.dropArray[i])){
          newGame.dropArray.splice(i,1)
        }
      }
      if(newGame.dropArray.length == 0) {
        cancelAnimationFrame(newGame.requestAnimation);
        newGame.start();
      } else {
        newGame.requestAnimation = requestAnimationFrame(newGame.update);
      }
      if (newGame.checkIfLost()) {
        cancelAnimationFrame(newGame.requestAnimation);
        document.getElementsByClassName('game-over')[0].style.display = 'flex';
      };
    },
    score: 0,
    printScore: function() {
      document.getElementById('score').innerHTML = newGame.score
    },
    lives: 3,
    printLives : function () {
      document.getElementById('lives').innerHTML = newGame.lives
    },
    checkIfLost: function() {
      if (newGame.lives == 0){
          return true;
      }
    }
  }

  window.onkeydown = function(event) {
    var keyPr = event.keyCode;
    if (keyPr === 39) {
      newGame.bucket.moveRigth();
    } else if (keyPr === 37) {
      newGame.bucket.moveLeft();
    }
  };

  function createDrops() {
    var resultPlace = Math.floor(Math.random()*10);
    for (var i = 0; i < 10; i++) {
      var vy = Math.random() * (5 - 4.8) + 1;
      if(i == resultPlace) {
        newGame.dropArray.push(new RainDrops(i*70,vy,true,newGame.bucketResult))
      } else {
        newGame.dropArray.push(new RainDrops(i*70,vy,false))
      }
    }
  }

  function drawBackground() {
    var img = new Image();
    img.src = './images/desert_hot.gif';
    newGame.ctx.drawImage(img, 0, 0,700,500);
  }

  function clearCanvas() {
    newGame.ctx.clearRect(0, 0, newGame.canvas.width, newGame.canvas.height);
  }

document.getElementById("button-decor").onclick = function (){
  document.getElementsByClassName('portada')[0].style.display = 'none';
}

document.getElementById("startButton").onclick = function (){
  newGame.start();
}
});
