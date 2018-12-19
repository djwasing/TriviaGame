

$(document).ready(function() {

    var correct= 0;
    var incorrect = 0;
    var time= 10;
    var timerOn = false;
    var intervalId;
   

    var question= {
        q1: "What is the secret ingredient in Kevin's Famous Chili recipe?", 
        q2: "How many pounds does Angela weigh?",
        q3: "Which male character regularly uses the female restroom?",
        q4: "What band poster is on the wall in Dwight's Daycare?",
        q5: "Who from the office attends Pam's art show?",
        q6: "How did Michael break the glass door in his condo?", 
        q7: "Where was Jim and Pam's first kiss?",
        q8: "What was the name of the show Michael appeared on as a child?",
        q9: "How many push-ups can Michael do?",
        q10: "What position was Kevin applying for when he was hired?"
    }

    var answer= {
        a1: "Undercooked onions",
        a2: "82",
        a3: "Creed",
        a4: "Insane Clown Posse",
        a5: "Roy, Oscar, Michael",
        a6: "Ran through it to catch the ice cream truck",
        a7: "Chili's",
        a8: "Fundle Bundle",
        a9: "25, and 1 girl push-up",
        a10: "Warehouse"
    }

    var options= {
        o1: ["Special sauce", "Undercooked  onions", "Fresh tomatoes", "Mexican beans"],
        o2: ["85", "79", "90", "82"],
        o3: ["Creed", "Gabe", "Ryan", "Toby"],
        o4: ["U2", "Insane Clown Posse", "Scrantonicity", "The Rolling Stones"],
        o5: ["Oscar, Andy, Jim", "Roy, Oscar, Michael", "Jim, Kelly, Ryan", "Creed, Meridith, Phyllis"],
        o6: ["Ran through it to catch the ice cream truck", "Threw a dundie award at it", "Playing basketball", "Practicing his golf swing"],
        o7: ["At Jim's desk after Casino Night", "At a gas station", "Chili's", "A hospital"],
        o8: ["Barney and Friends", "Blues Clues", "Larry's Learning Time", "Fundle Bundle"],
        o9: ["25, and 1 girl push-up", "26", "12", "21"],
        o10: ["Sales", "Warehouse", "Human Resources", "Secretary"],
    }

    $("#start").on("click", function() {
        $("#question").text(question.q1);
        console.log(answer.a1);
        $(".choices").text(options.o1);
        startGame();
        $("#start").hide();
    });

    function startGame() {
        correct= 0;
        incorrect= 0;
        time= 10;
        timerOn= true;
        runTime();
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
        incorrect++;
        time = 10;
        $("#timer").html(time);
        runTime();
        //also, show next question
    }

    function newQuestion() {
        var quizQuestion = 
    }






    

})