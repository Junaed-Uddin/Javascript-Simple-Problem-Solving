/* 
Remove the duplicate element in the array
*/

const numbers = [12, 23, 34, 34, 23, 76, 45, 56, 65, 67, 76, 65];

const uniqueNumbers = [];

function duplicateRemove(numbers) {
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if (uniqueNumbers.indexOf(number) === -1) {
            uniqueNumbers.push(number);
        }
    }
    return uniqueNumbers;
}

let result = duplicateRemove(numbers);
console.log(result);