var yourScore = document.getElementById('yourScore');
yourScore.innerHTML = 0; 
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  userScore.innerHTML = numberToAdd + currentScore;
}

var green = document.getElementById("green");

var orange = document.getElementById("orange");

var blue = document.getElementById("blue");




red.addEventListener('click', function() {
  
  addToScore(this.value);
  checkUserScore();
});



green.addEventListener('click', function() {
  
  addToScore(this.value);
  checkUserScore();
});

orange.addEventListener('click', function() {

  addToScore(this.value);
  checkUsererScore();
});

blue.addEventListener('click', function() {
  
  addToScore(this.value);
  checkUserScore();
});

function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function showUserScore() {
  var userChoice = parseInt(yourScore.innerHTML);
  var targetNum = parseInt(targetScore.innerHTML);
  if (UserChoice === targetNum) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
  function resetScore() {
    if (alert === ("you win!") resetScore();
   }   else if (alert === ("you lose") resetScore();)
  
}

console.log(getRandomValue(10, 4));