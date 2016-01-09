//Counter for keeping the user's score
var scoreCounter = 0;
var user;
var q1 = document.getElementById('q1');
var res1 = document.getElementById('res1');
var q2 = document.getElementById('q2');
var res2 = document.getElementById('res2');
var q3 = document.getElementById('q3');
var res3 = document.getElementById('res3');
var q4 = document.getElementById('q4');
var res4 = document.getElementById('res4');
var q5 = document.getElementById('q5');
var res5 = document.getElementById('res5');
var score = document.getElementById('score');

function intro() {   //Asks user for their name
  user = prompt('Hello! Please provide your name...');
  console.log('The user\'s name is ' + user);
  //Introduction
  alert('Hi ' + user + ', welcome to Jeff\'s Amazingly Awesome Guessing Game! You will be prompted with questions requiring a yes or no response. Please answer \'yes\' with a Y or \'no\' with an N. Click OK to continue.');
}

function askQuestion() {
  var questions = [];
  questions[0] = ['Hey ' + user + ',' + ' is my favorite show \'How I Met Your Mother\'?', 'Y','Correct ' + user + '.' + ' It is the best sitcom ever made. End of discussion.', 'Wrong ' + user + '!!!!!' + ' You guessed incorrectly.  It is in fact my #1 favorite show.', res1 ]
  questions[1] = ['Hey ' + user + ',' + ' did I grow up in New York?', 'N', 'Correct ' + user + '.' + ' I actually grew up in Seattle.', 'Sorry ' + user + '.' + ' That is an incorrect answer. I have actually never been to New York.', res2 ];
  questions[2] = ['Hey ' + user + ',' + ' is my favorite food a banh mi sandwich?', 'Y', 'BINGO ' + user + '!' + ' I could eat banh mi sandwiches for every meal of every day. #foodgasm', 'So wrong I don\'t know where to begin ' + user + '.' + ' You should probably try one yourself and you\'ll know why it\'s my favorite sandwich.', res3];


  for (i=0; i < questions.length; i++){
    var userAnswer = prompt(questions[i][0]).toUpperCase();
    if ( userAnswer === 'YES' || userAnswer === 'YEAH' || userAnswer === 'YUP'){
      userAnswer = 'Y';
    } else if ( userAnswer === 'NO' || userAnswer === 'NOPE' || userAnswer === 'NAY'){
      userAnswer = 'N';
    }
    var res = questions[i][4];


    if (userAnswer === questions[i][1]){
      res.textContent = questions[i][2];
      res.className = 'correct';
      scoreCounter++;
    } else {
      res.textContent = questions[i][3];
      res.className = 'incorrect';
    }
  }
}

intro();
askQuestion();


//Prompts user with first question (Answer: Y).
// function question1() {
//   q1.textContent = 'Question 1: Hey ' + user + ',' + ' is my favorite show \'How I Met Your Mother\'?'
//   var response1 = prompt('Hey ' + user + ',' + ' is my favorite show \'How I Met Your Mother\'?');
//   console.log('The user\'s response for Question 1: ' + response1);
//
//
//   if(response1.toUpperCase() === 'Y' || response1.toUpperCase() === 'YES' || response1.toUpperCase() === 'YEAH' || response1.toUpperCase() === 'YUP') {
//     res1.textContent = 'Correct ' + user + '.' + ' It is the best sitcom ever made. End of discussion.';
//     scoreCounter ++;
//   } else if(response1.toUpperCase() === 'N' || response1.toUpperCase() === 'NO' || response1.toUpperCase() === 'NOPE' || response1.toUpperCase() === 'NAY') {
//     res1.textContent = 'Wrong ' + user + '!!!!!' + ' You guessed incorrectly.  It is in fact my #1 favorite show.';
//   } else{
//     res1.textContent = 'Invalid response. Moving on...';
//     }
// }

