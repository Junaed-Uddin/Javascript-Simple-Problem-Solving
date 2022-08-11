/* Find the number that is divisible by 3 and 5 */

let numbers = [];
function divisibleNumber(number) {
    for (let i = 1; i <= number; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            numbers.push(i);
        }        
    }
    return numbers;
}

let result = divisibleNumber(100);
console.log(result);