/* 
Find the largest number between three numbers
*/

function checkLargeNumber(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        }
        else
            return num3
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else
        return num3;
}

let largest = checkLargeNumber(15, 17, 18);
console.log(largest);