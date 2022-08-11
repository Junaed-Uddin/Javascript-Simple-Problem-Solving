/* 
Find the largest number in the array
*/

const numbers = [2, 4, 45, 115, 12, 54, 90, 5, 34];
let temp = numbers[0];

function findLargeNumber(numbers) {
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if (number > temp) {
            temp = number;
        }
    }
    return temp;
}

var result = findLargeNumber(numbers);
console.log(result);