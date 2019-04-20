// Create Array of Possible Words
var words = [
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

var randomWord = "";
var letters = [];
var output = [];
var wrongLetters = [];

var num = 0;
var guessesLeft = 10;
var losses = 0;
var wins = 0;

// Empty Variable to Store Randomly Chosen Word

var word = words[Math.floor(Math.random() * words.length)];

function gameStart() {
    randomWord = word[Math.floor(Math.random() * word.length)];
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
        for(var j = 0; j < num; j++) {
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
    document.getElementById("letters-guessed").innerHTML = wrongLetters;
    document.getElementById("currentword").innerHTML = output.join(" ");

    if(letters.toString() === output.toString()) {
        wins++
        document.getElementById("wintracker").innerHTML = wins;
        play();
    } else if (guessesLeft === 0) {
        losses++
        document.getElementById("losses").innerHTML = losses;
        gameStart();
    }
};

// key listener

document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    checkAnswer(userGuess);
    rounds();
};

