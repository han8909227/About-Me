
var askOne = prompt("Do you consider me as true developer? yes or no").toUpperCase()

if (askOne === "YES"){
  alert("Great! Let's test if you're right! ");
  console.log("a potential believer just arrived!");

} else if (askOne === "NO") {
  alert("really? Let's prove you wrong!");
  console.log("warning! he could be an alien !");

} else{
  alert("I need a yes or no please");
}



var askTwo = prompt("Do you find my code clean and organized in anyway? yes or no ").toUpperCase()

if (askTwo === "YES"){
  alert("You bet they are! ");
  console.log("The answer to question 2 is " + askTwo + ", organization skill proven!");

} else if (askTwo === "NO") {
  alert("Thank you for the advice!");
  console.log("The answer to question 2 is " + askTwo + ", he must've seem wrose codes before");

} else{
  alert("I need a yes or no please");
}


var askThree = prompt("Do you think I've created simple html text and have effectively used css & JS").toUpperCase()

if (askThree === "YES"){
  alert("Thanks! ");
  console.log("The answer to question 2 is " + askThree + ", coding skill proven!");

} else if (askThree === "NO") {
  alert("I see, let me improve on that");
  console.log("The answer to question 3 is " + askThree + ", I must improve in order to impress!");

} else{
  alert("I need a yes or no please");
}


var askFour = prompt("Are my a bug lover?").toUpperCase()
switch(askFour){
case 'YES':
  alert("No! not in both real and virtual world! ");
  console.log("The answer to question 2 is " + askFour + ", he must love bugs...");
  break;

case 'NO':
  alert("Yep, I am a debugger!");
  console.log("The answer to question 4 is " + askFour + ", he got it right!");
  break;

default:
  alert("I need a yes or no please");
  break; }


var askFive = prompt("Do you think I am ready to start my career as a software developer?").toUpperCase()
switch(askFive){
case 'YES':
  alert("Thank you! Please feel free to reach out for any career opportunity!");
  console.log("The answer to question 2 is " + askFour + ", omg I'm getting hired");
  break;

case 'NO':
  alert("Thanks, please leave a comment on how I can improve");
  console.log("The answer to question 4 is " + askFour + ", he got it right!");
  break;

default:
  alert("I need a yes or no please");
  break; }

var comment = prompt("Enter comment here: ")
console.log("The user's commend is: " + comment )






// switch(askOne){
//   case 'YES':
//     console.log("true html lover");
//     break;
//   case 'NO':
//     console.log("no love to html");
//     break;
//
//   default:
//     console.log("I need a yes or no from you ");
//     break;
// }
