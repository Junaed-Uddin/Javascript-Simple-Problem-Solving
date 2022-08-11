/* 
Write a function that will convert day to sec
*/

function dayToSec(days) {
    const sec = days * 24 * 60 * 60;
    return sec;
}

let second = dayToSec(365);
console.log(second);