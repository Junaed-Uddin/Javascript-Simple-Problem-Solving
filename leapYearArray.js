// Check year array to find leap year and create new array by pushing the leap year value.

const years = [1904, 1902, 2020, 2024, 2018, 2012, 2010, 2000];

const leapYear = [];
function checkYear(years) {
    for (let i = 0; i < years.length; i++){
        const year = years[i];
        if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
            leapYear.push(year);
        }
    }
    return leapYear;
}

let output = checkYear(years);
console.log('Leap Years: ',output);