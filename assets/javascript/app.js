

$(document).ready(function() {

    var correct= 0;
    var incorrect = 0;
    var time= 10;
    var timerOn = false;
    var intervalId;

    var question= {
        q1: "This is question 1.", 
        q2: "This is question 2",
        q3: "This is question 3",
        q4: "This is question 4",
        q5: "Q#5",
        q6: "Q#6", 
        q7: "Q#7",
        q8: "Q#8",
        q9: "Q#9",
        q10: "Q#10"
    }

    var answer= {
        a1: "This is answer 1.",
        a2: "a#2",
        a3: "a#3",
        a4: "a#4",
        a5: "A#5",
        a6: "A#6",
        a7: "A#7",
        a8: "A#8",
        a9: "A#9",
        a10: "A#10"
    }

    var options= {
        o1: ["This", "That", "Other", "again"],
        o2: ["1", "2", "3", "4"],
        o3: ["1", "2", "3", "4"],
        o4: ["1", "2", "3", "4"],
        o5: ["1", "2", "3", "4"],
        o6: ["1", "2", "3", "4"],
        o7: ["1", "2", "3", "4"],
        o8: ["1", "2", "3", "4"],
        o9: ["1", "2", "3", "4"],
        o10: ["1", "2", "3", "4"],
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
        $("#results").text()
    }

    function runTime() {
        clearInterval(intervalId);
        intervalId = setInterval(countDown, 1000);
    }

    function countDown() {
        time--;
        $("#timer").html(time);
        if (time == 0) {
            alert("Out of time");
            incorrect++;       
            stopTime();
        }
    }

    function stopTime() {
        clearInterval(intervalId);
        $("#timer").html(time);
    }






    

})