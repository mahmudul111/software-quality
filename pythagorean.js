function isPythagoreanTriple(a, b, c) {
    // Sort the numbers to find the largest one
    const sortedNumbers = [a, b, c].sort((x, y) => x - y);
    const largest = sortedNumbers[2];

    // Check if the largest number squared is equal to the sum of the squares of the other two numbers
    return largest ** 2 === sortedNumbers[0] ** 2 + sortedNumbers[1] ** 2;
}

// Test cases
console.log(isPythagoreanTriple(3, 4, 5)); 
console.log(isPythagoreanTriple(5, 12, 13)); 
console.log(isPythagoreanTriple(8, 15, 17)); 
console.log(isPythagoreanTriple(7, 8, 9)); 
console.log(isPythagoreanTriple(15, 8, 17)); 
console.log(isPythagoreanTriple(10, -2, 5)); 