//variables
var wordChoices = ["claptrap", "pandora", "siren", "handsome jack", "sanctuary", "mechromancer", "catch a ride", "angel", "bandits"]
var guessLeft = 10
var wins =0
var guessedLetters
var randomSelection
var correctCharacter = 0;
var correctGuess

randomWord();


//determines what happens on click
document.onkeyup = function(event) {
    var characterArray = randomSelection.split('');
    console.log(characterArray);
    var keyPressed = event.key.toLowerCase();
    console.log(keyPressed);

    for (i=0; i<characterArray.length; i++){
    
     if (keyPressed === characterArray[i]){
         var matchingLetter = document.getElementById('line-' + i);
         matchingLetter.innerHTML = keyPressed;

        correctCharacter++;
        var correctGuess = true
     } 

    }

    if (correctGuess != true){
        //if guessed previously don't decrement add to array of guessed letters 
        guessLeft--;
        console.log(guessLeft)
    }
    console.log(correctCharacter);
    if(correctCharacter === characterArray.length){
        correctCharacter = 0;
        console.log('win');
        wins++;
        var d1 = document.getElementById('randomWord');
        d1.innerHTML = "";
        randomWord();
        var winTally = document.getElementById('wins');
        winTally.innerHTML = wins;
    }
//if (isAlpha(event.key)) {
//    checkForLetter(event.key.toLowerCase())
//}

    correctGuess = false;
}

function randomWord() {
    //picks a random word
    randomSelection = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    console.log(randomSelection);

    for (i=0; i<randomSelection.length; i++){

        var d1 = document.getElementById('randomWord');
        d1.insertAdjacentHTML('beforeend', '<span id="line-' + i + '" class="character-line">_</span>');
    }
}

//string.split (split each word in an array into it's own array loop through to see if the letter typed is in that array)

