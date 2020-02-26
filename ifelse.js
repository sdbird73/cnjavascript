// if (1 === "1") {
//     console.log (true);
// }
// else {
//     console.log (false);
// }

// if (1 != "1") {
//     console.log (true);
// }
// else {
//     console.log (false);
// }


// let age = 20
// let country = "UK"

// if (age > 17 && country == "UK") {
//     console.log ("I can serve you");
// }
// else {
//     console.log ("You aren't old enough");
// }


// let password = "hello";
// let n = password.length;

// if (n < 8) {
//     console.log ("Your password is too short");
// }
// else {
//     console.log ("You are now logged on");
// }


// let num = 6;

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("Your number is divisible by 3 or 5");
// }
// else {
//     console.log("Your number is not divisible by 3 or 5");
// }


// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("fizzbuzz");
// }
// else if (num % 3 == 0) {
//     console.log("fizz");
// }
// else if (num % 5 == 0) {
//     console.log("buzz");
// }
// else {
//     console.log(num);
// }


let space1 = "X";
let space2 = "X";
let space3 = "X";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");

if (space1 == "O" && space2 == "O" && space3 == "O") {
    console.log("O has won");
}
else if (space1 == "X" && space2 == "X" && space3 == "X") {
    console.log("X has won");
}


let age = 59;
let adult = "£10.95";

if (age > 17 && age < 60) {
    console.log(`Price of ticket is ${adult}`);
}
else if (age > 59) {
    console.log("Price of ticket is £7.50");
}
else {
    console.log("Price of ticket is £8");
}

