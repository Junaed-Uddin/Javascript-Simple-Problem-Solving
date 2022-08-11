/* 
Find the smallest number in the array element
*/

const numbers = [0, 2, 34, 45, 23, 78, 18, 67, 1, 56, 90];
let temp = numbers[0];

function findNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < temp) {
            temp = numbers[i];
        }
    }
    return temp;
}

let smallNumber = findNumber(numbers);
console.log(smallNumber);