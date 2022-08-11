// problem-3: oilPrice
/* 
Its price per liter of diesel – 114 taka
Price of petrol per liter – 130 taka
Its price per liter of octane – 135 taka
Now, if he orders different liters of diesel, petrol, octane, then the total cost will be returned. */


function oilPrice(diesel, petrol, octane) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    // check if the oil litre isn't a number
    if (typeof diesel != 'number' || typeof petrol != 'number' || typeof octane != 'number') {
        return 'Invalid.!! Please Input the Number';
    }
    // Check whether the oil liter is 0 or not 
    else if (diesel < 0 || petrol < 0 || octane < 0) {
        return 'Number of liters must be greater than zero';
    }
    // Calculate the total price 
    else {
        let totalCost = diesel * dieselPrice + petrol * petrolPrice + octane * octanePrice;
        return totalCost;
    }
}

let result = oilPrice(12, 0, 1);
console.log(result);