'use strict';

//  default parameter

const bookings = [];
const createBooking = function (flightNum, numPassenger, price = 6000) {
    const booking = {
        flightNum,
        numPassenger,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('bbf', 200, 2000);
createBooking('lll');
createBooking('kkk', undefined, 1000);
