function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or handle non-numeric inputs as needed
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(1,0)); //1
console.log(foo(0,1)); //1