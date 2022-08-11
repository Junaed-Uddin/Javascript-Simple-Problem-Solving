/* 
Find the rectangle area 
*/

function rectangleArea(width, length) {
    const area = Math.abs(width * length);
    return area;
}

let result = rectangleArea(10, -8.23).toFixed(2);
console.log(parseFloat(result));