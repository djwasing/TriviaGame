

$(document).ready(function() {

    var correct= 0;
    var incorrect = 0;
    var time= 10;
    var timerOn = false;
    var intervalId;
    var correctAnswer= "";
    $("#results").hide();

    $("#startBtn").on("click", function() {
        $("#startBtn").hide();
        startGame();   
    });

    function startGame() {
        correct= 0;
        incorrect= 0;
        time= 60;
        timerOn= true;
        //runTime();      **commented out runtime so can work on site without dealing with clock
        newQuestion();
    }

    function runTime() {                                //start the clock running down by 1 sec. 
        clearInterval(intervalId);
        intervalId = setInterval(countDown, 1000);
    }

    function countDown() {
        time--;
        $("#timer").html(time);
        if (time == 0) {                                            //if the user runs out of time, they get the question wrong and continue the game
            alert("Out of time. Press OK to continue game");
            incorrect++;       
            stopTime();
        }
    }

    function stopTime() {                       //stops the time when clock reaches 0, 
        clearInterval(intervalId);      
        $("#timer").html(time);                 //show time
        setTimeout(continueGame, 1000);         //wait 1 sec, and continue the game
    }

    function continueGame() {                           //if the user lets time expire, the game continues after showing the correct answer 
        time = 10;                                         // resetting the clock
        $("#timer").html(time);
        runTime();                                         //starting the time again
        console.log("incorrect: " + incorrect);             
        newQuestion();
    }

    function newQuestion() {                        //select the first value in the object and display only it. 
        $.each(question, function(key, value) {        // after user answers the question, display the ext question, until the end of the quiz. 
            var currentQuestion =                       //assign the first question in the object to the currentQuestion VAR and display it
            console.log(value);
           

        })

        


    }


    // To do list: 
    // 1. show answer options as stacked buttons
    // 2. loop through questions and options, showing corresponding indecies
    // 3. build check answer function to check the selected answer against the correct answer when an answer button is clicked.
    // 4. Link .ajax API to show a gif after 1) time runs out, 2) each correct answer, 3) when game is Over. 
    



    

})