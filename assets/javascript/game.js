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


var word = words[Math.floor(Math.random() * words.length)];

// Answer Array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}

// create variable for tracking letters that remain to be guessed
var remainingLetters = word.length;

// ***GAME LOOP***

while (remainingLetters > 0) {
    // Player Progress
    var el = document.getElementById("currentword");
    el.innerHTML = answerArray.join(" ");

    // guess from player

    var guess = prompt("guess a letter");
    if (guess === null) {
        // Exit Game Loop
        break;
    } else if (guess.length !== 1) {
        alert("Please Enter a Single Letter")
    } else {
        // Update Guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

