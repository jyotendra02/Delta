/*
  this keyword: refers to an object executing current piece of code.

*/
const student = {
  name:"jyotndra",
  age:10,
  eng:10,
  math:20,
  sci:30,
  getAvg(){
    let avg = (this.eng + this.math + this.sci)/3;
    console.log(`${this.name} got ${avg} avg marks`);
  }
}

//try and catch exception handling
try{
  console.log(a);
}catch(err){
  console.log(err);
}
/*
                Miscelleneous Topics
1. Arrow Functions are nameless function

*/
const sum = (a,b) => {
  console.log(`Sum is ${a+b}`);
}

//for single parameter no paranthesis is required
const cube = n => {
  return n*n*n;
}