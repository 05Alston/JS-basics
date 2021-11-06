var readlineSync = require("readline-sync");
const chalk = require("chalk");

// for(var i=0;i<10;i++){console.log("Alston");}

// var animals=["cat","dog","mouse","sheep","wolf","cow"]
// console.log(animals[0]+"\n"+animals[animals.length/2]+"\n"+animals //undefined when odd no of elements
// [animals.length-1]);
// for(var i=0; i<animals.length;i++){console.log(animals[i]);}

// // Print * pattern
// for(var i=0; i<10; i++)
// {
  
// var pattern="";
//   for(var j=0;j<=i; j++)
//   {
//     pattern += "* ";
//   }
//       console.log(pattern);
// }



var name = readlineSync.question("What is your name?");
console.log("Welcome " + chalk.blue.bold(name)+", Let's see how well you know me.");
var score = 0;

var questionData =[
  question1={question:"Where do I live?",answer:"vikhroli",number:"1. ",options:['Parel', 'Ghatkopar', 'Vikhroli', 'Bandra', 'Chembur']},
  question2={question:"If I were an animal, what would I be?",answer:"Sloth",number:"2. ",options:['Lion', 'Elephant', 'Sloth', 'Giraffe', 'Hippo']},
  question3={question:"What is my favourite fast food outlet?",answer:"Pizza Hut",number:"3. ",options:['KFC', 'McDonald\'s', 'Dominos', 'Pizza Hut', 'other..']},
  question4={question:"What's my favourite part of the day?",answer:"Afternoon",number:"4. ",options:['Afternoon', 'Morning','Evening','Night','Noon']}
  ];

for( var i=0;i<questionData.length;i++)
{
  console.log(questionData[i].number+questionData[i].question);
  ans = readlineSync.keyInSelect(questionData[i].options, 'Which animal?');
  checkAnswer(questionData[i].answer,ans);
}


console.log(chalk.grey("--------------------------"));
console.log(name+", Your final score is "+chalk.blueBright(score));
console.log(chalk.grey("--------------------------"));


function checkAnswer(answer, input) {
  if (input == answer) {
    console.log("You're "+chalk.green("right!"));
    score++;
  }
  else{
    console.log("You are "+chalk.red("wrong!"));
  }
  console.log("Your current score is " + chalk.yellow(score));
};



  