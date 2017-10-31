function Bucket(){
  this.x = 350;
  this.y = 449;
  this.width = 60;
  this.heigth = 50;
  this.vx = 10;
  this.vy = 10;
  this.score = this.question()
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

Bucket.prototype.question = function(){
  op1 = Math.floor(Math.random() * 9) + 1;
  op2 = Math.floor(Math.random() * 9) + 1;
  operatorArray = [this._suma(op1, op2), this._resta(op1, op2)];
  iop = Math.floor(Math.random() * 2);
  text = operatorArray[iop];
    return text;
}

Bucket.prototype._suma = function(a, b){
  return a+b;
}

Bucket.prototype._resta = function(a, b){
  if(a < b){
    return b-a
  } else {
    return a-b;
  }
}
