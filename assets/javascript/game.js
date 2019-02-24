// Create Array of Possible Words
var wordArr = ["Flute", "Oboe", "Clarinet", "Bassoon", "Saxophone", "Trumpet", "Trombone", "Tuba", "Timpani", "Snare", "Cymbal", "Bass Drum", "Wood Block", "Triangle", "Tambourine", "Glockenspiel", "Xylophone", "Vibraphone", "Marimba", "Piano", "Celesta", "Organ", "Accordion", "Harp", "Violin", "Viola", "Cello", "Bass", "Guitar",
];

// Create a variable that picks a random word from the array
var word = wordArr[Math.floor(Math.random() * wordArr.length)];

// Loop Variable: Starts at 0 and finishes when length of word is met. Iterate increases by one for each loop. 
var answerArr = [];
for (var i = 0; i < word.length; i++) {
    answerArr[i] = "_";
}

// Create Variable that is equal to the length of the hidden word. This will tell the loop how many "_" characters to fill. 
var remLetters = word.length;

//GAME LOOP

// While loop that ends when the remaining letters are no longer greater than 0. Parent structure of code block. 
while (remLetters > 0) {
    // Displays the hidden word - need to switch from alert to printed on screen
    alert(answerArr.join(" "));

    // Creates a var that stores the guess input from player
    var guess = prompt("Guess a Letter");

    if (guess.length !== 1) {
        alert("Stop it with the not letters! Only letters - please.");

    } else {

        //update game state with guess. 
        // Create for-loop that steps through each letter of "word" var. 
        for (var j = 0; j < word.length; j++) {
            //Checks current letter against "guess" var.
            //If matching, use answerArr[j] = guess to update
            if (word[j] === guess) {
                answerArr[j] = guess;
                remLetters--;
            }
        }
    }
}

    // Reveal Answer - Win Alert
    alert(answerArr.join(" "));
    alert("You Win! The word was " + word);

