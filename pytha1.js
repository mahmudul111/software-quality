function isPythagoreanTriple(a, b, c) {
       // Sort the numbers to find the largest one
        const sortedNumbers = [a, b, c].sort((x, y) => x - y);
        const largest = sortedNumbers[2];
    
       // Check if the largest number squared is equal to the sum of the squares of the other two numbers
       return largest ** 2 === sortedNumbers[0] ** 2 + sortedNumbers[1] ** 2;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isValidNumber(input) {
    return !isNaN(input) && input > 0;
}

function getInput(prompt, callback) {
    rl.question(prompt, function(input) {
        if (isValidNumber(input)) {
            callback(parseInt(input));
        } else {
            console.log("Invalid input. Please enter positive numbers.");
            getInput(prompt, callback);
        }
    });
}

getInput("Enter 1st number: ", function(a) {
    getInput("Enter 2nd number: ", function(b) {
        getInput("Enter 3rd number: ", function(c) {
            if (isPythagoreanTriple(a, b, c)) {
                console.log("Pythagorean triple number.");
            } else {
                console.log("These are not Pythagorean triple number.");
            }
            rl.close();
        });
    });
});

