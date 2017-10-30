function RainDrops(x, vy){
  this.x = x;
  this.y = 0;
  this.radius = 10;
  this.width = 20;
  this.heigth = 20;
  this.vy = vy;
  this.alive = true; 
  this.value = 0
}

RainDrops.prototype.draw = function (){
   ctx.beginPath();
   ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
   ctx.closePath();
   ctx.fillStyle = 'white';
   ctx.fill();
}

RainDrops.prototype.drop = function (){
  this.y += this.vy;
}
