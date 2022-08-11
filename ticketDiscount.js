/* 
Suppose, you went to buy train tickets from the station and the ticket seller told you -
1. if you buy 100 tickets then the price will be 100/ticket
2. if you buy more than 100 tickets and less than 200 tickets, then the first 100 tickets will be 100/ticket, and rest of the tickets are 90/ticket.
i)  first 100 -> 100 taka
ii) remaining -> 90  taka
3. if you buy more than 200 tickets, then the first 100 tickets will be 100 taka, second 100 tickets will be 90 taka, and remaining tickets will be 70 taka.
i)   first 100  -> 100 taka
ii)  second 100 -> 90  taka
iii) remaining  -> 70  taka
*/

const first100Price = 100;
const second100Price = 90;
function ticketDiscount(ticketsQuantity) {
    if (typeof ticketsQuantity !== 'number') {
        return 'Please insert the Number';
    }
    else {
        if (ticketsQuantity <= 100) {
            let ticketPrice = 100 * ticketsQuantity;
            return ticketPrice;
        }
        else if (ticketsQuantity <= 200) {
            let ticket100Price = first100Price * 100;
            let remainingPrice = (ticketsQuantity - 100) * 90;
            let totalPrice = ticket100Price + remainingPrice;
            return totalPrice;
        }
        else if (ticketsQuantity > 200) {
            let ticket100Price = first100Price * 100;
            let ticketSecond100Price = second100Price * 100;
            let remainingPrice = (ticketsQuantity - 200) * 70;
            let totalPrice = ticket100Price + ticketSecond100Price + remainingPrice;
            return totalPrice;
        }
    }
}

let discountPrice = ticketDiscount(250);
console.log(discountPrice);