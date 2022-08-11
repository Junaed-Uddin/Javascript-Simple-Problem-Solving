/* 
Find the odd and even numbers
*/

function oddEven(number) {
    if (number % 2 == 0) {
        return 'Even';
    }
    else
        return 'Odd';
}

let result = oddEven(32);
console.log(result);