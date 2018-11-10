// We have defined a function, forecast, 
// that takes an array as an argument. 

// Modify the function using slice() to extract information from the argument 
// array and return a new array that contains the elements 'warm' and 'sunny'

// function forecast(arr) {
//   // change code below this line
  
//   return arr;
// }

// // do not change code below this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));




function forecast(arr) {
  let newarr = arr.slice(2,4)
  return newarr;
}

let conditions = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']
console.log(conditions)
console.log(forecast(conditions));