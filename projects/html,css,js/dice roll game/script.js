function rollDice() {
    // generate a random number between 1 and 6 for the first user
    let firstRoll = Math.floor(Math.random() * 6) + 1;

    // generate the image URL for the first user
    let firstDice = "images/dice" + firstRoll + ".png";

    // set the source attribute for the first user's image
    document.getElementById("user1-dice").setAttribute("src", firstDice);

    // generate a random number between 1 and 6 for the second user
    let secondRoll = Math.floor(Math.random() * 6) + 1;

    // generate the image URL for the second user
    let secondDice = "images/dice" + secondRoll + ".png";

    // set the source attribute for the second user's image
    document.getElementById("user2-dice").setAttribute("src", secondDice);

    // determine the winner
    let resultMessage;
    if (firstRoll > secondRoll) {
        resultMessage = "The winner is User 1";
    } else if (secondRoll > firstRoll) {
        resultMessage = "The winner is User 2";
    } else {
        resultMessage = "It's a draw";
    }

    // display the result
    document.querySelector("h1").textContent = resultMessage;
}

// attach the rollDice function to the click event of the button
document.getElementById("roll-dice").addEventListener("click", rollDice);