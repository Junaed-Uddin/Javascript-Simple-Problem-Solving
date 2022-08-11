// Calculate Electricity bill
// For first 100 unit - 5 tk per unit
// For more than 100 unit 6 tk for every unit more than 100
// For more than 200 unit 7 tk for every unit more than 200

function billCalculate(units) {
    let first100UnitPrice = 5;
    let sec100UnitPrice = 6;
    let remainingUnitPrice = 7;
    if (units <= 100) {
        let billPrice = first100UnitPrice * units;
        return billPrice;
    }
    else if (units <= 200) {
        let firstBillPrice = first100UnitPrice * 100;
        let remainingPrice = (units - 100) * sec100UnitPrice;
        let totalBillPrice = firstBillPrice + remainingPrice;
        return totalBillPrice;
    }
    else {
        let firstBillPrice = first100UnitPrice * 100;
        let secBillPrice = sec100UnitPrice * 100;
        let remainingPrice = (units - 200) * remainingUnitPrice;
        let totalBillPrice = firstBillPrice + secBillPrice + remainingPrice;
        return totalBillPrice;
    }
}

let finalBill = billCalculate(200);
console.log(finalBill);