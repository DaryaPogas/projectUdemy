// 'use strict'
//                     //FUNCTION DECLARATION
// let num = 20;
// function showFirstMessage (text) {
//     console.log (text);
//     num = 0;
// }
// showFirstMessage ('Hello World');
// console.log (num);


// function calc(a, b) {
//     return a + b;
// }
// console.log (calc (9, 9));


// function ret () {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log (anotherNum)

//                             //FUNCTION EXPRESSION
// let logger = function (){
//     console.log ('Hello')
// };

// logger()

//                             //ARROW FUNCTION ()=>{}
//  const calc = (a, b) => a + b;
 
// // ***                              ***                             ***                         ***

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert (amount, curr) {
//     return curr * amount;
// }

// function promo (result) {
//     console.log (result * discount)
// }

// // convert (500, usdCurr);
// // convert (500, eurCurr);
// promo (convert(500, usdCurr))



// function test (){
//     for (let i = 0; i < 5; i++){
//         console.log (i);
//         if (i ===3) return
//     }
//     console.log ('done')
// }
// test();


// function doNothing () {};
// console.log (doNothing() === undefined)



// function sayHello(name) {
//     return`Привет, ${name}!`;
// }

// console.log(sayHello('Alex'));


// function returnNeighboringNumbers (num){
//     return [num -1 , num, num + 1]
// }
// console.log (returnNeighboringNumbers(5))

// function getMathResult (a,b) {
//     if (typeof (b) !=='number' || b <= 0) {
//         return a;
//     } 
//     let result = '';
//     for (let i = 1; i <= b; i++){
//             result += a * i;
//             if (i < b) {
//                 result += '---';
//             }
//         }
//         return result; 
//     }

// console.log(getMathResult(5, 3));
// console.log(getMathResult(10, 15));

function calculateVolumeAndArea (side){
    let volume = Math.pow (side, 3);
    let area = 6 *Math.pow (side, 2);
    if (typeof(side) !== 'number'|| side % 1 !== 0 || side === 0){
        console.log ('При вычислении произошла ошибка')
    } else {
        console.log (`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
    }
};
calculateVolumeAndArea(5)
calculateVolumeAndArea(5.7)
calculateVolumeAndArea ('6')
calculateVolumeAndArea (0)


function getCoupeNumber (seat){
    if (typeof(seat) !== 'number' || seat < 0 || seat % 1 !== 0){
        console.log ('Ошибка. Проверьте правильность введенного номера места')
    }
        else if  (seat === 0 || seat > 36 ){
            console.log ('Таких мест в вагоне не существует')
        }
        else if ( seat >= 1 && seat <= 4){
            console.log (1)
        }
        else if ( seat >= 5 && seat <= 8){
            console.log (2)
        }
        else if ( seat >= 9 && seat <= 12){
            console.log (3)
        }
        else if ( seat >= 13 && seat <= 16){
            console.log (4)
        }
        else if ( seat >= 17 && seat <= 20){
            console.log (5)
        }
        else if ( seat >= 21 && seat <= 24){
            console.log (6)
        }
        else if ( seat >= 25 && seat <= 28){
            console.log (7)
        }
        else if ( seat >= 29 && seat <= 32){
            console.log (8)
        }
        else if ( seat >= 33 && seat <= 36){
            console.log (9)
        }
}
getCoupeNumber (33)
getCoupeNumber (40)
getCoupeNumber ('78')
getCoupeNumber (4.6)