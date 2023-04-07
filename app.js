// // Question no 1
let firstValue = +prompt("Enter your first value");
let secondValue = +prompt("Enter your second value");
if (firstValue > secondValue) {
    console.log(`Number ${firstValue} is greater than ${secondValue}`)
}
else if(secondValue > firstValue){
    console.log(`Number ${secondValue} is greater than ${firstValue}`)
}
else{
    console.log(`First Value: ${firstValue}, and The second value: ${secondValue}, are equal`)
}

// Question no 2
let userValue = +prompt("Enter a number");
if (userValue > 0) {
    console.log("The sign is +")
}
else if (userValue < 0){
    console.log("The sign is -")
}
else(
    console.log('NaN')
)

// Question no 3
let UserInput1 = +prompt("Enter first value");
let UserInput2 = +prompt("Enter second value");
let UserInput3 = +prompt("Enter third value");
let UserInput4 = +prompt("Enter fourth value");
let UserInput5 = +prompt("Enter fifth value");

let largestVal = UserInput1
if (UserInput2 > largestVal) {
    largestVal = UserInput2
}
if (UserInput3 > largestVal) {
    largestVal = UserInput3
}
if (UserInput4 > largestVal) {
    largestVal = UserInput4
}
if (UserInput5 > largestVal) {
    largestVal = UserInput5
}
console.log(`The Largest value is: ${largestVal}`);

// Question no 4
for (let i = 0; i < 15; i++) {
   if (i % 2 === 0) {
    console.log(`${i} is Even`)
   } else {
    console.log(`${i} is Odd`)
   }
}

// Question no 5
let DBMS = +prompt("Enter Your DBMS marks");
let DataStructures = +prompt("Enter Your Data Structures marks");
let WebEngineering = +prompt("Enter Your Web Engineering marks");
let ProfessionalPractice = +prompt("Enter Your Professional Practice marks");
let numOfSubs = 4;
let obtMarks = DBMS + DataStructures + WebEngineering + ProfessionalPractice;
let totalMarks = numOfSubs * 100;
let average = obtMarks / totalMarks;
let result = average * 100;

if (result < 60) {
    console.log('Your Grade is "F')
}
else if(result < 70){
    console.log('Your Grade is "D')
}
else if(result < 80){
    console.log('Your Grade is "C"')
}
else if(result < 90){
    console.log('Your Grade is "B')
}
else if(result < 100){
    console.log('Your Grade is "A')
}
console.log(`Your Percentage is: ${result}`);

// Question no 6
for (let i = 0; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
   }
   else if(i % 3 === 0){
    console.log("Fizz")
   }
   else if(i % 5 === 0){
    console.log("Buzz")
   }
}
// Question no 7
let char;
for(i = 1; i <= 5; i++){
    let symbol = '';
    for (let j = 1; j <= i; j++) {
        symbol += '*';
    }
    console.log(symbol)
}