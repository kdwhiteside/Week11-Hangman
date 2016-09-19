//Your game.js file will randomly select a word for the player.
var words = ["TREVOR", "DARRELL", "DAN", "WALID", "SERGIO", "WILL"];
exports.theWord = words[Math.floor(Math.random()*words.length)];