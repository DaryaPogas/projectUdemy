'use strict'
                    //FUNCTION DECLARATION
let num = 20;
function showFirstMessage (text) {
    console.log (text);
    num = 0;
}
showFirstMessage ('Hello World');
console.log (num);


function calc(a, b) {
    return a + b;
}
console.log (calc (9, 9));


function ret () {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log (anotherNum)

                            //FUNCTION EXPRESSION
let logger = function (){
    console.log ('Hello')
};

logger()

                            //ARROW FUNCTION ()=>{}
 const calc = (a, b) => a + b;
 
// ***                              ***                             ***                         ***

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
}

function promo (result) {
    console.log (result * discount)
}

// convert (500, usdCurr);
// convert (500, eurCurr);
promo (convert(500, usdCurr))



function test (){
    for (let i = 0; i < 5; i++){
        console.log (i);
        if (i ===3) return
    }
    console.log ('done')
}
test();


function doNothing () {};
console.log (doNothing() === undefined)