// //Prompts user with second question (Answer: N)
// function question2() {
//   q2.textContent = 'Question 2: Hey ' + user + ',' + ' did I grow up in New York?'
//   var response2 = prompt('Hey ' + user + ',' + ' did I grow up in New York?');
//   console.log('The user\'s response for Question 2: ' + response2);
//
//   if(response2.toUpperCase() === 'N' || response2.toUpperCase() === 'NO' || response2.toUpperCase() === 'NOPE' || response2.toUpperCase() === 'NAY') {
//     res2.textContent = 'Correct ' + user + '.' + ' I actually grew up in Seattle.';
//     scoreCounter ++;
//   } else if(response2.toUpperCase() === 'Y' || response2.toUpperCase() === 'YES' || response2.toUpperCase() === 'YEAH' || response2.toUpperCase() === 'YUP'){
//     res2.textContent = 'Sorry ' + user + '.' + ' That is an incorrect answer. I have actually never been to New York.';
//   } else {
//     res2.textContent = 'Invalid response. Moving on...';
//     }
// }
//
// //Prompts user with third question (Answer: Y)
// function question3() {
//   q3.textContent = 'Question 3: Hey ' + user + ',' + ' is my favorite food a banh mi sandwich?';
//   var response3 = prompt('Hey ' + user + ',' + ' is my favorite food a banh mi sandwich?');
//   console.log('The user\'s response for Question 3: ' + response3);
//
//   if(response3.toUpperCase() === 'Y' || response3.toUpperCase() === 'YES' || response3.toUpperCase() === 'YEAH' || response3.toUpperCase() === 'YUP') {
//     res3.textContent = 'BINGO ' + user + '!' + ' I could eat banh mi sandwiches for every meal of every day. #foodgasm';
//     scoreCounter ++;
//   } else if(response3.toUpperCase() === 'N' || response3.toUpperCase() === 'NO' || response3.toUpperCase() === 'NOPE' || response3.toUpperCase() === 'NAY'){
//     res3.textContent = 'So wrong I don\'t know where to begin ' + user + '.' + ' You should probably try one yourself and you\'ll know why it\'s my favorite sandwich.';
//   } else {
//     res3.textContent = 'Invalid response. Moving on...';
//   }
// }
//
//Prompts user with a fourth question which takes a numeric input and indicates to user whether guess was too high or too low (Answer: 4)
// function question4() {
//   q4.textContent = 'Question 4: ' + 'Hey ' + user + ',' + ' can you guess what my least favorite number is?';
//   var response4 = prompt('Hey ' + user + ',' + ' can you guess what my least favorite number is?');
//   console.log('The user\'s response for Question 4: ' + response4);
//     if(parseInt(response4) === 4) {
//       res4.textContent = user + ',' + ' you are correct and have earned one Jeff buck for your correct guess.';
//       scoreCounter ++;
//     }
//     else if(parseInt(response4) < 4) {
//       res4.textContent = 'Incorrect ' + user + '!' + ' Your guess was a worthy effort but is too low.';
//   } else if(parseInt(response4) > 4){
//       res4.textContent = 'Incorrect ' + user + '!' + ' Your guess was a worthy effort but is too high.';
//   } else{
//       res4.textContent = 'Invalid response. Moving on...';
//     }
// }

// //Prompts user with a fifth question which takes a numeric input (Answer: 8)
// function question5() {
//   q5.textContent = 'Question 5: ' + user + ',' + ' how many countries outside the U.S. have I visited?';
//   var response5 = prompt(user + ',' + ' how many countries outside the U.S. have I visited?');
//   while (response5 != 8) {
//     response5 = prompt('Wrong answer, please try again.');
//   }
//     res5.textContent = 'Boomshakalaka! You just won a million Jeff Bucks!';
//     scoreCounter ++;
//     console.log('The user\'s response for Question 5: ' + response5);
// }

//
// question1();
// question2();
// question3();
//question4();
// question5();
//Message to user with total of correct answers
 score.textContent = 'I\'m finished torturing you with questions (for now)...  Your total score is: ' + scoreCounter + ' out of 3. Thank you, come again!';
