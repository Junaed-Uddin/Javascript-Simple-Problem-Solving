/* 
Calculate the avg of the numeric array element 
*/

const numbers = [1, 4, 7, 22, 11, 34, 44, 29];

let sum = 0;
let avgNumber;
function findAvg(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        sum += number;
        avgNumber = sum / numbers.length;
    }
    return avgNumber;
}

let avgResult = findAvg(numbers);
console.log(avgResult);