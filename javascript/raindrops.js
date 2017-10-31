function RainDrops(x, vy, text){
  this.x = x;
  this.y = 0;
  this.width = 40;
  this.heigth = 40;
  this.vy = vy;
  this.value = text;
  this.image = new Image();
  this.image.src = './Gota.png'
}

RainDrops.prototype.draw = function (){
  ctx.drawImage(this.image, this.x, this.y, this.width, this.heigth);
}

RainDrops.prototype.drop = function (){
  this.y += this.vy;
}

RainDrops.prototype.check = function (i){
  if (this.y >= (500 +this.radius*2)){
    dropArray.splice(i,1);

  }
}

 // borrar del array gota que toca el bottom
RainDrops.prototype.collision = function (i){
  if (this.y >= canvas.height) {
    this.y = canvas.height;
    return true
  }
}
