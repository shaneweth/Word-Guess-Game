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

// Empty Variable to Store Randomly Chosen Word

var word = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

// Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

// GAME Functions

function Game() {
let word = words[Math.floor(Math.random() * words.length)];

// Set an array for the letters

lettersOfWord = word.split("");

// store length of the word in blanks 
blanks = lettersOfWord.length;

// Loop to iterate "word" var and push blanks into array
for(var i = 0; i < blanks; i++) {
    blanksAndCorrect.push("_");
}

// Displaying the "_" in HTML
document.getElementById("currentword").innerHTML = " " + blanksAndCorrect.join(" ");

// testing through the console.log
console.log(word);
console.log(lettersOfWord);
console.log(blanks);
console.log(blanksAndCorrect)
}

Game();

// RESET Function

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

// LETTER CHECK

function checkLetters(letter) {
    
    // If the guessed letter is = to a letter in the word array
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (word[i] === letter) {
            letterInWord = true;
        }
    }
    // If the guessed letter is != to a letter in the word array
        if (letterInWord) {

            for (var i = 0; i < blanks; i++) {
                if (word[i] === letter) {
                    blanksAndCorrect[i] = letter;
                }
            }
        }

        // else use .push() to add the incorrect guess in the incorrect guesses section. Decrement remaining guesses by one.
} else {
    wrongGuess.push(letter);
    guessesRemaining--;
}
console.log(blanksAndCorrect);
}
