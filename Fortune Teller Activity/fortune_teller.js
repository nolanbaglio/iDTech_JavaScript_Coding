// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
var fortune;
// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
function yourFortune(fortune) {
    if(fortune >= 0 && fortune <= 3) {
        return ("Your fortune is low.")
    }
    else if(fortune > 3 && fortune <= 7) {
        return ("Your fortune is average. Nothing to be afraid of!")
    }
    else if(fortune > 7 && fortune <= 10) {
        return ("Your fortune is very high! Amazing!")
    }
    else {
        return ("I'm very sorry, but we were unable to read your fortune.")
    }
}

console.log("Result:", yourFortune(6));