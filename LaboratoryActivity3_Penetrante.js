// LaboratoryActivity3_<YourLastName>.js
// Replace <YourLastName> with your actual last name

// Step 1: Set your base number (last digit of student ID)
let baseNumber = 7; // Example: if your ID ends with 7

// ===============================
// Problem 1: Grade Calculator
// ===============================
function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "F";
    }
}

// score formula: base_number × 10 + 5
let score = baseNumber * 10 + 5;
console.log("Problem 1: Grade Calculator");
console.log("Score:", score, "Grade:", calculateGrade(score));
console.log("------------------------------------");


// ===============================
// Problem 2: Star Pattern
// ===============================
function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

let rows = baseNumber + 2;
console.log("Problem 2: Star Pattern (Rows =", rows + ")");
showStars(rows);
console.log("------------------------------------");


// ===============================
// Problem 3: Prime Number Checker
// ===============================
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let checkNumber = baseNumber + 10;
console.log("Problem 3: Prime Number Checker");
console.log("Number:", checkNumber, "Is Prime?", isPrime(checkNumber));
console.log("------------------------------------");


// ===============================
// Problem 4: Multiplication Table
// ===============================
function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}

console.log("Problem 4: Multiplication Table of", baseNumber);
multiplicationTable(baseNumber);
console.log("------------------------------------");
