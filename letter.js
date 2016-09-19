//letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
var main = require('./main.js');
var word = require('./word.js');


var lettersGuessed = word.lettersGuessed;

var theWord = main.wordFromMain;
originalWordArray = theWord.split('')
// console.log(theWord + "theWord from letter.js");
wordArray = theWord.split('');
exports.displayFirst = function(){
		for (var i = 0; i < wordArray.length; i++) {
			wordArray[i] = '_';
		}
	exports.blankWord = wordArray.join(" ");
}

exports.changeWord = function () {
	var lettersGuessed = word.lettersGuessed;
	// console.log("LETTERS GUESSED: " + lettersGuessed)
	for (var i = 0; i < wordArray.length; i++) {
		for (var j = 0; j < lettersGuessed.length; j++) {
			if(lettersGuessed[j] == originalWordArray[i]){
				wordArray[i] = lettersGuessed[j]
			}
		}
				
	}
	exports.blankWord = wordArray.join(" ");
}


