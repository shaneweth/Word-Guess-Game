// Create Array of Possible Words
var wordArr = [
    "Flute",
    "Oboe",
    "Clarinet",
    "Bassoon",
    "Saxophone",
    "Trumpet",
    "Trombone",
    "Tuba",
    "Timpani",
    "Snare",
    "Cymbal",
    "Drum",
    "Triangle",
    "Tambourine",
    "Glockenspiel",
    "Xylophone",
    "Vibraphone",
    "Marimba",
    "Piano",
    "Celesta",
    "Organ",
    "Accordion",
    "Harp",
    "Violin",
    "Viola",
    "Cello",
    "Bass",
    "Guitar",
];

// Empty Variable to Store Randomly Chosen Word
var word = "";
var remWord = [];
var answerArr = 0;
var blaCor = [];
var letGuess = [];

// Counter Variables
var wins = 0;
var losses = 0;
var remGuess = 11;

// Function to Start Game

function Game() {

    //chooses random word from wordArr
    var word = wordArr[Math.floor(Math.random() * wordArr.length)];

    // Split the word pulled from list. Place letters in Array. Store in a separate variable. 
    remWord = word.split("");

    // Var to store length of word and represent in underscrolls. 
    answerArr = remWord.length;


    // Loop Variable: Starts at 0 and finishes when length of word is met. Iterate increases by one for each loop. 
    for (var i = 0; i < word.length; i++) {
        blaCor.push("_");
    }

    // Prints the "_" onto HTML 
    document.getElementById("cur-word").innerHTML = " " + blaCor.join(" ");

}

// reset Function: Resets the game when conditions met.
function reset() {
    remGuess = 11;
    letGuess = [];
    blaCor = [];
    Game()
}

// checkLet Function: Test user input against word variable. Tested by If / Else statements
function checkLet(letter) {
    var correctLet = false;
    // var is true when user input equals a letter entered. 
    for (var i = 0; i < answerArr; i++) {
        if (word[i] == letter) {
            correctLet = true;
        }
    }
    // if the correctLet value = false
    if (correctLet) {
        // For loop to test each letter
        for (var i = 0; i < answerArr; i++) {
            if (word[i] == letter) {
                blaCor[i] = letter;
            }
        }
    }
    else {
        letGuess.push(letter);
        remGuess--;
    }

}

//gameOver Function: displays win / loss number. Resets the game. 
function gameOver() {

    // Win
    if (remWord.toString() === blaCor.toString()) {
        wins++;
        reset()

        // add a function to diplay win graphic

        document.getElementById("win-track").innerHTML = " " + wins;

        // Lose
    } else if (remGuess === 0) {
        losses++;
        reset()
        document.getElementById("loss-track").innerHTML = " " + losses;
    }
    // display remGuess
    document.getElementById("cur-word").innerHTML = " " + blaCor.join(" ");
    document.getElementById("rem-guess").innerHTML = " " + remGuess;
}

// Game Start and Onkeyup functions

Game()

// Listen for onKeyUp. Add .toLowerCase in order to ignore caps. Add letter guessed to new variable. 
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    // check letter 
    checkLet(guesses)
    // win/lose
    gameOver();

    //display and store incorrectly guessed letters. 
    document.getElementById("let-guess").innerHTML = " " + letGuess.join(" ");
}
