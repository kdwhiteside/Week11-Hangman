//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
console.log("HANGMAN!!!")
var game = require('./game.js')
var theWord = game.theWord;
exports.wordFromMain = theWord;
// console.log(theWord)
var inquirer = require('inquirer')
var word = require('./word.js')
var display = require('./letter.js')

inquirer.prompt([
	{
		type: 'confirm',
		message: 'want to play???',
		name: 'confirm',
	}]).then(function(answer){
		if(answer.confirm == true){
			display.displayFirst();
			letterGuess();
		}else{
			console.log("Maybe Next Time!")
		}
	})

function letterGuess (){
				console.log("SOMEONE FROM CLASS!")
				console.log(display.blankWord)
				console.log("LETTERS GUESSED: " + word.lettersGuessed)
				inquirer.prompt([
						{
							type: 'input',
							message: 'Guess a letter!',
							name: 'letter',
						}
					]).then(function(answer){
							exports.letter = answer.letter.toUpperCase();
							word.test();
							if (display.blankWord.split(' ').join('') !== theWord) {
								letterGuess();
							}else{
								console.log("GAME OVER! YOU WIN!")
							}
						})
			}