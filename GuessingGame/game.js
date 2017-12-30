console.log('Hello! Welcome to the Guessing Game!');
console.log('Please enter a number between (and including) 1 and 10');

var randNumber = Math.floor(Math.random()*10)+1; //Gets a whole number including 1 and 10
//var randNumber = 5; For testing the if loop 

var prompt = require ('prompt'); 
prompt.start();
prompt.get(['guess'], function(err, result){ // Was installed via npm install prompt

    console.log('Your Guess was received');

    if ((result.guess < 1) || (result.guess > 10)){

        console.log('Your guess is ouside the range of numbers you can pick!');

        } else if (result.guess < randNumber){

          console.log('You are too low');

        } else if (result.guess > randNumber){

          console.log('You are too high');

        } else if (result.guess == randNumber){

          console.log('You guessed right! You win!');
        }

        
});

