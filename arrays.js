const arr = [1, 12, 3, 16, 8];

arr.sort(compareNum);
console.log(arr)

function compareNum(a,b){
    return a-b
}

arr.pop() // удаляет последний элемент массива
console.log (arr)
arr.push(10) // добавляет элемент массива в конец
console.log(arr)

for (let i = 0; i < arr.length; i++){
    console.log (arr[i])
}

for (let value of arr) {
    console.log(value)
}


// arr[99] = 0; //некорректная работа метода lenght
// console.log (arr.length)

arr.forEach(function(item, i, arr){
    console.log (`${i}: ${item} внутри массива ${arr}`)
})

const str = promt ('fhgff', '');
const products = str.split (', ');
products.sort();
console.log (products.join(';'));
