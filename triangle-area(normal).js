/* 
if you have height and base of the triangle, then calculate the area of the triangle
*/

function findArea(height, base) {
    const area = (1 / 2) * Math.abs(height * base);
    return area;
}

let result = findArea(10, 5.3).toFixed(2);
console.log(parseFloat(result));
