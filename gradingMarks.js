/* 
Calculate the grading system from the array
*/

const marks = [40, 55, 79, 81, 39, 67, 90];

function findGrade(marks) {
    for (let i = 0; i < marks.length; i++) {
        const mark = marks[i];
        if (mark >= 80) {
            console.log('A+:', mark);
        }
        else if (mark >= 70 && mark < 80) {
            console.log('A:', mark);
        }
        else if (mark >= 60 && mark < 70) {
            console.log('B:', mark);
        }
        else if (mark >= 50 && mark < 60) {
            console.log('C:', mark);
        }
        else if (mark >= 40 && mark < 50) {
            console.log('D:', mark);
        }
        else if (mark <= 39) {
            console.log('F:', mark);
        }
        else
            console.log('Not a Number');
    }
}

findGrade(marks);