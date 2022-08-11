/* 
Count the vowel in any string
*/

// method-1
const str = 'Hello, Welcome to the World of Programming';
let count1 = 0;

function vowelCount(str) {
    for (let i = 0; i < str.length; i++){
        const char = str[i];
        if (char.includes('a') || char.includes('e') || char.includes('i') || char.includes('o') || char.includes('u')) {
            count1 += 1;
        }
    }
    return count1;
}

let finalCount = vowelCount(str);
console.log(finalCount);


// method-2
let count2 = 0;
function getVowelCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char)) {
            count2++;
        }
    }
    return count2;
}

let finalResult = getVowelCount(str);
console.log(finalResult);