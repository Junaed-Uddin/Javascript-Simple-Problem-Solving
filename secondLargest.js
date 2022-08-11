/* 
Find the second largest number in the array
*/

// method-1
const numbers = [12, 23, 88, 98, 34, 45, 56, 67, 78, 10];

function checkNumber(numbers) {
    let temp;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

let sortAsc = checkNumber(numbers);
console.log(sortAsc[sortAsc.length - 2]);


// method-2
let firstLarge = numbers[0];
let secondLarge = numbers[0];

function getLargeNumber(numbers) {
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > firstLarge) {
            firstLarge = numbers[i];
        }
    }
    return firstLarge;
}

let firstNumber = getLargeNumber(numbers);

function getSecondNumber(numbers) {
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > secondLarge && numbers[i] != firstNumber) {
            secondLarge = numbers[i];
        }
    }
    return secondLarge;
}

let secondNumber = getSecondNumber(numbers);
console.log(secondNumber);


// method-3
let sortNumber = numbers.sort(function (a, b) {
    return a - b;
})

console.log(sortNumber[sortNumber.length - 2]);
