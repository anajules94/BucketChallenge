var canvas = document.getElementById('game');
ctx = canvas.getContext('2d')
$(document).ready(function() {

  //var canvas = document.getElementById('game');
  //ctx = canvas.getContext('2d')
  var bucket1 = new Bucket();
  console.log(bucket1);
  bucket1.draw();

  window.onkeydown = function(event) {
    var keyPr = event.keyCode;
    if (keyPr === 39) {
      bucket1.moveRigth();
      bucket1.draw();
    } else if (keyPr === 37) {
      bucket1.moveLeft();
      bucket1.draw();
    }
  };

  var bucket;
  var dropArray = []; // Array que guarda objetos Drop


  function createBubble() {
    for (var i = 0; i <= 20; i++) { //Sacar 20 Objetos Drop
      var x = Math.floor(Math.random() * (canvas.width - 10 * 2) + 100);
      var vy = Math.floor(Math.random() * (7 - 4) + 1);
      dropArray.push(new RainDrops(x ,vy, i)) //Guardamos los objetos Drop
    }

  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    bucket1.draw();
    for (var i = 0; i < dropArray.length; i++) {
      dropArray[i].drop();
      dropArray[i].draw();
      dropArray[i].check(i);
      dropArray[i].collision(i);
      if(dropArray[i].collision(i)){
        dropArray.splice(i,1)
      }
      
    }
    window.requestAnimationFrame(animate)
  }

  function drawBackground(){
    ctx.fillStyle = '#1e90ff';
    ctx.fillRect(0,0,canvas.width,canvas.height)
  }

  function initGame() {
    createBubble();
    drawBackground();
    animate();
  }
  //setInterval(animate, 1000/60)
  initGame();
  //requestAnimationFrame(animate)
});
