

$(document).ready(function() {

    var correct= 0;
    var incorrect = 0;
    var time= 10;
    var timerOn = false;
    var intervalId;
    $("#results").hide();
   

    questionArray= [
        "What is the secret ingredient in Kevin's Famous Chili recipe?", 
        "How many pounds does Angela weigh?",
        "Which male character regularly uses the female restroom?",
        "What band poster is on the wall in Dwight's Daycare?",
        "Who from the office attends Pam's art show?",
        "How did Michael break the glass door in his condo?", 
        "Where was Jim and Pam's first kiss?",
        "What was the name of the show Michael appeared on as a child?",
        "How many push-ups can Michael do?",
        "What position was Kevin applying for when he was hired?"
    ]

    var answerArray= [
        "Undercooked onions",
        "82",
        "Creed",
        "Insane Clown Posse",
        "Roy, Oscar, Michael",
        "Ran through it to catch the ice cream truck",
        "Chili's",
        "Fundle Bundle",
        "25, and 1 girl push-up",
        "Warehouse"
    ]

    var optionsArray= [
        ["Special sauce", "Undercooked  onions", "Fresh tomatoes", "Mexican beans"],
        ["85", "79", "90", "82"],
        ["Creed", "Gabe", "Ryan", "Toby"],
        ["U2", "Insane Clown Posse", "Scrantonicity", "The Rolling Stones"],
        ["Oscar, Andy, Jim", "Roy, Oscar, Michael", "Jim, Kelly, Ryan", "Creed, Meridith, Phyllis"],
        ["Ran through it to catch the ice cream truck", "Threw a dundie award at it", "Playing basketball", "Practicing his golf swing"],
        ["At Jim's desk after Casino Night", "At a gas station", "Chili's", "A hospital"],
        ["Barney and Friends", "Blues Clues", "Larry's Learning Time", "Fundle Bundle"],
        ["25, and 1 girl push-up", "26", "12", "21"],
        ["Sales", "Warehouse", "Human Resources", "Secretary"],
    ]

    $("#startBtn").on("click", function() {
        $("#startBtn").hide();
        startGame();   
    });

    function startGame() {
        correct= 0;
        incorrect= 0;
        time= 10;
        timerOn= true;
        runTime();
        newQuestion();
    }

    function runTime() {
        clearInterval(intervalId);
        intervalId = setInterval(countDown, 1000);
    }

    function countDown() {
        time--;
        $("#timer").html(time);
        if (time == 0) {
            alert("Out of time. Press OK to continue game");
            incorrect++;       
            stopTime();
        }
    }

    function stopTime() {
        clearInterval(intervalId);
        $("#timer").html(time);
        setTimeout(continueGame, 1000);
    }

    function continueGame() {
        time = 10;
        $("#timer").html(time);
        runTime();
        console.log("incorrect: " + incorrect);
        newQuestion();
    }

    function newQuestion() {
        var quizQuestion = (questionArray);
        $("#question").text(quizQuestion);

        for (i = 0; i < optionsArray.length; i++) {
            var btn = $("<button>");
            btn.addClass("option");
            btn.attr(optionsArray[i]);
            btn.text(optionsArray);
            $("#choices").append(btn);
        }
    }


    // To do list: 
    // 1. show answer options as stacked buttons
    // 2. loop through questions and options
    // 3. build check answer function to check the selected answer against the correct answer when an answer button is clicked.
    // 4. Link .ajax API to show a gif after 1) time runs out, 2) each correct answer, 3) when game is Over. 
    



    

})