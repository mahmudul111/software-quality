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

rl.question("Input 1st number: ", function(a) {
    rl.question("Input 2nd number: ", function(b) {
        rl.question("Input 3rd number: ", function(c) {
            // Parse input as integers
            // a = parseInt(a);
            // b = parseInt(b);
            // c = parseInt(c);
            // change

            if (isPythagoreanTriple(a, b, c)) {
                console.log("Pythagorean triple number.");
            } else {
                console.log("These are not Pythagorean triple number.");
            }
            rl.close();
        });
    });
});
