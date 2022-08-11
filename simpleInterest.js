/*
Calculate the simple interest 
A = P(1 + rt)
A	=	final amount
P	=	initial principal balance
r	=	annual interest rate
t	=	time (in years) */

function calcInterest(mainBalance, rate, time) {
    const amount = mainBalance * (1 + rate * time);
    return amount;
}

let result = calcInterest(20000, 5, 2);
console.log('Final Amount: ', result);