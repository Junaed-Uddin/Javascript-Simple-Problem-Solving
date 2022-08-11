/* 
Find the n-th factorial
*/
// for loop 
function getFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--){
        factorial *= i;
    }
    return factorial;
}

let result = getFactorial(7);
console.log(result);


// while loop 
function findFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial *= i;
        i--;
    }
    return factorial;
}

let finalResult = findFactorial(7);
console.log(finalResult);