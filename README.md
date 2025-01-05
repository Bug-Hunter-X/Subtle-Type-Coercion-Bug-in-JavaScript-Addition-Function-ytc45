# Subtle Type Coercion Bug in JavaScript

This repository demonstrates a subtle bug related to type coercion in a simple JavaScript addition function. The function `foo` is intended to add two numbers, but it has unexpected behavior when dealing with null values and the number 0.

## Bug Description

The `foo` function correctly handles `null` inputs by returning `null`. However, it fails if either `a` or `b` is a falsy value (like 0). This is due to JavaScript's type coercion in the `+` operator.  If `a` is 0 and `b` is a number, for instance, the function will return `NaN`. 

## Bug Solution

The solution addresses the type coercion issue by explicitly checking the type of the inputs.  This ensures that the addition operation only occurs when both inputs are numbers. Note this approach is more restrictive in how values are handled.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a text editor or IDE.
3. Run the JavaScript files using a Node.js environment (e.g., `node bug.js`) or in a browser's developer console.
