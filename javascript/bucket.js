function Bucket(){
  this.x = 350;
  this.y = 449;
  this.width = 60;
  this.heigth = 50;
  this.vx = 10;
  this.vy = 10;
  this.score = 0
}

Bucket.prototype.draw = function(){
  ctx.fillStyle = '#F0E68C'; // Fill color of rectangle drawn
  ctx.fillRect(this.x, this.y, this.width, this.heigth);
}

Bucket.prototype.moveRigth = function(){
  this.x = this.x + 20;
  ctx.clearRect(0,0, 700, 500);
}

Bucket.prototype.moveLeft = function(){
  this.x = this.x - 20;
  ctx.clearRect(0,0, 700, 500);
}
