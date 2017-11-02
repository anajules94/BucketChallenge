

$(document).ready(function() {



  // bucket.draw();

  newGame = {
    start: function() {
      this.canvas = document.getElementById('game');
      this.ctx = this.canvas.getContext('2d');
      drawBackground();
      this.bucket = new Bucket();
      this.bucketResult = this.bucket.answer;
      this.dropArray = [];
      createDrops();
      newGame.printScore();
      this.requestAnimation = requestAnimationFrame(this.update);
    },
    update: function() {
      clearCanvas();
      endGame();
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
    },
    score: 0,
    printScore: function() {
      document.getElementById('score').innerHTML = newGame.score
    },
    lives: 3
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
    for (var i = 0; i < 10; i++) { //Sacar 20 Objetos Drop
      var vy = Math.random() * (5 - 4.8) + 1;
      if(i == resultPlace) {
        newGame.dropArray.push(new RainDrops(i*70,vy,true, newGame.bucketResult)) //Guardamos los objetos Drop
      } else {
        newGame.dropArray.push(new RainDrops(i*70,vy,false)) //Guardamos los objetos Drop
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

  function endGame(){
    console.log("ENTRO ");
    if (newGame.error == 3){
        console.log("YOU LOOSE")
    }
  }

document.getElementById("startButton").onclick = function (){
  newGame.start();
}
});
