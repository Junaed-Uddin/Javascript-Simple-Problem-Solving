/* Find the middle element of the array */


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getMiddleElement(arr) {
    let middle = arr[Math.floor((arr.length - 1) / 2)];
    // let middle = arr[Math.round((arr.length - 1) / 2)];
    return middle;
}

let middleElement = getMiddleElement(numbers);
console.log(middleElement);