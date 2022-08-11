/* 
Check if the number is positive or negative 
*/

function checkNumber(number) {
    if (number > 0) {
        console.log('Positive Number: ', number);
    }
    else if (number < 0) {
        console.log('Negative Number: ', number);
    }
    else if (number == 0) {
        console.log('Zero Number: ', number);
    }
    else
        console.log('Not a Number');
}

checkNumber('hj');