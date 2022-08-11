/* 
Find the largest name in the array
*/

const arrName = ['Abul Hossain', 'Mosaddak', 'Liton', 'Abu Nayeem Hasan', 'Sobuj Chowdhury'];
let temp = arrName[0];

function largestElement(arr) {
    for (let i = 0; i < arrName.length; i++) {
        const name = arrName[i];
        if (name.length > temp.length) {
            temp = name;
        }
    }
    return temp;
}

let largeName = largestElement(arrName);
console.log(largeName);