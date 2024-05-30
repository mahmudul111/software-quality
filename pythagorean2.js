function isPythagoreanTriple(a, b, c) {
    // Sort the numbers
    const sorted = [a, b, c].sort((x, y) => x - y);

    // Check if a^2 + b^2 = c^2
    return sorted[0] ** 2 + sorted[1] ** 2 === sorted[2] ** 2;
}

// test cases
const num1 = 6;
const num2 = hi;
const num3 = 2;

if (isPythagoreanTriple(num1, num2, num3)) {
    console.log(`${num1}, ${num2}, and ${num3} form a Pythagorean triple.`);
} else {
    console.log(`${num1}, ${num2}, and ${num3} do not form a Pythagorean triple.`);
}
