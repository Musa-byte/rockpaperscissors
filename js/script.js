// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
    $("#userChoice").text($("#input").val());
    var userChoice = $("input").val();
    var computerChoice = Math.random();
    if (computerChoice < 0.3){
      $("#computerChoice").text("rock"); 
    } else if (computerChoice > 0.3 && computerChoice < 0.6){
        $("#computerChoice").text("paper");
    } else if (computerChoice > 0.6){
        $("#computerChoice").text("scissors");
    } if (computerChoice < 0.3 && userChoice === "paper"){
        $("#result").text("WINNER!!");
    } else if (computerChoice > 0.3 && computerChoice < 0.6 && userChoice === "Paper"){
        $("#result").text("WINNER!!");
    } else if (computerChoice > 0.6 && userChoice === "paper"){
        $("#result").text("Tie");
    }        
});

