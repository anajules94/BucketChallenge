function Bucket(){
  this.x = 350;
  this.y = 420;
  this.width = 60;
  this.height = 50;
  this.operators = ['+', '-',];
  this.vx = 10;
  this.vy = 10;
  this.limit = 9;
  this.firstNumber = this.getRandomNumber();
  this.sectondNumber = this.getRandomNumber();
  this.operator = this.getRandomOperator();
  this.answer = this.getBucketAnswer();
  this.question = this.getBucketQuestion();
  this.image = new Image()
  this.image.src = './greenbucket.png'
}


Bucket.prototype.draw = function(){
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  ctx.font = "20px Calibri";
  ctx.fillStyle = "black";
  ctx.textAlign = "center"; // Fill color of rectangle drawn
  ctx.fillText(this.question, this.x+30, this.y+70);
}

Bucket.prototype.moveRigth = function(){
  this.x = this.x + 20;
  ctx.clearRect(0,0, 700, 500);
}

Bucket.prototype.moveLeft = function(){
  this.x = this.x - 20;
  ctx.clearRect(0,0, 700, 500);
}

Bucket.prototype.getRandomNumber = function() {
  return Math.floor(Math.random() * this.limit) + 1;
}

Bucket.prototype.getRandomOperator = function() {
  return this.operators[Math.floor(Math.random() * this.operators.length)]
}

Bucket.prototype.getBucketAnswer = function() {
  switch (this.operator) {
    case '+':
      return this.firstNumber + this.sectondNumber;
    case '-':
      return this.firstNumber - this.sectondNumber;
    case '*':
      return this.firstNumber * this.sectondNumber;
  }
}

Bucket.prototype.getBucketQuestion = function() {
  return this.firstNumber + this.operator + this.sectondNumber;
}


Bucket.prototype.collision = function (rainDrop){
  if((this.x-30) < rainDrop.x && rainDrop.x < (this.x+30)){
    if (rainDrop.y > 396) {
      rainDrop.y = this.height;
      this.win(rainDrop);
      return true;
    }
  }
}

//Comprobar si ganaste la gota del resultado correcto con el del cubo
Bucket.prototype.win = function(rainDrop){
  if (rainDrop.value == this.answer) {
    console.log("ACIERTO");
  } else {
    console.log("ERROR");
  }
};
