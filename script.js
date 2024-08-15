'use strict';
// const humburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (humburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log ('я остаюсь')
// } else {
//     console.log ('уходим!');
// }

//let johnReport, alexRepot, samReport, mariaReport = 'done';

//console.log(!0);// ! возвращает противоположное значение
let num = 50;
while (num <= 55) {
    console.log(num)
    num++;
}

do {
    console.log(num)
    num++;
}
while (num < 55);

let num2 = 50
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue //пропускает тот шаг который нам не нужен 
    }
    console.log(i);
}


for (let i = 0; i < 3; i++)  {
    console.log (i);
    for (let j = 0; j < 3; j++){
        console.log(j)
    }
}

let result = '';
const length = 7;

for (i = 1; i < length; i++) {
    for (j = 0; j < i; j++){
        result += '*';
    }
    result += '\n';
}

console.log(result);


/*first: for (let i = 0; i < 3; i++)  { //first в данном случае это метка
    console.log (`First level: ${i}`);
    for (let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++){
            if (k === 2){
                continue first;
            }
            console.log(`Third level: ${k}`);
    }
}
}*/
// for (i = 5; i <=10; i++){
//     console.log(i)
// }

// for (i = 20; i > 10; i--){
//     if (i === 13) {
//         break;
//     };
//     console.log (i);
// }

// for (i = 2; i <= 10; i++){
//     if (i%2 === 0){
//         console.log(i)
//     }
// }

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 1;
while (i <= 16 ){
    if(i % 2 !== 0){
        console.log(i)
    }
    i++
}

let array = []
for (i = 5; i <=10; i++) {
    array.push(i)
}
console.log (array)

let resultArray = [];
for (j = 0; j < array.length; j++){
    resultArray.push(array[j])
}
console.log(resultArray)


let data = [5, 10, 'Shopping', 20, 'Homework'];
// for (i = 0; i < data.length; i++){
//     if (typeof(data[i]) === 'string'){
//         data[i] = data[i] + ' done';
//     }
//     if (typeof(data[i]) === 'number') {
//         data[i] = 2 *data[i] ;
//     }
// }
// console.log (data)

let dataInReverse = [];
for (i = data.length - 1; i >= 0; i--){
    dataInReverse.push(data[i]);
}
console.log(dataInReverse)


const lines = 5;
let result = '';
for (i = 0; i < lines; i++) {
    for (let j = 0; j < lines - i -1; j++){
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result)