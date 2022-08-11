/* 
Calculate the odd even sum of the array
*/

const numbers = [2, 3, 12, 5, 4, 9, 16, 23, 30, 37, 50];
let oddSum = 0;
let evenSum = 0;

function oddEvenSum(numbers) {
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if (number % 2 == 0) {
            evenSum += number;
        }
        else {
            oddSum += number;
        }
    }
    return {
        evenSum, oddSum
    }
}

let evenResult = oddEvenSum(numbers).evenSum;
let oddResult = oddEvenSum(numbers).oddSum;
console.log('Even:',evenResult, ',', 'Odd:' ,oddResult);