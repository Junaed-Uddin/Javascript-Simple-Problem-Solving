/* 
Find the vowel in any string and remove the duplicate vowel and sort those unique vowels alphabetically.
*/

const str = 'Hello, Welcome to the Universe of JavaScript Programming.';
const vowelStr = [];

function vowelCheck(text) {
    for (let i = 0; i < text.length; i++) {
        const element = text[i].toLowerCase();
        if (element.includes('a') || element.includes('e') || element.includes('i') || element.includes('o') || element.includes('u')) {
            console.log(element); // print all the vowel in the string
            if (vowelStr.indexOf(element) === -1) {
                vowelStr.push(element); // push unique vowels in the new array
            }
        }
    }
    return vowelStr.sort(); // sort unique vowels alphabetically
}

let result = vowelCheck(str);
console.log(result);
