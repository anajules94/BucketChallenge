$( document ).ready(function() {

  var canvas = document.getElementById('game');
  ctx = canvas.getContext('2d')
  var bucket1 = new Bucket();
  bucket1.draw();

  window.onkeydown = function(event) {
    var keyPr = event.keyCode;
    if(keyPr === 39){
      console.log('R');
      bucket1.moveRigth();
      bucket1.draw();
    }
    else if(keyPr === 37){
      console.log('L');
      bucket1.moveLeft();
      bucket1.draw();
    }
  };

dropArray = [] // Array que guarda objetos Drop

for (var i = 0; i < 10; i++) { //Sacar 10 Objetos Drop
  var x = Math.random() * (canvas.width - 10 * 2) + 100;
  console.log(x)
  var vy = Math.random() * (7 - 4) + 4;
  console.log(vy);

  dropArray.push(new RainDrops(x ,vy)) //Guardamos los objetos Drop
}


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bucket1.draw();

  for(var i=0; i<dropArray.length; i++) {
    dropArray[i].draw();
    dropArray[i].drop();
  }
}

setInterval(animate, 30)
});
