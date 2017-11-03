function Bucket(){
  this.x = 350;
  this.y = 420;
  this.width = 60;
  this.height = 50;
  this.operators = ['+', '-',];
  this.vx = 10;
  this.vy = 10;
  this.limit = 9;
  this.error = 0;
  this.firstNumber = this.getRandomNumber();
  this.sectondNumber = this.getRandomNumber();
  this.checkIfNegative();
  this.operator = this.getRandomOperator();
  this.answer = this.getBucketAnswer();
  this.question = this.getBucketQuestion();
  this.image = new Image()
  this.image.src = './images/greenbucket.png'
}


Bucket.prototype.draw = function(){
  newGame.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  newGame.ctx.font = "20px Calibri";
  newGame.ctx.fillStyle = "white";
  newGame.ctx.textAlign = "center"; // Fill color of rectangle drawn
  newGame.ctx.fillText(this.question, this.x+30, this.y+70);
}

Bucket.prototype.moveRigth = function(){
  this.x = this.x + 20;
  if(this.x > 710){
    this.x = 0;
  }
  newGame.ctx.clearRect(0,0, 700, 500);
}

Bucket.prototype.moveLeft = function(){
  this.x = this.x - 20;
  if(this.x < -10){
    this.x = 700;
  }
  newGame.ctx.clearRect(0,0, 700, 500);
}

Bucket.prototype.getRandomNumber = function() {
  return Math.floor(Math.random() * this.limit) + 1;
}

Bucket.prototype.checkIfNegative = function() {
  if(this.firstNumber < this.sectondNumber) {
    var aux = this.firstNumber;
    this.firstNumber = this.sectondNumber;
    this.sectondNumber = aux;
  }
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
    if (rainDrop.y > 380) {
      rainDrop.y = this.height;
      this.win(rainDrop);
      return true;
    }
  }
}

//Comprobar si ganaste la gota del resultado correcto con el del cubo
Bucket.prototype.win = function(rainDrop){
  if (rainDrop.value == this.answer) {
    newGame.dropArray = [];
    newGame.score += 10;
  }
  if (newGame.lives > 0) {
      newGame.lives--;
  }
  if (newGame.lives = 0) {
      newgame.lives = "MUERTO"
  }
};
