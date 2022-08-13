/* 
Find the prime number in the array and sort those ascending order
*/
const numbers = [2, 37, 1, 19, 5, -1, 0, 67, 13, 11, 23];
// numbers.sort(function (a, b) {
//     return a - b;
// })
// console.log(numbers);

// sort the array 
function getSortNumbers(numbers) {
    let temp;
    for (let i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

let sortNumber = getSortNumbers(numbers);

// traverse the sort array 
function findPrime(sortNumber) {
    for (let i = 0; i < sortNumber.length; i++) {
        const number = sortNumber[i];
        if (number >= 2) {
            checkPrime(number);
        }
    }
}

// check the prime numbers 
let newPrime = [];
function checkPrime(number) {
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return newPrime.push(number);
}

findPrime(sortNumber);
console.log(newPrime);