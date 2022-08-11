/* 
You want to publish three books. So you went to press shop and tell the shopkeeper - i want to print three books which have 

100 pages to print the first book
200 pages will be required to print the second book
300 pages will be required to print the third book

write a function called paperRequirements and tell how many copies of a book will be required, and the function will calculate and tell you how many pages of paper you will need in total. */

const firstBookPages = 100;
const secBookPages = 200;
const thirdBookPages = 300;

function paperRequirements(firstBook, secondBook, thirdBooks) {
    let reqFirstBookPages = firstBook * firstBookPages;
    let reqSecBookPages = secondBook * secBookPages;
    let reqThirdBookPages = thirdBooks * thirdBookPages;
    let totalReqPages = reqFirstBookPages + reqSecBookPages + reqThirdBookPages;
    return totalReqPages;
}

let finalReqPages = paperRequirements(10, 15, 20);
console.log(finalReqPages);