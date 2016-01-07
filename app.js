//Counter for keeping the user's score
var scoreCounter = 0;
var user;

function name() {   //Asks user for their name
  user = prompt('Hello! Please provide your name...');
  console.log('The user\'s name is ' + user);
  //Introduction
  alert('Hi ' + user + ', welcome to Jeff\'s Amazingly Awesome Guessing Game! You will be prompted with questions requiring a yes or no response. Please answer \'yes\' with a Y or \'no\' with an N. Click OK to continue.');
}

function question1() {
  //Prompts user with first question (Answer: Y).
  var response1 = prompt('Hey ' + user + ',' + ' is my favorite show \'How I Met Your Mother\'?');
  console.log('The user\'s response for Question 1: ' + response1);

  if(response1.toUpperCase() === 'Y' || response1.toUpperCase() === 'YES' || response1.toUpperCase() === 'YEAH' || response1.toUpperCase() === 'YUP') {
    alert('Correct ' + user + '.' + ' It is the best sitcom ever made. End of discussion.');
    scoreCounter ++;
  } else if(response1.toUpperCase() === 'N' || response1.toUpperCase() === 'NO' || response1.toUpperCase() === 'NOPE' || response1.toUpperCase() === 'NAY') {
    alert('Wrong ' + user + '!!!!!' + ' You guessed incorrectly.  It is in fact my #1 favorite show.');
  } else{
    alert('Invalid response. Moving on...');
    }
}

function question2() {
  //Prompts user with second question (Answer: N)
  var response2 = prompt('Hey ' + user + ',' + ' did I grow up in New York?');
  console.log('The user\'s response for Question 2: ' + response2);

  if(response2.toUpperCase() === 'N' || response2.toUpperCase() === 'NO' || response2.toUpperCase() === 'NOPE' || response2.toUpperCase() === 'NAY') {
    alert('Correct ' + user + '.' + ' I actually grew up in Seattle.');
    scoreCounter ++;
  } else if(response2.toUpperCase() === 'Y' || response2.toUpperCase() === 'YES' || response2.toUpperCase() === 'YEAH' || response2.toUpperCase() === 'YUP'){
    alert('Sorry ' + user + '.' + ' That is an incorrect answer. I have actually never been to New York.');
  } else{
    alert('Invalid response. Moving on...');
    }
}

function question3() {
  //Prompts user with third question (Answer: Y)
  var response3 = prompt('Hey ' + user + ',' + ' is my favorite food a banh mi sandwich?');
  console.log('The user\'s response for Question 3: ' + response3);

  if(response3.toUpperCase() === 'Y' || response3.toUpperCase() === 'YES' || response3.toUpperCase() === 'YEAH' || response3.toUpperCase() === 'YUP') {
    alert('BINGO ' + user + '!' + ' I could eat banh mi sandwiches for every meal of every day. #foodgasm');
    scoreCounter ++;
  } else if(response3.toUpperCase() === 'N' || response3.toUpperCase() === 'NO' || response3.toUpperCase() === 'NOPE' || response3.toUpperCase() === 'NAY'){
    alert('So wrong I don\'t know where to begin ' + user + '.' + ' You should probably try one yourself and you\'ll know why it\'s my favorite sandwich.');
  } else {
    alert('Invalid response. Moving on...');
  }
}

function question4() {
  //Prompts user with a fourth question which takes a numeric input and indicates to user whether guess was too high or too low (Answer: 4)
  var response4 = prompt('Hey ' + user + ',' + ' can you guess what my least favorite number is?');
  console.log('The user\'s response for Question 4: ' + response4);
    if(parseInt(response4) === 4) {
      alert(user + ',' + ' you are correct and have earned one Jeff buck for your correct guess.')
      scoreCounter ++;
    }
    else if(parseInt(response4) < 4) {
    alert('Incorrect ' + user + '!' + ' Your guess was a worthy effort but is too low.');
  } else if(parseInt(response4) > 4){
    alert('Incorrect ' + user + '!' + ' Your guess was a worthy effort but is too high.');
  } else{
    alert('Invalid response. Moving on...');
    }
}

function question5() {
  //Prompts user with a fifth question which takes a numeric input (Answer: 8)
  var response5 = prompt(user + ',' + ' how many countries outside the U.S. have I visited?');
  while (response5 != 8) {
    response5 = prompt('Wrong answer, please try again.');
  }
    alert('Boomshakalaka! You just won a million Jeff Bucks!');
    scoreCounter ++;
    console.log('The user\'s response for Question 5: ' + response5);
}

intro();
question1();
question2();
question3();
question4();
question5();
//Message to user with total of correct answers
alert('I\'m finished torturing you with questions (for now)...  Your total score is: ' + scoreCounter + '. Thank you, come again!');
