console.log("Hello! Welcome to the Guessing Game!");

var randNumber = Math.floor(Math.random()*10)+1; //Gets a whole number including 1 and 10

var prompt = require ('prompt'); 
prompt.start();
prompt.get(['guess'], function(err, result){

    console.log('Your Guess was received');
    
    if (result.guess < randNumber){

     console.log('You are too low');

        if (result.guess > randNumber){

            console.log('You are too high');
        }

        if (result.guess == randNumber){

            console.log('You guessed right! You win!');
        }
     
    }
});

