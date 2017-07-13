'use strict';

var totalRight = 0;
//start of game

//question 1
var question1 = function(){
  var askOne = prompt('Do you think I like dogs?').toUpperCase()
  if (askOne === 'YES' || 'Y'){
    alert('I love dogzzzz !');
  console.log('dog lovers');
  totalRight += 1;

} else if (askOne === 'NO' || 'N') {
  alert('really? Who doesn\'t like dogzzz!');
  console.log('warning! he could be an alien !');

} else{
  alert('I need a yes or no please');
}}


//question 2
var question2 = function(){
var askTwo = prompt('Do you find my code clean and organized? ').toUpperCase()
if (askTwo === 'YES' || 'Y'){
  alert('You bet they are! ');
  console.log('The answer to question 2 is ' + askTwo );
  totalRight += 1;

} else if (askTwo === 'NO' || 'N') {
  alert('You must have seen worse !!');
  console.log('The answer to question 2 is ' + askTwo );

} else{
  alert('I need a yes or no please');
}}


//question 3
var question3 = function(){
var askThree = prompt('Do you think I can swim?').toUpperCase()
if (askThree === 'YES' || 'Y'){
  alert('I drink like a fish when I go swim... ');
  console.log('The anstwer to question 2 is ' + askThree );

} else if (askThree === 'NO' || 'N') {
  alert('That is correct');
  console.log('The answer to question 3 is ' + askThree );
  totalRight += 1;

} else{
  alert('I need a yes or no please');
}}


//question 4
var question4 = function(){
var askFour = prompt('Are my a bug lover?').toUpperCase()
if(askFour === 'YES' || 'Y'){
  alert('No! not in both real and virtual world! ');
  console.log('The answer to question 2 is ' + askFour );

} else if (askFour === 'NO' || 'N'){
  alert('Yep, I am a debugger!');
  console.log('The answer to question 4 is ' + askFour );
  totalRight += 1;

} else{
  alert('I need a yes or no please');
}}



//question 5
var question5 = function(){
var askFive = prompt('Do you think I have traveled to China before?').toUpperCase()
if(askFive === 'YES' || 'Y'){
  alert('Of course I was born there ');
  console.log('The answer to question 5 is ' + askFive );
  totalRight += 1;

} else if (askFive === 'NO' || 'N'){
  alert('I have tried Panda Express in China');
  console.log('The answer to question 5 is ' + askFive );

} else {
  alert('I need a yes or no please');
}}

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
}}

question1();
question2();
question3();
question4();
question5();
question6();
question7();

// number of right response
if (totalRight >= 5){
  alert('Congradulation! You got ' + totalRight + '/7 questions right!!')

} else{
  alert('Oh no! You only got ' + totalRight + '/7 questions right')

}
