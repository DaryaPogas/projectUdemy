// PUT YOUR CODE HERE
function repeat(parameter) {
    for (let i = 0; i < parameter; i++) {
      console.log('Q1 (for loop): ' + "Hello World!");
    }
  }
  repeat(3);

  function repeatVersion2 (parameter){
    let i = 0;
    while (i < parameter){
        console.log ('Q1 (while loop): ' + "Hello World")
        i++
    }
  }
  repeatVersion2 (4)

  // ---------- QUESTION 2 ----------
  // Write a function called 'pyramidCounting' that takes 1 integer parameter and returns the sum of all of the numbers between 0 and the parameter.
  
  // EXAMPLE LOG:
  //    console.log("Q2: ", pyramidCounting(4));
  // EXAMPLE OUTPUT:
  //    Q2: 10
  // The mathematical explanation of this is 0+1+2+3+4 = 10.
  
  //PUT YOUR CODE HERE
  function pyramidCounting (num) {
    if (num == 1) return 1;
    return num + pyramidCounting(num - 1);
  }
  console.log ('Q2: ' + pyramidCounting(4));
  console.log ('Q2: ' + pyramidCounting(10));

  // ---------- QUESTION 3 ----------
  // Write a function called 'noVowels' that take a string parameter and removes vowels from that string using a loop.
  
  // EXAMPLE LOG:
  //    console.log("Q3: ", noVowels(adventurous));
  // EXAMPLE OUTPUT:
  //    Q3: dvntrs
  
  // PUT YOUR CODE HERE
  
  function noVowels (string) {
   let  newString = string.replace(/[aeiou]/gi, '');
   return newString;
    }
  console.log('Q3: ' + noVowels('adventurous'))  
  console.log('Q3: ' + noVowels('Darya Pogas My NAME'))  

  
  // ---------- QUESTION 4 ----------
  // Write a function called 'vowelCount' that takes 1 string parameter and returns the number of vowels in that string.
  
  // EXAMPLE LOG:
  //    console.log("Q4: ", vowelCount('I love to code.'));
  // EXAMPLE OUTPUT:
  //    Q4: 6
  
  // PUT YOUR CODE HERE
  

  function vowelCount (string){
    let numVowels = string.match(/[aeiou]/gi).length;
    return numVowels;
  }
  console.log ('Q4: ', vowelCount('I love to code.'))


  // ---------- QUESTION 5 ----------
  // Write a function called 'numOfOdds' that takes 1 integer parameter and returns the number of odd numbers between 0 and that number, including the number if it's odd. (Hint: Use the modulo operator)
  
  // EXAMPLE LOG:
  //    console.log("Q5: ", numOfOdds(15));
  // EXAMPLE OUTPUT:
  //    Q5: 8
  
  // PUT YOUR CODE HERE
  
  function numOfOdds (int){
    let sum = 0;
    for (i = 1; i <= int; i += 2){
      sum ++
    };
      return sum
  };

  console.log ('Q5: ', numOfOdds(15));
  console.log ('Q5: ', numOfOdds(3));

  // with modulo operator:
  function numOfOddsV2 (int){
    let sum = 0;
    for (i = 1; i <= int; i ++){
      if ( int % 2 !== 0){
        sum ++
      }
      return sum
    };  
  };

  console.log ('Q5 with modulo operator: ', numOfOdds(15));
  console.log ('Q5 with modulo operator: ', numOfOdds(30));

  // ---------- QUESTION 6 ----------
  // Create two variables named 'empty' and 'full'.  Assign an empty array to the 'empty' variable and any array of strings or numbers to the 'full' variable.  Write a function called 'arrayChecker' that returns true if the array passed as a parameter is empty and false if not.  Check both the 'empty' and 'full' variables to make sure they are returning the expected values.
  
  // EXAMPLE LOGS:
  //    console.log("Q6 empty: ", arrayChecker(empty));
  //    console.log("Q6 not empty: ", arrayChecker(full));
  // EXAMPLE OUTPUTS:
  //    Q6 empty: true
  //    Q6 not empty: false
  
  // PUT YOUR CODE HERE
  let empty = [];
  let full = ['f', 'u', 'l', 'l'];

  function arrayChecker(arr){
    return  arr.length === 0 
    }
  console.log ("Q6 empty: ", arrayChecker(empty));
  console.log ("Q6 full: ", arrayChecker(full));

  
  // ---------- QUESTION 7 ----------
  // Write a function called 'getElementAt' that takes an array parameter and an integer parameter.  The function should return the element in the array at the given number index or 'null' if it doesn't exist.  Use your 'full' variable from Question 6 to test.
  
  // EXAMPLE LOGS:
  //    console.log("Q7: ", getElementAt(full, 2));
  //    console.log("Q7: ", getElementAt(full, 7));
  // EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
  //    Q7: code
  //    Q7: null
  function getElementAt (arr, int) {
    if (arr. length < int - 1){
      return null
    } else {
    return element = arr[int]
    }
  };
  console.log("Q7: ", getElementAt(full, 2));
  console.log("Q7: ", getElementAt(full, 7));

  // ---------- QUESTION 8 ----------
  // Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array.  The function should return the NEW array.  Use your 'full' variable from Question 6 to test.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
  // let newArray = originalArray.slice()
  // LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.
  
  // EXAMPLE LOG:
  //    console.log("Q8: ", insertInArray(full));
  //    console.log("original array: ", full);
  // EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
  //    Q8: ["dream", 0, 19, "code", 24, 180]
  //    original array: ["dream", 19, "code", 24, 180]
  
  // PUT YOUR CODE HERE
  function insertInArray(arr){
    let newArray = arr.slice();
    newArray.splice(1, 0, '0');
    return newArray;
  }
  console.log("Q8: ", insertInArray(full));
  console.log("Q8 original array: ", full);

  // ---------- QUESTION 9 ----------
  // Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not.  The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those.  To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well.
  
  // REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.
  
  // EXAMPLE LOG:
  //    console.log("Q9 same: ", compareArrays(full, compare));
  // EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
  //    Q9 same: true
  
  // EXAMPLE LOG:
  //    console.log("Q9 different: ", compareArrays(full, empty));
  // EXAMPLE OUTPUT: (if using variables from Question 6)
  //    Q9 different: false
  
  // EXAMPLE LOG:
  //    console.log("Q9 partial: ", compareArrays(full, part));
  // EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
  //    Q9 different: false
  
  // PUT YOUR CODE HERE
  
  let part = ['f', 'u'];

  function compareArrays(arr1, arr2){
     if (arr1.length !== arr2.length){
      return false
     }
     for (let i = 0; i < arr1.length; i++){
       if ( arr1[i] === arr2[i]){
        return true
       }
     } 
    return false
  };
 console.log("Q9 different: ", compareArrays(full, empty));
 console.log("Q9 partial: ", compareArrays(full, part));
 console.log("Q9 equal: ", compareArrays(full, full));

  // ---------- QUESTION 10 ----------
  // Create a variable called 'numbers' and assign it an array with at least 3 numbers as elements (example: [10, 3, 4]).  Write a function called 'calculateTotal' that takes one array parameter and loops through the array in order to return the sum of all the array elements.
  // STRETCH GOAL: use the `reduce()` method
  
  // EXAMPLE LOG:
  //    console.log("Q10: ", calculateTotal(numbers));
  // EXAMPLE OUTPUT: (if the array assigned to variable 'numbers' is [3, 4, 2 ,8])
  //    Q10: 17
  
  // PUT YOUR CODE HERE
  let numbers = [3, 4, 2 ,8];
  function calculateTotal(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
      total += arr[i];
    }
    return total
  }
  console.log("Q10: ", calculateTotal(numbers));



  // ---------- QUESTION 11 ----------
  // Write two functions called 'findEvens' and 'findOdds' that each take one array parameter and each returns a NEW Array of all the even or odd numbers as indicated.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
  // let newArray = originalArray.slice()
  // STRETCH GOAL: use the `filter()` method
  
  // EXAMPLE LOG:
  //    console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]));
  //    console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));
  // EXAMPLE OUTPUT:
  //    Q11 evens: [10,2,6]
  //    Q11 odds: [3,19,7,93]
  
  // PUT YOUR CODE HERE
  let num  = [10,2,3,19,7,6,93];

  function findEvens(newArr){
    let evens = [];

    for (let i = 0; i < newArr.length; i++){
      if ( newArr[i] % 2 === 0){
        evens.push(newArr[i])
      }
    }
    return evens
  };

  function findOdds(newArr){
    let odds = [];
    
    for (let i = 0; i < newArr.length; i++){
      if ( newArr[i] % 2 !== 0){
        odds.push(newArr[i])
      }
    }
    return odds
  };

  console.log("Q11 evens: ", findEvens(num));
  console.log("Q11 evens: ", findOdds(num));
  
  // ---------- QUESTION 12 ----------
  // Write a function called 'makeSquares' that takes one array parameter and returns a NEW Array with the squared values of each of the numbers.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
  // let newArray = originalArray.slice()
  // STRETCH GOAL: use the `map()` method
  
  // EXAMPLE LOG:
  //    console.log("Q12: ", makeSquares([2,5,8]));
  // EXAMPLE OUTPUT:
  //    Q12: [4,25,64]
  
  // PUT YOUR CODE HERE
  function makeSquares(arr){
    let squared = [];
    for (let i = 0; i < arr.length; i++){
       Math.pow(arr[i], 2);
       squared.push(Math.pow(arr[i], 2))
      }
    return squared 
    };
    console.log("Q12: ", makeSquares([2,5,8]));

    function makeSquaresV2 (arr){
      return arr.map((num) => Math.pow(num, 2))
    };
    console.log("Q12: ", makeSquaresV2([2,5,8]));

  // ---------- BONUS QUESTION / STRETCH GOAL ----------
  // Back in the old days, the early 2000s, this was a famous technical interview question. Write a function definition that takes NO parameters. The function will loop from 1 to 15 and return an array of numbers. While looping, the function will check if the current value in the loop is divisible by 3, by 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "fizzbuzz" to the array. If the number isn't divisible by 3, 5, OR both, it will add the number to the array.  The function will return the array of values.
  
  // EXAMPLE LOG:
  //    console.log("BONUS: ", fizzBuzz();
  // EXAMPLE OUTPUT:
  //    BONUS: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']
  
  // PUT YOUR CODE HERE
  function fizzBuzz (){
    let arr = [];
    for (let i = 1; i <= 15; i++){
      if (i % 3 === 0 && i % 5 === 0){
        arr.push(i + ' fizzbuzz')
      } else if (i % 3 === 0){
        arr.push(i + ' fizz')
      } else if (i % 5 === 0){
        arr.push(i + ' buzz')
      } else {
        arr.push(i)
      }
    } 
    return arr;
  }
  console.log("BONUS: ", fizzBuzz());