/* 
Find the area of the circle
*/

function areaCircle(radius) {
    const pi = 3.1416;
    let area = pi * Math.abs(radius * radius);
    return area;
}

let result = areaCircle(10).toFixed(2);
console.log(parseFloat(result));