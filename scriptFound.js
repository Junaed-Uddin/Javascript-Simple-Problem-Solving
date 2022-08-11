/* Write a JavaScript program to check whether a string "Script" presents at 5th (index position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one. */

const str = 'JavaScript';

function checkStr(str) {
    if (str.toLowerCase().substring(4, 10) == 'script') {
        return str.substring(0, 4);
    }
    else
        return str;
}

console.log(checkStr('JavaScript'));
console.log(checkStr('CoffeeScript'));

