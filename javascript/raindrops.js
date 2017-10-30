function RainDrops(x, vy){
  this.x = x;
  this.y = 0;
  this.width = 20;
  this.heigth = 20;
  this.vy = vy;
  this.value = 0
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
