/* Calculate the sum of those numbers that are divisible by 3 from 1 to n */

let sum = 0;
let count = 0;
function divisibleNumber(number) {
    for (let i = 1; i <= number; i++){
        if (i % 3 == 0) {
            sum += i;
            count++;
        }
    }
    let avgNumber = sum / count;
    return avgNumber;
}

let number = divisibleNumber(20);
console.log(number);