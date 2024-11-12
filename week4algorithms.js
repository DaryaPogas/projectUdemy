'use strict'

let numbersArray = [1, 2, 3, 5];
function pairsMaker (array){
   let pair = []; 
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++) {  
            pair.push ([ array[i],  array[j]])
            }
        }
    return pair    
}
console.log (`Q1: input: [${numbersArray}], output:`, pairsMaker(numbersArray));



let q2TestArray = [1, 2, 3, 4, 5];
function twoSum (array, target){
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++) {
            if ( array[i] + array[j] === target) {
               return  true
            }
        }
    }
    return false
}
console.log (`Q2 twoSum: input: ([${q2TestArray}], 7), output:`, twoSum(q2TestArray, 7));
console.log (`Q2 twoSum: input: ([${q2TestArray}], 1), output:`, twoSum(q2TestArray, 1));
console.log (`Q2 twoSum: input: ([${q2TestArray}], 0), output:`, twoSum(q2TestArray, 0));
console.log (`Q2 twoSum: input: ([${q2TestArray}], 3), output:`, twoSum(q2TestArray, 3));



let q3TestArray = [4, 6, 3, 4, 5];
function pairProduct (array, product) {
    for (let i = 0; i < array.length; i++){
                for (let j = i + 1; j < array.length; j++) {
                    if ( array[i] * array[j] === product) {
                       return  true
                    }
            }
        }
    return false
};
console.log (`Q3 pairProduct: input: ([${q3TestArray}], 18), output:`, pairProduct(q3TestArray, 18));
console.log (`Q3 pairProduct: input: ([${q3TestArray}], 100), output:`, pairProduct(q3TestArray, 100));
console.log (`Q3 pairProduct: input: ([${q3TestArray}], -1), output:`, pairProduct(q3TestArray, -1));
console.log (`Q3 pairProduct: input: ([${q3TestArray}], 12), output:`, pairProduct(q3TestArray, 12));


let q4TestArray = [2, -3, 3, 4, -2];
function strangeSums (array){
   let sumZero = []; 
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++) {  
            if ( array[i] + array[j] === 0) {
                 sumZero.push ([ array[i],  array[j]]); 
            }
        }
    }
    return sumZero.length
};
console.log (`Q4: input: [${q4TestArray}], output:`, strangeSums(q4TestArray));
let q4TestArray2 = [100, 8, 1, -1, 5]
console.log (strangeSums(q4TestArray2))