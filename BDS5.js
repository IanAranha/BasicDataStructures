// We have defined a function, sumOfTen, which takes 
// an array as an argument and 
// returns the sum of that arrays elements. 

// Modify the function, using splice(), so that it returns a value of 10.

// function sumOfTen(arr) {
//   // change code below this line
  
//   // change code above this line
//   return arr.reduce((a, b) => a + b);
// }

// // do not change code below this line
// console.log(sumOfTen([2, 5, 1, 5, 2, 1]));


//The current array has elements that total 16, so just remove elements that total 6

function sumOfTen(arr) {
  arr.splice(1,2)
  return arr.reduce((a, b) => a + b);
}

console.log(sumOfTen([2, 5, 1, 5, 2, 1]));