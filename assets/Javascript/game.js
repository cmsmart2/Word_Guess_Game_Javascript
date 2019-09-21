//variables
var wordChoices = ["claptrap", "pandora", "siren", "sanctuary", "mechromancer","angel", "bandits"]
var wins =0
var guessedLetter 
var randomSelection
var correctCharacter = 0;
var correctGuess
var guessLeft = 10
var letters =[] 
randomWord();




//determines what happens on click
document.onkeyup = function(event) {    
//splits randomly selected word into an array of letters
    var characterArray = randomSelection.split('');
    console.log(characterArray);
    var keyPressed = event.key.toLowerCase();
    console.log(keyPressed); 
    
// loop through the random word

    for (i=0; i<characterArray.length; i++){
        
 // adds pressed key to line if it is a correct letter   
     if (keyPressed === characterArray[i]){
         var matchingLetter = document.getElementById('line-' + i);
         matchingLetter.innerHTML = keyPressed;

        correctCharacter++;
        var correctGuess = true
     } 
    }
    if (correctGuess != true){
// decreases number of guesses
        guessLeft--;
        console.log(guessLeft)  
        var loseTally = document.getElementById('guessesLeft');
        loseTally.innerHTML = guessLeft; 

// adds letter to guessed letters list

        guessedLetter = document.getElementById('guessedLetter');
        letters.push(keyPressed);
        guessedLetter.innerHTML = letters
        console.log(letters)


//resets the game if 0 guess left
        if (guessLeft === 0){
        guessLeft=10
        console.log("lose")
        var d1 = document.getElementById('randomWord');
        guessedLetter.innerHTML = "";
        empty ()
        d1.innerHTML = "";
        randomWord();
        empty();
        }
      
       
    }
    
    console.log(correctCharacter);
//detemine if you win    
    if(correctCharacter === characterArray.length){
        correctCharacter = 0;
        console.log('win');
        wins++;
        var d1 = document.getElementById('randomWord');
        d1.innerHTML = "";
        randomWord();
        var winTally = document.getElementById('wins');
        winTally.innerHTML = wins;
        empty();
    }

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

function empty() {
    letters.length =0;
}




