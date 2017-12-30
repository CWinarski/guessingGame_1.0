console.log("Hello! Welcome to the Guessing Game!");

var randNumber = Math.floor(Math.random()*10)+1;
var prompt = require ('prompt');
prompt.start();
prompt.get(['guess'], function(err, result){

    console.log('Your Guess was received:');
    console.log(' Guess: ' + result.guess);

});