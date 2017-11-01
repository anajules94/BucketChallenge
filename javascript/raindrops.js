function RainDrops(x, vy, value){
  this.x = x;
  this.y = 0;
  this.width = 40;
  this.height = 40;
  this.vy = vy;
  this.value = value
  this.image = new Image();
  this.image.src = './Gota.png'
}

RainDrops.prototype.draw = function (){
    ctx.font = "10px Calibri";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.fillText(this.value, this.x+22, this.y+29);
}

RainDrops.prototype.drop = function (){
  this.y += this.vy;
}

RainDrops.prototype.collision = function(i) {
  if (this.y >= canvas.height) {
    this.y = canvas.height;
    return true
  }
}
