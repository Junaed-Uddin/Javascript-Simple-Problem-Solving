/* Write a function that takes input the total price of the products you bought and returns the net price calculated according to the discount table below. */

/* Total Price Discount
>= 1000 --- 10%
>= 3000 --- 15%
>  5000 --- 20% */

function discountCalc(totalPrice) {
    if (totalPrice > 5000) {
        let discount = totalPrice * (20 / 100);
        let netPrice = totalPrice - discount;
        return netPrice;
    }
    else if (totalPrice >= 3000) {
        let discount = totalPrice * (15 / 100);
        let netPrice = totalPrice - discount;
        return netPrice;
    }
    else if (totalPrice >= 1000) {
        let discount = totalPrice * (10 / 100);
        let netPrice = totalPrice - discount;
        return netPrice;
    }
    else
        return 'Discount Not Available.';
}

var result = discountCalc(60000);
console.log(result);
