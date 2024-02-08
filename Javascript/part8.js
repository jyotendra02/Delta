/*
              Array methods
1. forEach : takes a callback as an argument and repeats it for all the array elements
2. map : works very similar to forEach , it returns the result of each iteration and creates new array
3. filter : works just like map , but only those elements are include for which callback returns true
4. every : this methods return true iff the callback return true for all elements
5. reduce : reduces an array to a single value similar to every but here value depends upon the reducer function
    arr.reduce( function(accumulator , element) );

*/

let arr = [1, 2, 3, 4, 5];

// let print = function(ele){
//   console.log(ele);
// }
// arr.forEach(print);

arr.forEach(function (el) {
  console.log(el);
});

arr.forEach((el) => {
  console.log(el);
});

// Note: forEach can also be used to iterate over the objects for ex: array of objects

// Map method
let double = arr.map((el) => el * 2);

// Filter Methods
let num = [1, 2, 3, 4, 6, 14, 8, 9, 1, 13, 15, 11, 10, 12];
let evenNum = num.filter((el) => el % 2 == 0);

// Every Method
let isOdd = [1, 3, 5, 7, 9, 11].every((el) => el % 2 != 0); //checks all the odd valeus in the array

// Reduce method
let finalValue = arr.reduce((res, el) => {
  console.log(res); //ON FIRST EXECUTION RES SHOULD BE EMPTY AS RES IS THE RETURN VALUE FOR PREVIES ELE BUT IT WILL
  return res + el; //PRINT 1 BECAUSE FOR FIRST EXECUTION RES WILL BE EQUAL TO THE FIRST ELEMENT
});

// finding max using reduce

let max = num.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});

//          Practice Questions
// 1. Every number in array is divisible by 10 or not
let isDivisible = (el) => el % 10 == 0;
let num1 = [10, 30, 40, 50, 60, 89,];
let isDivByTen = num1.every(isDivisible);

// 2. Find Min in an Array

function getMin(num){
  let min = num.reduce((min, el) => {
    if (el < min) {
      return el;
    } else {
      return min;
    }
  });
  return min;
}
// Default Parameter 
let nums = [21,123,2,23123,321312,212,123,213,12];

function maxFun(num,max=0){
   num.forEach((el)=>{
    if(el>max){
      max = el;
    }
  })
  return max;
}
// Code to print pyramid pattern in JS
let len = 5;
for(let i = 1;i<=len;i++){
  for(let j = 1;j<=len;j++){
    if(i+j >= 6){
      console.log('*');
    }
  }console.log('\n');
  
}




