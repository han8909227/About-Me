'use strict';

var totalRight = 0;
//start of game

//question 1
var questions = ['Do you think I like dogs?','Do you find my code clean and organized?', 'Do you think I can swim?', 'Am I a bug lover?', 'Do you think I have traveled to China before?'];
var fullAnswers = ['YES', 'YES', 'NO', 'NO', 'YES'];
var shortAnswers = ['Y', 'Y', 'N', 'N', 'Y'];
var alertCorrect = ['I love dogzzzz !', 'You bet they are! ', 'No, that is correct', 'Right! Not digitally or in the real world!', 'Right! I was born there!']
var alertWrong = ['really? Who doesn\'t like dogzzz!', 'You must have seen worse !!', 'I drink like a fish so nooo', 'No way!', 'Wrong! I was born there fool.']

var startQuestions = function (){

for(var i = 0; i < questions.length; i++){

  var askOne = prompt(questions[i]).toUpperCase()
  if (askOne === fullAnswers[i] || askOne === shortAnswers[i]){

    alert(alertCorrect[i]);

    totalRight += 1;

} else if (askOne !== fullAnswers[i] || askOne !== shortAnswers[i]){
  alert(alertWrong[i]);

} else{
  alert('I need a yes or no please');
}}};

startQuestions();

if (totalRight >= 5){
  alert('Congradulation! You got ' + totalRight + '/5 questions right!!')

} else{
  alert('Oh no! You only got ' + totalRight + '/5 questions right')
}


//question 6
var question6 = function(){

var myNumber = 8;
var exitVariable = true;
var userArray = [];
var trailLeft = 4;

while (userArray.length < 4 && exitVariable) {
  var prediction = parseInt(prompt('My lucky number is between 1 and 20. What is it?'));
    if(prediction === myNumber){
        alert('That\'s Correct! ' + myNumber + ' is my luck number!!');
        exitVariable = false;
        totalRight += 1;

    } else if(prediction > myNumber) {
        userArray.push(prediction);
        trailLeft -= 1;
        alert('Too high!');
        alert('You got ' + trailLeft + ' chances left!');

    } else{
      userArray.push(prediction);
      trailLeft -= 1;
      alert('Too low!');
      alert('You got ' + trailLeft + ' chances left!');

    }
}

if (exitVariable){
  alert('Too bad you ran out of chances, my lucky number is 8 !');
  console.log(userArray);
}}



//question 7
var question7 = function(){

var mySport = ['table tennis','basketball'];
var userSport = [];
var exitSport = true;
var chanceLeft = 6;

while(userSport.length < 6 && exitSport){
  var predictSport = prompt('What do you think my favorite sport is ?').toLowerCase();
  if(predictSport === mySport[0] || predictSport === mySport[1]){
    alert('That is correct! ' + predictSport + ' is one of my favorite sports.');
    alert('My favorite sports are: ' + mySport);
    exitSport = false;
    totalRight += 1;

  } else{
    userSport.push(predictSport);
    chanceLeft -= 1;
    alert('Not exactly! You got ' + chanceLeft + ' chances left!');
  }

}

  if (exitSport){
    alert('You ran out of chances. My favorite sports are table tennis and basketball!');
  }};


question6();
question7();

// number of right response
if (totalRight >= 5){
  alert('Congradulation! You got ' + totalRight + '/7 questions right!!')

} else{
  alert('Oh no! You only got ' + totalRight + '/7 questions right')

}
