/* Write a program to find the total price of those product object.
{ name: “Laptop”, color: “black” , price: 12000 }
{ name: “Monitor”, color: “gray” , price: 5000 }
{ name: “Mobile”, color: “black” , price: 2500 } */

const shoppingLaptop = {
    name: 'Laptop',
    color: 'black',
    price: 12000,
}
const shoppingMonitor = {
    name: 'Monitor',
    color: 'gray',
    price: 5000,
}
const shoppingMobile = {
    name: 'Mobile',
    color: 'black',
    price: 2500,
}

let totalPrice = shoppingLaptop.price + shoppingMonitor.price + shoppingMobile.price;
console.log(totalPrice);
