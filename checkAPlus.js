// Find if anybody got A+ from your friends

const marks = [78, 82, 69, 90, 85];
const newMarks = [];
let count = 0;

function checkGrade(marks) {
    for (let i = 0; i < marks.length; i++){
        const mark = marks[i];
        if (mark >= 80) {
            newMarks.push(mark);
            count++;
        }
    }
    return {
        newMarks, count
    }
}

let output = checkGrade(marks);
console.log(output);