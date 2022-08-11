/* 
Calculate the square of the number
*/

function findSquare(number) {
    const squareNumber = Math.abs(number * number);
    return squareNumber;
}

let result = findSquare(-12);
console.log(result);