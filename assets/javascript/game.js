// Create Array of Possible Words
var words = 
[
    "flute",
    "clarinet",
    "bassoon",
    "saxophone",
    "trumpet",
    "trombone",
    "tuba",
    "timpani",
    "snare",
    "cymbal",
    "drum",
    "glockenspiel",
    "marimba",
    "piano",
    "celesta",
    "organ",
    "accordion",
    "harp",
    "violin",
    "cello",
    "bass",
    "guitar",
];

var randomWord = "";
var letters = [];
var output = [];
var wrongLetters = [];

var num = 0;
var guessesLeft = 10;
var losses = 0;
var wins = 0;

// Empty Variable to Store Randomly Chosen Word


function gameStart() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    letters = randomWord.split("");
    num = letters.length;

    //  console.log(num);
    //  console.log(letters);
    //  console.log(randomWord)

    guessesLeft = 10;
    wrongLetters = [];
    output = [];

    for (var i = 0; i < num; i++) {
        output.push("_")
        console.log(output);
    }

    document.getElementById("currentword").innerHTML = output.join(" ");
    document.getElementById("wintracker").innerHTML = wins;
    document.getElementById("losstracker").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;

};

function checkAnswer(letter) {
    var letterInWord = false;

    for (var j = 0; j < num; j++) {

        if (letter === randomWord[j]) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < num; j++) {
            if (randomWord[j] === letter) {
                output[j] = letter;
                console.log(output)
            }
        }
    } else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
};

gameStart();

function rounds() {
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("letters-guessed").innerHTML = wrongLetters.join(" ");
    document.getElementById("currentword").innerHTML = output.join(" ");

    if (letters.toString() === output.toString()) {
        wins++
        document.getElementById("wintracker").innerHTML = wins;
        gameStart()
    } else if (guessesLeft === 0) {
        losses++
        document.getElementById("losstracker").innerHTML = losses;
        gameStart();
    }
};

// key listener

document.onkeypress = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    checkAnswer(userGuess);
    rounds();
};