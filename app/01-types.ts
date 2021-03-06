// Types allow us to give our variables a specific data type. Any data type other than the implicit type we give that variable will result in an error

// We must declare what data type our variable will be when we declare the variable itself

// Plain JS
// let x = 7;
// x = 'seven';

let username: string = 'instructor';
let password: string = 'letmein1234';
let instructorID: number = 5;

let phoneNumber: number;
let email: string;
let social: number;
let isMarried: boolean;

// NUMBERS
let age: number = 27;
let currentYear: number = 2020;

// STRINGS
let companyName: string;
companyName = 'Eleven Fifty';

let appName: string = "Twitter";
appName = 'Instragram';

// BOOLEANS
let isLoggedIn: boolean = true;

// ARRAYS
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya'];

let allScores: Array<number> = [100, 92, 89, 76];
console.log('studentList', studentList[0]);

// ANY
// We can toggle off forced types by using the 'any' data type. This is especially nice during development if we're not sure what data type a variable will receive

let dataFromThirdParty: any = '1234';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

// VOID
// Void type has no data type at all - it is basically the exact opposite of the 'any' data type. May commonly see this used as the return in functions that don't return a specific value or data type

function sayHello2(): void {
    console.log('Hello World');
}

// NULL & UNDEFINED
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

// TUPLE
// Tuple types allow you to create an array with multiple data types

let usernameAndId: [string, number, boolean] = ['userOne', 1, false];

// ENUM
// Enums allow us to give names to numeric values

enum WeaponType {Sword, Saber, Spear};
let weapon: WeaponType = WeaponType.Sword;
console.log(weapon);

// Like arrays, enums start at 0, but that starting index can be assigned to a different number
enum CardType {Ace = 1, Two, Three, Four};
let card: string = CardType[0];
console.log(card); // undefined because first index is now 1

// UNION TYPES
// Union types allow us a bit more flexibility with our variables, and we can assign them multiple data types

let x: number | string;
let y: number | null;

x = '1234';
x = 1234;
