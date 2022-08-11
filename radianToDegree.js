// problem-1: radianToDegree
/* Convert the radian into degree */

function radianToDegree(radian) {
    // check if the radian isn't a number
    if (typeof radian != 'number') {
        return 'Please Insert the Number';
    }
    else {
        // convert the radian to degree
        let degree = (radian * (180 / Math.PI)).toFixed(2);
        return parseFloat(degree);
    }
}

let result = radianToDegree(10);
console.log(result);