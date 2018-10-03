console.log("js has loaded");
//on the click start button

var value = $("#addToBank").val();
var wordBank = ["fudge", "tacos", "jumpman"];
var counter = 60;
var livesLeft = 5;
var computerChoice;
var userGuess;
var randomWord = "";
var underScores = [];


function startGame() {
  underScores = [];
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  for (var i = 0; i < randomWord.length; i++) {
    underScores.push("_");
  };
  //printing the underscores to the screen for the words

  document.getElementById("underScores") = underScores.join(" ");
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

});
//variable for the array. for now im going to add a functionality that will add words to an array for me. this will be commented out after but ill remain for future use.

$(".addIt").on("click", function (event) {

    event.preventDefault();
    var added = $("#addToBank").val();
    wordBank.push(added);
    console.log(wordBank);

    //store on sessionstorage
    sessionStorage.setItem("wordBank", JSON.stringify(wordBank))
  
});


//target the array, randomly select one of the words, and print out a _ for each letter (use a for loop here) and print it to the page.

//if one of the letters the user selects is in the current word, replace the dash with the letter

//else remove a point from the total number of guesses left

//if the user guesses all the letters, on the last letter trigger an ajax request to giphy to pull up a 'you win!' gif

//else trigger an ajax request to play a 'you lose!' gif