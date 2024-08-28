const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month.'
    }
};
const {languages, programmingLangs, exp} = personalPlanPeter.skills
const {js, php} = personalPlanPeter.skills.programmingLangs;

function showExperience(plan) {
    console.log (personalPlanPeter.skills.exp)
}
showExperience()

function showProgrammingLang(plan) {
    let str = '';
   for ( let key in personalPlanPeter.skills.programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}. `
   }
    console.log (str)
}
showProgrammingLang(personalPlanPeter)

function showAgeAndLangs() {
    let upperCaseLang = '';
    for (let language of personalPlanPeter.skills.languages){
        upperCaseLang += language.toUpperCase() + ', ';
    }
    upperCaseLang = upperCaseLang.slice(0, -2); // remove last comma and space
    console.log( `Мне ${personalPlanPeter.age} и я владею языками: ${upperCaseLang}.`)
}  
showAgeAndLangs(personalPlanPeter);


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if( arr.lenght === 0) {
        console.log ('Семья пуста')
    } else {
        const familyMembers = arr.join(', ') ;
        console.log(`Семья состоит из: ${familyMembers}.`);
    } 
}
showFamily(family)

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let standardString = [];

    for (let i = 0; i < arr.length; i++){
        standardString.push(arr[i].toUpperCase())
    }
    console.log(standardString.join(', '))
}
standardizeStrings(favoriteCities)
