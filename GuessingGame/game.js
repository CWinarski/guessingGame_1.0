console.log("Hello! Welcome to the Guessing Game!");

var randomNumber = Math.floor(Math.random() * 10) + 1;
var userNumber = prompt("Please enter your guess:", "");

if (userNumber < randomNumber) {

	console.log("Too Low!");
	
	if (userNumber > randomNumber) {
	console.log("Too High!");
	}
	
	if (userNumber == randomNumber){
	console.log("You are correct! You Win!");
	}
}
