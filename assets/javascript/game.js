<script type="text/javascript">{

    // Creates an array that lists out all of the options (alphabet).
    var computerChoices= ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o","p", "q","r","s","t", "u", "v", "w", "x", "y","z"];

    
    // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    //User is prompted to press a key

      {/* // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

  // Determines which key was pressed.
    var userGuess = event.key;

    //Compare user and computer guesses

    if 
    matches= wins, non matches equal losses

    compile all wins/losses

    // Select the div with the id "game", and insert the following HTML into it.
    document.querySelector("#game").innerHTML = "You chose: " + userGuess + ". The computer chose: " + computerGuess;

    after 10 losses, game starts over, or 
    after 1 win game starts over
    } */}


  </script>