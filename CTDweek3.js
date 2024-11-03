'use strict';

const myPet = {
    name: 'Leo',
    species: 'Domestic',
    color: 'grey'
}

console.log("Q1 name: ", myPet.name);
console.log("Q1 species: ", myPet.species);
console.log("Q1 color: ", myPet.color);


let aboutPet = `${myPet.name} is a ${myPet.species} ${myPet.color}.`
console.log("Q2: ", aboutPet);

myPet.birthYear = 2019;
//console.log(myPet)

myPet.age = function() {
    let today = new Date()
    let yearCurrent = today.getFullYear()
    return yearCurrent - this.birthYear
};

console.log("Q3 age: ", myPet.age());

myPet.animal = 'cat';

myPet.isDog = function (){
    let speciesChecker = 'dog'
    return speciesChecker == myPet.animal
}
console.log ("Q4: ", myPet.isDog())



const library = [
    {title: 'It',
    author: 'Stephen King',
    libraryID: 7777},
    
    {title: 'What Lies Between Us',
    author: 'John Marrs',
    libraryID: 5678},

    {title: 'The Perfect Child',
    author: 'Lucinda Berry',
    libraryID: 8787},
]
//console.log (library)


function sortArray (array){
    let sortedArray = array.slice();
    return sortedArray.sort(function (a, b) {return a.libraryID - b.libraryID})
}
console.log('Q5 sorted Array by libraryID:', sortArray(library))


function addTypeProperty (array){
    let copiedArray = array.slice();
    return copiedArray.map(b => ({...b, type: 'book'}))
}
console.log('Q6 added property:', addTypeProperty(library))


function addNewObject (array, obj){
    let copiedArray = array.slice();
    copiedArray.push(obj);
    return copiedArray;
}
console.log('Q7 added new object:', addNewObject(library, {title:'JavaScript: The Definitive Guide',author:'David Flanagan',libraryID: 6248}))