function isPythagoreanTriple(...args) {
    const [a, b, c] = args.sort((x, y) => x - y);
    return a ** 2 + b ** 2 === c ** 2;
}

// Example usage
const numbers = [3, 4, 2];

if (isPythagoreanTriple(...numbers)) {
    console.log(`${numbers.join(', ')} form a Pythagorean triple.`);
} else {
    console.log(`${numbers.join(', ')} do not form a Pythagorean triple.`);
}
