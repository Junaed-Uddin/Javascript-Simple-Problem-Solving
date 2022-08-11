/* 
Find the small number between three numbers
*/

function checkSmallNumber(num1, num2, num3) {
    if (num1 < num2) {
        if (num1 < num3) {
            console.log('Small Number:', num1);
        }
        else
            console.log('Small Number:', num3);
    }
    else if (num2 < num1 && num2 < num3) {
        console.log('Small Number:', num2);
    }
    else
        console.log('Small Number:', num3);
}

checkSmallNumber(20, 44, 34);