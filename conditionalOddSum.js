/* Write a function that will take an array and calculate the sum of odd numbers 
greater than 10 and less than 50 */

const arrNumbers = [4, 7, 10, 23, 12, 42, 39 ,15, 45, 29, 87, 50, 52];
let sum = 0;
function oddSum(arrNumbers) {
    for (let i = 0; i < arrNumbers.length; i++) {
        const number = arrNumbers[i];
        if (number > 10 && number < 50) {
            if (number % 2 != 0) {
                sum += number;
            }
        }
    }
    return sum;
}

let result = oddSum(arrNumbers);
console.log(result);