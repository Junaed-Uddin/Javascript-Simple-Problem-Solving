/* 
Covert the fahrenheit to celsius
*/

function convertCelsius(fahrenheit) {
    const celsius = (5 / 9) * (fahrenheit - 32);
    return celsius;
}

var result = convertCelsius(103).toFixed(3);
console.log(parseFloat(result));

