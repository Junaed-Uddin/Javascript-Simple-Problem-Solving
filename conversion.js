/* 
Write some functions those will convert different units
*/

// feet to inch
function feetToInch(feet) {
    let inch = feet * 12;
    return inch;
}

let inchResult = feetToInch(24);
console.log('Inch:', inchResult);



//mile to kilometer
function mileToKilometer(mile) {
    let kilometer = mile * 1.609;
    return kilometer;
}

let kiloResult = mileToKilometer(10);
console.log('Kilometer:', kiloResult);



// feet to meter
function feetToMeter(feet) {
    let meter = feet / 3.281;
    return meter.toFixed(3);
}

let feetResult = feetToMeter(20);
console.log('Feet:', parseFloat(feetResult));



// millimeter to kilometer
function miliToKilometer(millimeter) {
    let kilometer = millimeter / Math.pow(10, 6);
    return kilometer;
}

let miliResult = miliToKilometer(5000000);
console.log(miliResult);














