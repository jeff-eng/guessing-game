//Asks user for their name
var user = prompt('Hello! Please provide your name...');
console.log('The user\'s name is ' + user);

//Introduction
alert('Hi ' + user + ', welcome to my guessing game. You will be prompted with questions requiring a yes or no response. Please answer \'yes\' with a Y or \'no\' with an N. Click OK to continue.');

//Prompts user with first question (Answer: Y)
var response1 = prompt(user + ',' + ' is my favorite show \'How I Met Your Mother\'?');
console.log('The user\'s response for Question 1: ' + response1);

if(response1 === 'Y') {
  alert('Correct ' + user + '.' + ' It is the best sitcom ever made. End of discussion.');
} else if(response1 === 'N'){
  alert('Wrong ' + user + '!!!!!' + ' You guessed incorrectly.  It is in fact my #1 favorite show.');
} else{
  alert('Invalid response.');
  }

//Prompts user with second question (Answer: N)
var response2 = prompt(user + ',' + ' did I grow up in New York?');
console.log('The user\'s response for Question 2: ' + response2);

if(response2 === 'N') {
  alert('Correct ' + user + '.' + ' I actually grew up in Seattle.');
} else if(response2 === 'Y'){
  alert('Sorry ' + user + '.' + ' That is an incorrect answer. I have actually never been to New York.');
} else{
  alert('Invalid response.');
  }

//Prompts user with third question (Answer: Y)
var response3 = prompt(user + ',' + ' is my favorite food a banh mi sandwich?');
console.log('The user\'s response for Question 3: ' + response3);

if(response3 === 'Y') {
  alert('BINGO ' + user + '!' + ' I could eat banh mi sandwiches for every meal of every day. #foodgasm');
} else if(response3 === 'N'){
  alert('So wrong I don\'t know where to begin ' + user + '.' + ' You should probably try one yourself and you\'ll know why it\'s my favorite sandwich.');
} else{
  alert('Invalid response.');
  }

//Prompts user with fourth question which takes a numeric input (Answer: 8)
var response4 = prompt(user + ',' + ' how many countries outside the U.S. have I visited?');
while (response4 != 8) {
  response4 = prompt('How many countries outside the U.S. have I visited?');
}
  alert('Boomshakalaka! You won a million Jeff Bucks!');
  console.log('The user\'s response for Question 4: ' + response4);
