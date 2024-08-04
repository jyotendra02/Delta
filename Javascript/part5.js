/*
Notes 
                                Object Literals
=> used to store keyed collections and complex entities
 property => (key,value) pair
1. accessing the values
 post["content"]  or post.content
JS converts automatically all the keys to string 


ex:
obj = {
  1:'a',
  2:'b',
  true:'c',
  null: 'd',
}
while accessing obj[1] here 1 is a string 
but
obj.1 will give error as it doesn;t implicitly converts 1 to string
## it is prefered to keep keys as string
*/
//order changes everytime
//student referenced cant be changes when const is used
const student = {
  name: "jyotendra",
  age: 21,
  marks: 8.2,
};
const post = {
  username: "@jyotendra",
  content: "This is my folio",
  likes: 10,
  comment: 1,
};
/*

2. Adding and Updating

*/

student.name = "chandan";
student.gender = "male";

delete student.gender;

// object of objects

const classInfo = {
  ojas: { grade: "A", class: "Medical" },
  jyotendra: { grade: "A+", class: "CsE" },
  shreyas: { grade: "A+", class: "CS" },
};

//array of objects

const newClassInfo = [
  { grade: "A", class: "Medical" },
  { grade: "A+", class: "CSE" },
  { grade: "A+", class: "CS" },
];

/*
               Math Object
Math.PI
Math.E
Methods
Math.abs(-12) --> 12
Math.pow(2,3) --> 13
Math.floor(-3.2) --> -4  nearest smallest integer
Math.ceil(2.2) --> 3  nearest greatest integer
Math.random()  ranges [0,1)
*/

//Random Integer
let maxRange = 10;
let psuedoRand = Math.floor(Math.random() * maxRange); // Ranges From  TO maxRange - 1
let random = Math.floor(Math.random() * maxRange) + 1; // Ranges From 0 TO maxRange

//guessing game

let guess = prompt("Enter a Number between 1 - 10");

while (true) {
  if (guess == "quit") {
    break;
  } else if (guess == random) {
    alert("You Won");
    break;
  } else if (random < guess) {
    guess = prompt("Your Number Was Too Large!!");
  } else{
    guess = prompt("Your Guess Was Too Small!!")
  }
}
