// Anotations, return types, optionals
// ANOTATIONS
// Anotations allow us to give our parameters data types as well as limit the number of arguments we pass in
// PLAIN JS:
// function demoFunction(someNum, someString) {
//     return someNum;
// }
// demoFunction(1);
// demoFunction('stuff');
// demoFunction(1, 'stuff');
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
// Works
addNumbers(1, 2);
// Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, 'foo');
/*
CHALLENGE
**********

    -Create a TypeScript function that concatenates two strings (firstName & lastName) and returns a full name
*/
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
fullName('Shane', 'Cox');
console.log(fullName('Shane', 'Cox'));
// RETURN TYPES
// Return Types allow us to specify what data typewe should expect from the return of our function
// PLAIN JS:
/*
function hello(greetingString){
    return greetingString;
}
hello(1);
*/
function sayHello(name) {
    return name;
}
sayHello('Kenn');
// sayHello(1); Errors out
/*
CHALLENGE
************
    1. create a function with a return type of boolean.
    2. the function takes in a string username and string password for it's parameters.
    3. inside the function have a conditional that checks if the username is set to elevenfiftyuser and the password is Letmein1234!.
    4. if both conditions are true, the function should return true.
    5. if one or both conditions are false the function should return false.
*/
function challenge(username, password) {
    if (username === 'elevenfiftyuser' && password === 'Letmein1234') {
        return true;
    }
    else {
        return false;
    }
}
challenge('elevenfiftyuser', 'Letmein1234');
console.log(challenge('elevenfiftyuser', 'Letmein1234'));
// OPTIONALS
// Optionals allow for flexibility in our parameters. With optionals we can allow an argument to be left out if needed. Optionals are declared by placing a question mark after the parameter name
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, 'this is optional');
//Optionals always have to be placed last in the parameters
/*
CHALLENGE
************
    1. write a function that has three parameters: first, middle, last that returns a type of string
    2. the middle param should be optional and first and last should be required strings.
    3. if a value is passed in for middle, concatenate the fullname and include the middle name.
    4. if a value is not passed in for middle, concatenate the fullname with just first and last.
*/
function Challenge2(first, last, middle) {
    if (middle !== undefined) {
        return first + ' ' + middle + ' ' + last;
    }
    else {
        return first + ' ' + last;
    }
}
var myName = Challenge2('Shane', 'Cox');
console.log(myName);
var myName2 = Challenge2('Shane', 'Cox', 'Michael');
console.log(myName2);
//# sourceMappingURL=02-functions.js.map