function Bucket(){
  this.x = 350;
  this.y = 450;
  this.width = 60;
  this.height = 50;
  this.vx = 10;
  this.vy = 10;
  this.score = this.question();
  // this.Mathoperation = operatorArray;
}

Bucket.prototype.draw = function(){
  ctx.fillStyle = '#F0E68C';
ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.font = "20px Calibri";
  ctx.fillStyle = "black";
  ctx.textAlign = "center"; // Fill color of rectangle drawn
  ctx.fillText(this.score, this.x+30, this.y+32);
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
  value = operatorArray[iop];
    return value;
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

Bucket.prototype.collision = function (rainDrop){
  if((this.x-30) < rainDrop.x && rainDrop.x < (this.x+30)){
    if (rainDrop.y > 410) {
      rainDrop.y = this.height;
      console.log(rainDrop.value);// Valor de la gota.
      this.win(rainDrop);
      return true;
    }
  }
}
//Comprobar si ganaste la gota del resultado correcto con el del cubo
Bucket.prototype.win = function(rainDrop){
  if (rainDrop.value == this.score) {
      //return true;
      console.log("ACIERTO");
  } else {
    console.log("ERROR");
    //return false
  }
};
