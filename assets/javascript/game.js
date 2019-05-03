// Create Array of Possible Words
var words = [
    "flute",
    "clarinet",
    "bassoon",
    "saxophone",
    "trumpet",
    "trombone",
    "tuba",
    "timpani",
    "snare",
    "drum",
    "marimba",
    "piano",
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

var g = document.getElementById("gif-player");


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
        wins++;
        document.getElementById("wintracker").innerHTML = wins;
        winFn();
        gameStart()
    } else if (guessesLeft === 0) {
        losses++;
        document.getElementById("losstracker").innerHTML = losses;
        g.src = "./assets/gifs/bb.gif";
        gameStart();
    }
};

// key listener

document.getElementById("begin").addEventListener("click", gameStart);


document.onkeypress = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    checkAnswer(userGuess);
    rounds();
};

// Win Function

const winFn = function () {
    let final = output.join("");

    if (final === randomWord) {
        // do this
        switch (final) {
            case "flute":
                g.src = "./assets/gifs/flute.gif";
                console.log("flute yay");
                break;
            case "clarinet":
                console.log("clarinet yay");
                g.src = "./assets/gifs/clarinet.gif";

                break;
            case "saxophone":
                console.log("saxophone yay");
                g.src = "./assets/gifs/sax.gif";

                break;
            case "trumpet":
                console.log("trumpet yay");
                g.src = "./assets/gifs/trumpet.gif";

                break;
            case "trombone":
                console.log("trombone");
                g.src = "./assets/gifs/trombone.gif";

                break;
            case "tuba":
                console.log("tuba");
                g.src = "./assets/gifs/tuba.gif";

                break;
            case "timpani":
                console.log("timpani yay");
                g.src = "./assets/gifs/timpani.gif";

                break;
            case "drum":
                console.log("drum yay");
                g.src = "./assets/gifs/drum.gif";

                break;
         
            case "marimba":
                console.log("marimba yay");
                g.src = "./assets/gifs/marimba.gif";

                break;
            case "piano":
                console.log("piano yay");
                g.src = "./assets/gifs/piano.gif";

                break;
            case "organ":
                console.log("organ yay");
                g.src = "./assets/gifs/organ.gif";

                break;
            case "accordion":
                console.log("accordion yay");
                g.src = "./assets/gifs/accordian.gif";

                break;
            case "harp":
                console.log("harp yay");
                g.src = "./assets/gifs/harp.gif";

                break;
            case "violin":
                console.log("violin yay");
                g.src = "./assets/gifs/violin.gif";

                break;
            case "cello":
                console.log("cello yay");
                g.src = "./assets/gifs/cello.gif";

                break;
            case "bass":
                console.log("bass yay");
                g.src = "./assets/gifs/bass.gif";

                break;
            case "guitar":
                console.log("guitar yay");
                g.src = "./assets/gifs/guitar.gif";

                break;
            case "snare":
                console.log("snare, baby!");
                g.src = "./assets/gifs/snare.gif";

            default:
                console.log("DEFAULT");
        }
    }
}