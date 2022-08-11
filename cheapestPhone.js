/* 
Find the cheapest phone in the array object
*/

const phones = [
    {brand: 'Samsung', rom: '128GB', ram: '6GB', price: 22000},
    {brand: 'Xiaomi', rom: '128GB', ram: '6GB', price: 20000},
    {brand: 'Symphony', rom: '128GB', ram: '6GB', price: 12000},
    {brand: 'Oneplus', rom: '128GB', ram: '6GB', price: 26000},
    {brand: 'Realme', rom: '128GB', ram: '6GB', price: 50000},
    {brand: 'Nothing', rom: '128GB', ram: '6GB', price: 18000},
]

let selectLowPrice = phones[0];

function findCheapestPhone(phones) {
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.price < selectLowPrice.price) {
            selectLowPrice = phone;
        }
    }
    return selectLowPrice;
}

let mySelection = findCheapestPhone(phones);
console.log(mySelection);