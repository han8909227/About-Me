//
// var askOne = prompt("Do you consider me as true developer? yes or no").toUpperCase()
//
// if (askOne === "YES"){
//   alert("Great! Let's test if you're right! ");
//   console.log("a potential believer just arrived!");
//
// } else if (askOne === "NO") {
//   alert("really? Let's prove you wrong!");
//   console.log("warning! he could be an alien !");
//
// } else{
//   alert("I need a yes or no please");
// }
//
//
//
// var askTwo = prompt("Do you find my code clean and organized in anyway? yes or no ").toUpperCase()
//
// if (askTwo === "YES"){
//   alert("You bet they are! ");
//   console.log("The answer to question 2 is " + askTwo + ", organization skill proven!");
//
// } else if (askTwo === "NO") {
//   alert("Thank you for the advice!");
//   console.log("The answer to question 2 is " + askTwo + ", he must've seem wrose codes before");
//
// } else{
//   alert("I need a yes or no please");
// }
//
//
// var askThree = prompt("Do you think I've created simple html text and have effectively used css & JS").toUpperCase()
//
// if (askThree === "YES"){
//   alert("Thanks! ");
//   console.log("The answer to question 2 is " + askThree + ", coding skill proven!");
//
// } else if (askThree === "NO") {
//   alert("I see, let me improve on that");
//   console.log("The answer to question 3 is " + askThree + ", I must improve in order to impress!");
//
// } else{
//   alert("I need a yes or no please");
// }
//
//
// var askFour = prompt("Are my a bug lover?").toUpperCase()
// switch(askFour){
// case 'YES':
//   alert("No! not in both real and virtual world! ");
//   console.log("The answer to question 2 is " + askFour + ", he must love bugs...");
//   break;
//
// case 'NO':
//   alert("Yep, I am a debugger!");
//   console.log("The answer to question 4 is " + askFour + ", he got it right!");
//   break;
//
// default:
//   alert("I need a yes or no please");
//   break; }
//
//
// var askFive = prompt("Do you think I am ready to start my career as a software developer?").toUpperCase()
// switch(askFive){
// case 'YES':
//   alert("Thank you! Please feel free to reach out for any career opportunity!");
//   console.log("The answer to question 2 is " + askFour + ", omg I'm getting hired");
//   break;
//
// case 'NO':
//   alert("Thanks, please leave a comment on how I can improve");
//   console.log("The answer to question 4 is " + askFour + ", he got it right!");
//   break;
//
// default:
//   alert("I need a yes or no please");
//   break; }
//
// var comment = prompt("Enter comment here: ")
// console.log("The user's commend is: " + comment )
//
//
// var userResponse = [];
// var chanceLeft = 4;
//
// var askSixTxt = 'Guess again, 1-20. ';
//
//
// var askSix = "Guess a number from 1-20";
// var askSixT2 = askSixTxt + ' You got ' + chanceLeft + ' chances left!';
// var askSixT3 = askSixTxt + ' You got '+ chanceLeft + ' chances left!';
// var askSixT4 = askSixTxt + ' You got ' + chanceLeft + ' chance left!';
//
//
//

var myNumber = 8;
var prediction = prompt("I'm thinking of a number between 1 and 20. What is it?");
var exitVariable = true;
var userArray = [];
var trailLeft = 4 - userArray.length;

while (userArray.length < 4 && exitVariable) {
    if(prediction === myNumber){
        alert("That's Correct!" + myNumber + " is my luck number!!");
        exitVariable = false;
    }else if (prediction > myNumber) {
        userArray.push(prediction);
        prediction = prompt("I was not thinking " + prediction + ". It's too high. Guess Again");
        alert("You got " + trailLeft + " chances left!");

    } else{
      userArray.push(prediction);
      prediction = prompt("I was not thinking " + prediction + ". It's too low. Guess again");
      alert("You got " + trailLeft + " chances left!");

    }
}

if (exitVariable){
  alert("Too bad you ran out of chances, my lucky number is 8 !");


}



//
// while(userResponse.length < 5){
//   prompt(askSix);
//   if (askSix >= 10){
//     alert('Your number is too high!');
//     chanceLeft -- ;
//     userResponse.push(askSix);
//
//     prompt(askSixT2);
//     if (askSixT2 >= 10){
//       alert('Too high again!');
//       chanceLeft --;
//       userResponse.push(askSixT2);
//
//       prompt(askSixT3);
//       if(askSixT3 >= 10){
//         alert('Too high man!')
//         chanceLeft --;
//         userResponse.push(askSixT3);
//
//         prompt(askSixT4);
//         if(askSixT4 >= 10){
//           alert('You used up all chances! Goodbye!')
//           chanceLeft --;
//           userResponse.push(askSixT4);
//
//         }
//       }
//     }
//   } else if(askSix < 9){
//     alert('Your number is too low');
//
//
//   } else{
//     alert('You got it right!');
//     alert('9 is my lucky number');
//     numAttempt = 5;
//
//   }
//
// console.log(userResponse);
//
// }
