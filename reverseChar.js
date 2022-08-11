/* 
Print the array character in reverse way
*/

const arr = 'This is John Nelson from USA';
let newString = '';

function reverseString(text) {
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = text[i];
        newString = newString + element;
    }
    return newString;
}

var output = reverseString(arr);
console.log(output);