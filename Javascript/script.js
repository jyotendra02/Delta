//Linking JS and HTML
console.log("hello javascript")

//Template literals
let pencilPrice =10;
let bookPrice = 20;
let output = "The total price is: " + (pencilPrice+bookPrice) + " Rupees."; 
let output1 = `The total price is: ${pencilPrice + bookPrice} Rupees.`; //just like format string in python

console.log("The total price is: ",(pencilPrice+bookPrice),"Rupees.")

console.log(output1)

//operators
let a = 10;
let b = 5;

console.log("123"==123) //true as == cpmpares only value not type
console.log("123"===123)//also compares types

console.log(null == undefined) //true??

//conditional statements
let color='red';                                            
if(color=='red'){
    console.log('Stop')
}
if(color=='yellow'){
    console.log('slow down')
}
if(color=='green'){
    console.log('Go')
}

let num=100;
if(num>10){
    console.log("Greater")
}
else if(num<10){
    console.log("Less")
}
else{
    console.log("Equall")
}
// truthy and falsy values
// false, 0 ,-0 , On(bigint value), "", null,undefined ,NaN has falsy values everything else is true

console.error("This is an error")
let fname = prompt("Enter your name");
alert(`your name is ${fname}`);

