function RainDrops(x, vy, flag, bucketResult){
  this.x = x;
  this.y = 0;
  this.width = 55;
  this.height = 55;
  this.vy = vy;
  this.image = new Image();
  this.image.src = './images/Gota.png';
  if (flag) {
    this.value = bucketResult;
  } else {
    this.value = this.getRandomValue();
  }
}

RainDrops.prototype.draw = function (){
    newGame.ctx.font = "12.5px Calibri";
    newGame.ctx.fillStyle = "black";
    newGame.ctx.textAlign = "center";
    newGame.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    newGame.ctx.fillText(this.value, this.x+30, this.y+37);
}

RainDrops.prototype.drop = function (){
  this.y += this.vy;
}

RainDrops.prototype.collision = function(i) {
  if (this.y >= newGame.canvas.height) {
    this.y = newGame.canvas.height;
    
    return true
  }
}

RainDrops.prototype.getRandomValue = function() {
  return Math.floor(Math.random()*30);
}
