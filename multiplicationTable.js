/* 
Calculate the nth multiplication table 
*/

function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let multiplication = number * i;
        console.log(number,'*',i, '=',multiplication);
    }
}

multiplicationTable(12);