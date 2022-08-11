// problem-4: publicBusFare
/* A large number of people will go for a picnic. The number of buses will depend on the number of people. Suppose we have buses and micros. Each bus has a capacity of 50 people and each microbus has a capacity of 11 people and each public bus ticket costs 250 rupees. Now you need to write a function called publicBusFare that will take a number (how many passengers) as a parameter. It will return you the total amount of public bus fare. */


function publicBusFare(peopleNumber) {
    const busFare = 250;
    // check if the number of people isn't a number 
    if (typeof peopleNumber != 'number') {
        return 'Invalid.!! Please Insert the Number';
    }
    // check if the number of people less than zero 
    else if (peopleNumber < 0) {
        return 'Number of people cannot be negative';
    }
    else {
        // check if the number of people is less than 50
        if (peopleNumber < 50) {
            // Check if everyone can go to the micro
            if (peopleNumber % 11 == 0) {
                return 0;
            }
            // Calculate the bus fare of the rest of the people
            else {
                let microBusRemaining = peopleNumber % 11;
                let totalFare = microBusRemaining * busFare;
                return totalFare;
            }
        }
        // check if the number of people is equal to 50
        else if (peopleNumber == 50) {
            return 0;
        }
        // check if the number of people is greater than 50
        else if (peopleNumber > 50) {
            // Check if everyone can go to the reserve bus
            if (peopleNumber % 50 == 0) {
                return 0;
            }
            else {
                // Calculate how many people are left after the bus leaves
                let busRemaining = peopleNumber % 50;
                // Check if remaining peoples can go to Micro
                if (busRemaining % 11 == 0) {
                    return 0;
                }
                // Calculate the bus fare of the rest of the people
                else {
                    let microBusRemaining = busRemaining % 11;
                    let totalFare = microBusRemaining * busFare;
                    return totalFare;
                }
            }
        }
    }
}

let result = publicBusFare(365);
console.log(result);