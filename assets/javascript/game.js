console.log("js has loaded");
//on the click start button

var value = $("#addToBank").val();
var wordBank = ["fudge", "tacos", "jumpman"];
var counter = 60;
var livesLeft = 5;
var computerChoice;
var randomWord = "";
var underScores = [];
var guessedLetters = [];
var letterChoices = document.getElementsByClassName(letterChoices);



function startGame() {
  underScores = [];
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  for (var i = 0; i < randomWord.length; i++) {
    underScores.push("_");
  };
  //printing the underscores to the screen for the words

  document.getElementById("underScores").textContent = underScores.join(" ");

  console.log(randomWord);
}

function countdown() {

  counter--;
  $(".display").html("<h3> Time left: <span class='timer'>" + counter + "</span></h3>");
  console.log(counter);
};



$("#startIt").on("click", function (event) {

  event.preventDefault();
  //hide the start button
  $(".display").empty();

  //target the display, and print a counter and start counter for 60 seconds
  $(".display").prepend("<h3> Time left: <span class='timer'>" + counter + "</span></h3>");

  var timer = setInterval(countdown, 1000);
  startGame();
  

  document.onkeyup = function (event1) { 
    var keyPressed = event1.key;
    console.log(keyPressed);
  };
  //if one of the letters the user selects is in the current word, replace the dash with the letter
  function letterGuess(letter) {
    console.log(letter);
    // check to see if letter has been guessed prior, if no run with game logic
    if (guessedLetters.includes(letter) === false) {
      // run game logic
      // add letter to letterBank
      guessedLetters.push(letter);
  
      // loop over pickedWord and see if any character matches letter I guessed
      for (var i = 0; i < randomWord.length; i++) {
        // check if pickedWord[i] === letter
        if (randomWord[i].toLowerCase() === letter.toLowerCase()) {
          // swap placeholderArray[i] with pickedWord[i]
          underScores[i] = randomWord[i];
        }
      }
      checkIncorrect(letter);
  
    } else {
      alert("You've already pressed this letter!");
    }
  }

  
//else remove a point from the total number of guesses left

//if the user guesses all the letters, on the last letter trigger an ajax request to giphy to pull up a 'you win!' gif

//else trigger an ajax request to play a 'you lose!' gif

});

//THIS IS TO ADD WORDS TO THE ARRAY. PLEASE NOTE THEY WILL ONLY BE SAVED FOR THE SESSION
// $(".addIt").on("click", function (event) {

//     // event.preventDefault();
//     var added = $("#addToBank").val();
//     wordBank.push(added);
//     console.log(wordBank);

//     //store on sessionstorage
//   sessionStorage.setItem("wordBank", JSON.stringify(wordBank))
// });
  //THIS IS TO ADD WORDS TO THE ARRAY. PLEASE NOTE THEY WILL ONLY BE SAVED FOR THE SESSION
