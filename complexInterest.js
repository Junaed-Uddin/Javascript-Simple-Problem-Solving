/* 
Find the complex interest by the given formula
A = P(1 + r/n)nt
A = Accrued amount (principal + interest)
P = Principal amount.
r = Annual nominal interest rate as a decimal.
R = Annual nominal interest rate as a percent.
r = R/100.
n = number of compounding periods per unit of time.
t = time in decimal years; e.g., 6 months is calculated as 0.5 years. */

function complexInterest(mainBalance, rate, unitNumber, time) {
    const finalAMount = mainBalance * Math.pow((1 + (rate / unitNumber)), unitNumber) * time;
    return finalAMount.toFixed(2);
}

let result = complexInterest(15000, 2, 100, 3);
console.log(parseFloat(result));