/* 
Print the word reverse way in the array
*/

const arr = 'Hello, Welcome to the World of Programming';
let wordArr = arr.split(' ');
let resultArr = [];
// console.log(wordArr);

function reverseWord(text) {
    for (let i = text.length-1; i>=0; i--) {
        const element = text[i];
        resultArr.push(element);
    }
    return resultArr;
}

let output = reverseWord(wordArr);
console.log('Reverse Word:' ,output);

// if we the sentence by using reverse word 
let revSentence = output.join(' ');
console.log('Sentence:',revSentence);