/* 
 Sort the array element in ascending order
*/

const numbers = [2, 4, 45, 115, 12, 54, 90, 5, 34, 8, 10, 23];
let temp;
function sortNumber(numbers) {
    for (let i = 0; i < numbers.length; i++){
        for (j = i + 1; j < numbers.length; j++){
            if (numbers[i] > numbers[j]) {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

var result = sortNumber(numbers);
console.log(result);