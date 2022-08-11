/* 
Write a function that will check the leap year
*/

function checkLeapYear(year) {
    if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
        return 'Leap Year';
    }
    else 
        return 'Not Leap Year'
}

let yearCheck = checkLeapYear(1900);
console.log(yearCheck);
