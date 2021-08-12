var readlinesync = require("readline-sync");
var score = 0;

var topScorer = [{name : "jayant", score : 3},
                {name : "ram", score : 2}]

function greet(){
  var userName = readlinesync.question("What is your name? ")
  console.log("Hey!", userName, "Let's play Do You Know Me(Jayesh)?");
  console.log("----------------------------------");
}

function ask(question, answer, choice){
  var userAnswer = readlinesync.keyInSelect(choice, question);
  if (userAnswer === answer){
    console.log("Yay! you are right.");
    score = score + 1;
  }
  else{
    console.log("Nah! you are wrong.");
  }
  console.log("Your score is ", score);
}

var questions = [
  {question :"favourite TV series?", 
  choice : ["GOT", "FRIENDS", "Breaking Bad"],
  answer : 1},
  {question : "favourite Sports?",
  choice : ["Cricket", "Football", "Badminton"],
  answer : 2},
  {question : "My Hobby?",
  choice : ["Cooking", "Singing", "Dancing"],
  answer : 0}];

function play(){
  for (var i=0; i<questions.length; i++){

    ask(questions[i]["question"], questions[i]["answer"], questions[i]["choice"]);
  }
}

function scores(){
  console.log("----------------------------------");
  console.log("Hey! your score is => ", score);
  console.log("Below are the top scorers of this game. If you defeated them ping me I'll update it.");
  topScorer.map(score => console.log(score.name, " : ", score.score));
}


greet()
play()
scores()
