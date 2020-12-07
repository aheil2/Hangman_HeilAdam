$(document).ready(function () {
    $("#keyboard button").click(clickLetter);
    $("#reset").click(resetGame);
    //array of words
    var wordList = [
        "ARROW",
        "AVENGER",
        "BLADE",
        "BUCCANEER",
        "ECLIPSE",
        "GLADIUS",
        "GLAIVE",
        "HORNET",
        "HURRICANE",
        "RAVEN",
        "SABRE",
        "SCYTHE",
        "VANGUARD"
    ];
    var answer = '';
    var maxWrong = 6;
    var mistakes = 0;
    $("#mistakes").text(mistakes);
    var userGuess;

    function randomWord () {
        answer = wordList [Math.floor(Math.random()*wordList.length)];
        console.log(answer);
    }

    function guessedWord() {
        for (var i=0; i<answer.length; i++) {
            $("#randomWord").append('<div class="letter"></div>');
            $(".letter").text("-");
        }
    }

    function clickLetter() {
        $(this).prop("disabled", "true");
        var matchFound = false;

        userGuess = $(this).text();
        console.log(userGuess);
        for (var i=0; i<answer.length; i++) {
            if (userGuess === answer.charAt(i)) {
                $('#randomWord').find(":nth-child(" + (i + 1) + ")").addClass("correct");
                matchFound = true;
            }
        }

        var correctGuesses = [];
        $(".letter").each(function(index) {
            if ($(this).hasClass("correct")) {
                correctGuesses.push(index);
                if (correctGuesses.length === answer.length) {
                    alert("You win!");
                    location.reload();
                }
            }
        });

        if (matchFound === false) {
            mistakes += 1;
            $("#mistakes").text(mistakes);
        }

        if (mistakes === 6) {
            alert("You lost!")
            location.reload();
        }
    }

    function resetGame() {
        location.reload();
    }


    randomWord();
    guessedWord();

});