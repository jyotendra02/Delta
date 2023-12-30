/*
Notes 
*** ARRAYS & STRINGS ARE OBJECTS IN JS
                                Functions
function name(arg){
  operation 
  return val;
}
Scope 
1.Function scope : 
2.Block Scope : 
{
  declaration 
  let a = 10 ;
}
 console.log(a)  --> error

3.lexical scope: varaiable can be accessed in inner function if function is crated after declaring variable 
                 but opposite is not true
*/
function outerFunction() {
  /*
  function innerFunct(){
    console.log(x,y);
  }
  innerFunct(); This Will also work due to Reason called HOISTING ..
  */
  let x = 10;
  let y = 20;
  function innerFunct() {
    //function scope
    console.log(x, y);
  }
  innerFunct();
}
outerFunction();

//                                  Functions Expression

const sum = function (a, b) {
  // nameless function
  return a + b;
};
sum(2, 3);

//                                 Higher order Functions
// takes multiple functions as argument
let multipleGreet = function (func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
};
function greet() {
  console.log("Namaste!!");
}

//

function oddEvenFactory(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  }else{
    console.log("Wrong Request!!");
  }
}
request = "even";
let func = oddEvenFactory(request) ;

//                    Methods : functions defined for the objects
const calculator = {
  add: function(a,b){
    return a+b;
  },
  sub: function(a,b){
    return a-b;
  },
  mul: function(a,b){
    return a*b;
  },
  //shorthand for writing methods
  division(a,b){
    return a/b;
  }
}
