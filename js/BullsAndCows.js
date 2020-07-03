/*generates a four digit number
 checks to see if the user has guessed the number
 gives clues to the user
 */
var digit0, digit1, digit2, digit3;
var answer = "";
var answer_array = [];
var guess_string = [];
var guess_id;
var bulls;
var cows;
function init() {
    document.getElementById("guess1").innerHTML = "";
    document.getElementById("guess2").innerHTML = "";
    document.getElementById("guess3").innerHTML = "";
    document.getElementById("guess4").innerHTML = "";
    document.getElementById("guess5").innerHTML = "";
    document.getElementById("guess6").innerHTML = "";
    document.getElementById("guess7").innerHTML = "";
    document.getElementById("guess8").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    document.getElementById("result4").innerHTML = "";
    document.getElementById("result5").innerHTML = "";
    document.getElementById("result6").innerHTML = "";
    document.getElementById("result7").innerHTML = "";
    document.getElementById("result8").innerHTML = "";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("playerGuess").value = "";
    bulls = 0;
    cows = 0;
    answer_array = [];
    var temp_array = [];
    guess_id = 1;
    digit0 = Math.floor(Math.random() * 10);
    answer_array.push(digit0);
    temp_array.push(digit0);
    var string0 = digit0.toString();
    digit1 = Math.floor(Math.random() * 10);
    answer_array.push(digit1);
    temp_array.push(digit1);
    var string1 = digit1.toString();
    digit2 = Math.floor(Math.random() * 10);
    answer_array.push(digit2);
    temp_array.push(digit2);
    var string2 = digit2.toString();
    digit3 = Math.floor(Math.random() * 10);
    answer_array.push(digit3);
    temp_array.push(digit3);
    var string3 = digit3.toString();
    answer = string0 + string1 + string2 + string3;
}
function check() {
    bulls = 0;
    cows = 0;
    var temp_array = [];
    var cow_array = [];
    temp_array.push(digit0);
    temp_array.push(digit1);
    temp_array.push(digit2);
    temp_array.push(digit3);
    var guess_string = document.getElementById("playerGuess").value;
    guess_string = guess_string.split("");
    for (var i = 0; i < 4; i++) {
        var temp_digit = temp_array.indexOf(parseInt(guess_string[i]));
        if (answer_array[i] == guess_string[i]) {
            bulls += 1;
            temp_array.splice(temp_digit, 1);
        }
        else {
            cow_array.push(guess_string[i]);
        }
    }
    for (var j = 0; j < cow_array.length; j++) {
        temp_digit = parseInt(cow_array[j]);
        if (temp_array.indexOf(temp_digit) != -1) {
            cows += 1;
        }
    }
    if (answer == document.getElementById("playerGuess").value) {
        document.getElementById("guess" + guess_id).innerHTML = document.getElementById("playerGuess").value;
        document.getElementById("result" + guess_id).innerHTML = "B" + bulls + "C" + cows;
        document.getElementById("answer").innerHTML = "Winner!";
    }
    else {
        if (guess_id == 8) {
            document.getElementById("guess" + guess_id).innerHTML = document.getElementById("playerGuess").value;
            document.getElementById("result" + guess_id).innerHTML = "B" + bulls + "C" + cows;
            guess_id += 1;
            document.getElementById("answer").innerHTML = "You Lose";
        }
        else if (guess_id > 8) {
            document.getElementById("answer").innerHTML = answer; //"Click on 'New Game'";
        }
        else {
            document.getElementById("guess" + guess_id).innerHTML = document.getElementById("playerGuess").value;
            document.getElementById("result" + guess_id).innerHTML = "B" + bulls + "C" + cows;
            document.getElementById("playerGuess").value;
            document.getElementById("answer").innerHTML = "Try Again";
            guess_id += 1;
        }
    }
}
