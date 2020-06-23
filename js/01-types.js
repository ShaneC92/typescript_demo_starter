// Types allow us to give our variables a specific data type. Any data type other than the implicit type we give that variable will result in an error
// We must declare what data type our variable will be when we declare the variable itself
// Plain JS
// let x = 7;
// x = 'seven';
var username = 'instructor';
var password = 'letmein1234';
var instructorID = 5;
var phoneNumber;
var email;
var social;
var isMarried;
// NUMBERS
var age = 27;
var currentYear = 2020;
// STRINGS
var companyName;
companyName = 'Eleven Fifty';
var appName = "Twitter";
appName = 'Instragram';
// BOOLEANS
var isLoggedIn = true;
// ARRAYS
var studentList = ['Tom', 'Tracy', 'Nikaya'];
var allScores = [100, 92, 89, 76];
console.log('studentList', studentList[0]);
// ANY
// We can toggle off forced types by using the 'any' data type. This is especially nice during development if we're not sure what data type a variable will receive
var dataFromThirdParty = '1234';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// VOID
// Void type has no data type at all - it is basically the exact opposite of the 'any' data type. May commonly see this used as the return in functions that don't return a specific value or data type
function sayHello2() {
    console.log('Hello World');
}
// NULL & UNDEFINED
var undefinedVariable = undefined;
var nullVariable = null;
// TUPLE
// Tuple types allow you to create an array with multiple data types
var usernameAndId = ['userOne', 1, false];
// ENUM
// Enums allow us to give names to numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
;
var weapon = WeaponType.Sword;
console.log(weapon);
// Like arrays, enums start at 0, but that starting index can be assigned to a different number
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
;
var card = CardType[0];
console.log(card); // undefined because first index is now 1
// UNION TYPES
// Union types allow us a bit more flexibility with our variables, and we can assign them multiple data types
var x;
var y;
x = '1234';
x = 1234;
//# sourceMappingURL=01-types.js.map