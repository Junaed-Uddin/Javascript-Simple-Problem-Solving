/* 
Find the prime numbers 
*/

function checkPrime(number) {
    if (number <= 1) {
        return 'Not a Prime Number..';
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return 'Not a Prime Number';
        }
    }
    return 'Prime Number..!!'
}

let result = checkPrime(6);
console.log(result);

