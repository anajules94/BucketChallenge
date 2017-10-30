$(document).ready(function() {

  var canvas = document.getElementById('game');
  ctx = canvas.getContext('2d')
  var bucket1 = new Bucket();
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
    for (var i = 0; i < 10; i++) { //Sacar 10 Objetos Drop
      var x = Math.floor(Math.random() * (canvas.width - 10 * 2) + 100);
      //console.log(x)
      var vy = Math.floor(Math.random() * (7 - 4) + 1);
      dropArray.push(new RainDrops(x ,vy)) //Guardamos los objetos Drop
    }

  }

  function initGame() {
    createBubble();
    drawBackground();
    animate();
  }


  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    bucket1.draw();
    for (var i = 0; i < dropArray.length; i++) {
      dropArray[i].drop();
      dropArray[i].draw();
      dropArray[i].check(i);
    }
    window.requestAnimationFrame(animate)
  }

  function drawBackground(){
    ctx.fillStyle = '#1e90ff';
    ctx.fillRect(0,0,canvas.width,canvas.height)
  }
  //setInterval(animate, 1000/60)
  initGame();
  //requestAnimationFrame(animate)
});
