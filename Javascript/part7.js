/*
  this keyword: refers to an object executing current piece of code.

*/
const student = {
  name: "jyotndra",
  age: 10,
  eng: 10,
  math: 20,
  sci: 30,
  getAvg() {
    let avg = (this.eng + this.math + this.sci) / 3;
    console.log(`${this.name} got ${avg} avg marks`);
  },
};

//try and catch exception handling
try {
  console.log(a);
} catch (err) {
  console.log(err);
}
/*
                Miscelleneous Topics
1. Arrow Functions are nameless function

*/
const sum = (a, b) => {
  console.log(`Sum is ${a + b}`);
};

//for single parameter no paranthesis is required
const cube = n => {
  return n * n * n;
};

//implicit return in arrow function
const mul = (a, b) => a * b; //used when function just returns a single value and doesn't have any other operation

// Set Timeout
/*
    setTimeout(function or callback , timeout)  timeout in Milisecond 1000ms = 1 sec
    Callback is function passed as a parameter
    Doesn't Change the flow of execution of code 
    
*/
console.log("Hi There");

setTimeout(() => {
  console.log("Tezos Gec");
}, 4000);
console.log("Welcome to ");

// Set Interval
/*
  this will repeatedly execute the callback after set interval
*/
let id = setInterval(() => {
  console.log("Hi There");
}, 1000);
clearInterval(id);

/** this keyword with arrow function
 * Arrow functions have lexical scope
 * Parent call Scope
 * */
const student1 = {
  name: "jyotndra",
  marks: 95,
  props: this, // Global scope
  getName: function () {
    console.log(this);
    return this.name; //here this refers to the calling object that is student1 hence name will be displayed
  },
  getMarks: () => {
    console.log(this);
    return this.marks; //here this refers to the scope of the parent which is window for the student1 obj
  },
  getInfo1: function (){
    setTimeout(()=>{
      console.log(this); // here window is calling setTimeout but this will contain student as arrow is used 
    },3000)
  },

  getInfo2: function (){
    setTimeout(function(){
      console.log(this); //here window is calling setTimeout and this will have the window as normal scope is used
    },3000)
  }
};
