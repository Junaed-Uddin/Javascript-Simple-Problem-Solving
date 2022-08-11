/* 
if you have three sides of the triangle, then how to calculate the area of the triangle
triangle area formula: area = rootOf(s*(s-a)*(s-b)*(s-c)) where 
s = (a+b+c)/2 with given sides a,b and c */

let s, area;
function triangleArea(side1, side2, side3) {
    s = (side1 + side2 + side3) / 2;
    area = s * (s - Math.abs(side1)) * (s - Math.abs(side2)) * (s - Math.abs(side3));
    let areaTriangle = Math.sqrt(Math.abs(area));
    return areaTriangle;
}

let result = Math.round(triangleArea(8, 9, 10));
console.log(result);