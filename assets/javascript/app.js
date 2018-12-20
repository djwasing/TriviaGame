

$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var time = 10;
    var timerOn = false;
    var intervalId;
    var counter = 0;
    var correctAnswer;
    $("#results").hide();


    questionArray = [
        "What is the secret ingredient in Kevin's Famous Chili recipe?",
        "How many pounds does Angela weigh?",
        "Which male character regularly uses the female restroom?",
        "What band poster is on the wall in Dwight's Daycare?",
        "Who from the office attends Pam's art show?",
        "How did Michael break the glass door in his condo?",
        "Where was Jim and Pam's first kiss?",
        "What was the name of the TV show Michael appeared on as a child?",
        "How many push-ups can Michael do?",
        "What position was Kevin applying for when he was hired?",
        "What is the name of the better 'Alfredos' pizza restaurant?",
        "What boy name does Michael want to name Jan's baby?",
        "What soccer team was Jim on in the 4th grade?", 
        "What was Martin's crime that sent him to prison?"
    ]

    var answerArray = [
        "Undercooked onions",
        "82",
        "Creed",
        "Insane Clown Posse",
        "Roy, Oscar, Michael",
        "Ran through it to catch the ice cream truck",
        "Chili's",
        "Fundle Bundle",
        "25, and 1 girl push-up",
        "Warehouse",
        "Alfredos Pizza Cafe",
        "Chevy",
        "The Orange Team",
        "Insider Trading"
    ]

    var optionsArray = [
        ["Special sauce", "Undercooked onions", "Fresh tomatoes", "Black beans"],
        ["85", "79", "90", "82"],
        ["Creed", "Gabe", "Ryan", "Toby"],
        ["U2", "Insane Clown Posse", "Scrantonicity", "The Rolling Stones"],
        ["Oscar, Andy, Jim", "Roy, Oscar, Michael", "Jim, Kelly, Ryan", "Creed, Meridith, Phyllis"],
        ["Ran through it to catch the ice cream truck", "Threw a dundie award at it", "Playing basketball", "Practicing his golf swing"],
        ["At Jim's desk after Casino Night", "At a gas station", "Chili's", "A hospital"],
        ["Barney and Friends", "Blues Clues", "Larry's Learning Time", "Fundle Bundle"],
        ["25, and 1 girl push-up", "26", "12", "21"],
        ["Sales", "Warehouse", "Human Resources", "Security Guard"],
        ["Alfredos", "Alfredos Pizza", "Alfredos Pizza Cafe", "Pizza by Alfredo"],
        ["Farley", "Robin", "Michael Jr.", "Chevy"],
        ["The Orange Team", "The Red Team", "The Blue Team", "The Green Team"]
        ["Pushing someone on the playground", "Kidnapping the President's son", "Insider Trading", "Stealing office supplies"]
    ]

    correctGifArr = [
        "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
        "https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif",
        "https://media.giphy.com/media/KBfKueAjIJV8Q/giphy.gif",
        "https://media.giphy.com/media/6cFcUiCG5eONW/giphy.gif",
        "https://media.giphy.com/media/t3Mzdx0SA3Eis/giphy.gif",
        "https://media.giphy.com/media/yltGOJQBMBn7W/giphy.gif",
        "https://media.giphy.com/media/vgUFOWBwBkziE/giphy.gif",
        "https://media.giphy.com/media/5wWf7GR2nhgamhRnEuA/giphy.gif",
        "https://media.giphy.com/media/8VrtCswiLDNnO/giphy.gif"
    ]

    incorrectGifArr = [
        "https://media.giphy.com/media/4cuyucPeVWbNS/giphy.gif",
        "https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif",
        "https://media.giphy.com/media/zMQcrvqjkC9d6/giphy.gif",
        "https://media.giphy.com/media/ly8G39g1ujpNm/giphy.gif",
        "https://media.giphy.com/media/B37cYPCruqwwg/giphy.gif",
        "https://media.giphy.com/media/JoePLWxLD7cGc/giphy.gif",
        "https://media.giphy.com/media/rhnTF5JSqYLmM/giphy.gif",
        "https://media.giphy.com/media/yoJC2oCKxTLNrr30Jy/giphy.gif",
        "https://media.giphy.com/media/3og0IU2CCxcCsu0bgk/giphy.gif",
        "https://media.giphy.com/media/KOUp2nbwHm7vy/giphy.gif"
    ]

    outOfTimeArr = [
        "https://media.giphy.com/media/hXMTtBCvMXUsg/giphy.gif",
        "https://media.giphy.com/media/20PsG3AnzQo1O/giphy.gif",
        "https://media.giphy.com/media/1zYwlqyR2rg6A/giphy.gif",
        "https://media.giphy.com/media/keuNoOuTb1D4A/giphy.gif",
        "https://media.giphy.com/media/SW3PNayoSGXao/giphy.gif"
    ]


    $("#startBtn").on("click", function () {
        $("#startBtn").hide();
        startGame();
    });

    function startGame() {
        correct = 0;
        incorrect = 0;
        time = 10;
        timerOn = true;
        runTime();
        if (counter < questionArray.length) {
            newQuestion();
        }
    }

    function runTime() {
        if (counter < questionArray.length) {
            clearInterval(intervalId);
            intervalId = setInterval(countDown, 1000);
        }
    }

    function clearMessage() {
        $(".messageDiv").empty();
    }

    function countDown() {
        time--;
        $("#timer").html(time);
        if (time == 0) {
            incorrect++;
            stopTime();
            $(".messageDiv").text("You ran out of time. Get ready for the next question!");
            $("#question").empty();
            $("#choices").empty();
            if (counter < questionArray.length) {
                var outOfTimeGif = $("<img>");
                var gifSrc = outOfTimeArr[Math.floor(Math.random() * outOfTimeArr.length)];
                outOfTimeGif.attr("src", gifSrc);
                outOfTimeGif.appendTo(".gifArea");
            }
            if (counter < questionArray.length) {
                counter++;
            }
            if (counter == questionArray.length) {
                $("#correct").text(correct);
                $("#incorrect").text(incorrect);
                $("#results").show();
                $(".messageDiv").hide();
                $("#gifArea").hide();
                stopTime();
            }
            setTimeout(function () {
                clearGif()
                clearMessage()
                continueGame()
            }, 1000 * 5);
        }
    }

    function stopTime() {
        clearInterval(intervalId);
        $("#timer").html(time);
    }

    function continueGame() {
        time = 10;
        $("#timer").html(time);
        runTime();
        console.log("incorrect: " + incorrect);
        if (counter < questionArray.length) {
            newQuestion();
        }
    }

    function newQuestion() {
        var question = questionArray[counter];
        var option = optionsArray[counter];
        $("#question").text(question)
        for (i = 0; i < option.length; i++) {
            var btn = $("<button>");
            btn.addClass("option btn btn-light");
            btn.attr("choice", option[i]);
            btn.text(option[i]);
            $("#choices").append(btn);
        }
    }

    function clearGif() {
        $(".gifArea").empty();
    }

    $(document).on("click", ".option", function () {             //target created button
        var userAnswer = $(this).attr("choice");
        correctAnswer = answerArray[counter];
        console.log(userAnswer, correctAnswer);
        if (userAnswer == correctAnswer) {
            console.log("right answer");
            correct++;
            stopTime();
            $("#question").empty();
            $("#choices").empty();
            var rightGif = $("<img>");
            var gifSrc = correctGifArr[Math.floor(Math.random() * correctGifArr.length)];
            rightGif.attr("src", gifSrc);
            rightGif.appendTo(".gifArea");
            setTimeout(function () {
                clearGif()
                continueGame()
            }, 1000 * 5);
            if (counter < questionArray.length) {
                counter++;
            }
        }
        else {
            incorrect++;
            stopTime();
            $("#question").empty();
            $("#choices").empty();
            var wrongGif = $("<img>");
            var gifSrc = incorrectGifArr[Math.floor(Math.random() * incorrectGifArr.length)];
            wrongGif.attr("src", gifSrc);
            wrongGif.appendTo(".gifArea");
            setTimeout(function () {
                clearGif()
                continueGame()
            }, 1000 * 5);
            if (counter < questionArray.length) {
                counter++;
            }
        };


        if (counter == questionArray.length) {
            $("#correct").text(correct);
            $("#incorrect").text(incorrect);
            $("#results").show();
            stopTime();
        }



    })




    // To do list: 
    // 1. show answer options as stacked buttons
    // 2. loop through questions and options
    // 3. build check answer function to check the selected answer against the correct answer when an answer button is clicked.
    // 4. Link .ajax API to show a gif after 1) time runs out, 2) each correct answer, 3) when game is Over. 

    // for (i = 0; i < questionArray.length; i++) {
    //     for (j = 0; j < optionsArray.length; j++) {
    //         var questionContent = (questionArray[i]);
    //         var p = $("<p>");
    //         p.text(questionContent);
    //         $("#question").append(p);
    //         var btn = $("<button>");
    //         btn.addClass("option");
    //         btn.attr("choice", optionsArray[i]);
    //         btn.text(optionsArray[i]);
    //         $("#choices").append(btn);





})