/*
Notes 
                                for of loops
    for(element of collection){
        console.log(element)
    }


*/
let favMovie = "minions";
let guess = prompt("Enter Favourite Movie");
while (guess != favMovie && guess != "quit") {
  guess = prompt("Wrong Please Try Again");
}
