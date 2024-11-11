'use strict';

let names = ["Juan Marcos", "Aleksandra Ivanov", "Zhang Wei", "Bernice King"];

function printNames (array) {
    array.forEach(element => {
        console.log (element);
    });
};
console.log("Q1 printNames:");
printNames(names);


const trees = [
        { type: "oak", height: "30m" },
        { type: "elm", height: "25m" },
        { type: "birch", height: "18m" } ]
 
function logTreeType (array){
            array.forEach(element => {
                console.log (element.type)
            });
        };

console.log("Q2 logTreeType:");
logTreeType(trees);


let myNumbers = [1, 2, 7, 5, 8];
function totalPoints (array){
    let total = 0;
    array.forEach(element => {
        total += element
    });
    return total;
};
console.log (`Q3 totalPoints [${myNumbers}]:`, totalPoints(myNumbers));


let myWords = ["You","can","if","you","think","you","can","!"];
function buildSentence (array) {
       return array.join(' ')
};
console.log (`Q4 buildSentence [${myWords}]: `, buildSentence(myWords));


let decimals = [0.75, 0.918, 0.2, 1.34];
function logPercentages (array) {
    array.forEach(element => {
        console.log (Math.round(element * 100) + `%`)
    });
}
console.log("Q5 logPercentages:");
logPercentages(decimals);


let startingNums = [4, 41, 832, 72, 89];
function addThreeToAll (array) {
    return array.map(num => num + 3);
};
console.log (`Q6 addThreeToAll [${startingNums}]: `, addThreeToAll(startingNums));


let baseNums = [4, 41, 832, 72, 89];
function squareAll (array) {
    return array.map(num => num * num);
};
console.log (`Q7 squareAll [${baseNums}]:`, squareAll(baseNums));



//let names = ["Juan Marcos", "Aleksandra Ivanov", "Zhang Wei", "Bernice King"];

function allGreetings (array) {
   return array.map(element => {
       return `Hello, ${element}, nice to meet you!`
    });
}
console.log (`Q8 allGreetings [${names}]:`, allGreetings(names));


let users = [
    {
        username: "juan.marcos",
        isAdmin: false,
    },
    {
        username: "aleksandra.ivanov",
        isAdmin: false,
    },
    {
        username: "zhang.wei",
        isAdmin: false,
     },
     {
        username: "bernice.king",
        isAdmin: true,
     }
    ];

function getUsernames(array){
    return array.map(element =>{
        return element.username
    })
};    
console.log (`Q9 getUsernames:`, getUsernames(users));


function pluck(array,key){
    return array.map(element => element[key])
};
console.log (`Q10 pluck "isAdmin":`, pluck(users, "isAdmin"));


let numberArray = [4, 41, 832, 72, 89, 120, 431, 505, 70];
function evenNumbers(array){
    return array.filter(element => element % 2 === 0)
};
console.log (`Q11 evenNumbers [${numberArray}]:`, evenNumbers(numberArray));
let oddNums = [3, 45, 7, 89];
console.log (`Q11 evenNumbers, array with no even nums [${oddNums}]:`, evenNumbers(oddNums));


let numArray = [4, 41, 832, 72, 89, 120, 431, 505, 70];
function greaterThan100 (array){
    return array.filter(element => element > 100)
};
console.log (`Q12 greaterThan100 [${numArray}]:`, greaterThan100(numArray));
console.log (`Q12 array with no nums greater than 100 [${oddNums}]:`, greaterThan100(oddNums));


// let users = [
//     {
//         username: "juan.marcos",
//         isAdmin: false,
//     },
//     {
//         username: "aleksandra.ivanov",
//         isAdmin: false,
//     },
//     {
//         username: "zhang.wei",
//         isAdmin: false,
//      },
//      {
//         username: "bernice.king",
//         isAdmin: true,
//      }
//     ];
function nonAdminUsers (array){
    return array.filter(element => !element.isAdmin)
};
console.log (`Q13 nonAdminUsers:`, nonAdminUsers(users));


function countAdminUsers (array) {
    const countAdmins =  array.filter(element => element.isAdmin)
    return countAdmins.length;
};
console.log (`Q14 countAdminUsers:`, countAdminUsers(users));


let strings = [
  "Four score and seven years ago",
  "our forefathers brought forth on this continent a new nation",
  "conceived in liberty",
  "and dedicated to the proposition that all men are created equal",
  "Now we are engaged in a great civil war",
  "testing whether that nation",
  "or any so conceived and so dedicated",
  "can long endure.",
];

function shorterThanX (array, int){
    return array.filter (element => element.length < int)
};

console.log (`Q15 shorterThanX 20:`, shorterThanX(strings, 20));
console.log (`Q15 shorterThanX 30:`, shorterThanX(strings, 30));
console.log (`Q15 shorterThanX 0:`, shorterThanX(strings, 0));


let manyTypes = [4, "4", "four score", 80, {age: 80}, ["nations"], {type: "free"}, "states"];
function onlyStrings (array){
    return array.filter (element => typeof(element) === 'string')
}
console.log (`Q16 onlyStrings [${manyTypes}]:`, onlyStrings(manyTypes));


let array = [4,41,832,72,89,120,431,505,70];
function firstOdd (array){
    return array.find (element => element % 2 !== 0)
};
console.log (`Q17 firstOdd [${array}]:`, firstOdd(array));


function getAdministrator (array){
    return array.find(element => element.isAdmin)
};
console.log (`Q18 getAdministrator:`, getAdministrator(users));


let divArray = [4,41,832,72,89,120,431,505,70];
function divisibleByTen (array){
    return array.find(element => element % 10 === 0)
};
console.log (`Q19 divisibleByTen [${divArray}]:`, divisibleByTen(divArray));
let divArray1 = [4,41,832,72,89,431,505];
console.log (`Q19 divisibleByTen array with no nums are multiple by 10 [${divArray1}]:`, divisibleByTen(divArray1));



let numbers = [4,41,832,72,89,120,431,70];
function divisibleByX (array, int){
    return array.find(element => element % int === 0)
};
console.log (`Q20 divisibleByX ([${divArray}], 10):`, divisibleByX(numbers, 10));
console.log (`Q20 divisibleByX ([${divArray}], 3):`, divisibleByX(numbers, 3));
console.log (`Q20 divisibleByX ([${divArray}], 2):`, divisibleByX(numbers, 2));


let jokeStrings =
  ["Do you want to hear a joke?",
   "It's about a three-legged dog",
   "The dog walks into a bar",
   "The dog says, ",
   "\"I'm looking for the man who shot my paw\"",
   "Get it?"]
function startsWithLetter (array, letter){
    if (typeof letter !== 'string' || letter.length > 1){
        return ('Letter must be a string of length 1')
    };
    return array.find(element => element[0] === letter)
};
console.log (`Q21 startsWithLetter T:`, startsWithLetter(jokeStrings, "T"));
console.log (`Q21 startsWithLetter I:`, startsWithLetter(jokeStrings, "I"));
console.log (`Q21 startsWithLetter i:`, startsWithLetter(jokeStrings, "i"));
console.log (`Q21 startsWithLetter dog:`, startsWithLetter(jokeStrings, "dog"));