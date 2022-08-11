/* 
Calculate the simple shopping cart from array object
*/

const shoppingCart = [
    { name: 'shoe', price: 2000, quantity: 5 },
    { name: 'shirt', price: 2300, quantity: 2 },
    { name: 'pant', price: 3700, quantity: 3 },
    { name: 'belt', price: 1000, quantity: 4 },
]
let sum = 0;

function totalPrice(shoppingCart) {
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        sum += item.price * item.quantity;
        // console.log(i, item);
    }
    return sum;
}

let amount = totalPrice(shoppingCart);
// console.log(amount);


