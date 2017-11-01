var canvas = document.getElementById('game');
ctx = canvas.getContext('2d')

$(document).ready(function() {

  var bucket = new Bucket();
  bucket.draw();

  window.onkeydown = function(event) {
    var keyPr = event.keyCode;
    if (keyPr === 39) {
      bucket.moveRigth();
    } else if (keyPr === 37) {
      bucket.moveLeft();
    }
  };

  var bucket;
  var dropArray = [];

  function createBubble() {
    for (var i = 0; i < 15; i++) { //Sacar 20 Objetos Drop
      var x = Math.floor(Math.random() * (canvas.width - 10 * 2) + 100);
      var vy = Math.floor(Math.random() * (7 - 4) + 1);
      dropArray.push( new RainDrops(x ,vy, i)) //Guardamos los objetos Drop
    }
  }

  function animate() {
    var img = new Image();
    img.src = './desert.png';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0,700,500);
    bucket.draw();
    for (var i = 0; i < dropArray.length; i++) {
      dropArray[i].drop();
      dropArray[i].draw();
      dropArray[i].collision(i);
      bucket.collision(dropArray[i])

      if(dropArray[i].collision(i)){
        dropArray.splice(i,1)
      }
    }
    window.requestAnimationFrame(animate);
  }


  function initGame() {
    createBubble();
    requestAnimationFrame(animate);
  }
  initGame();
});
