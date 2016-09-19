//word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var main = require('./main.js');
var letter = require('./letter.js');
exports.lettersGuessed = [];
exports.test = function(){
		// console.log(main.wordFromMain + " from word.js");
		console.log("YOU GUESSED: " + main.letter)
		var wordArray = main.wordFromMain.split('')
		// console.log(wordArray)
		for (var i = 0; i < wordArray.length; i++) {
			if(wordArray[i] == main.letter){	
				console.log("CORRECT!");
				exports.lettersGuessed.push(main.letter)
				letter.changeWord();
			}
		}
	};
