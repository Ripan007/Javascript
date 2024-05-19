const vistra = {
    airline: 'vistara',
    iatacode: 'yy5',
    bookings: [],
    book: function (flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`
        );
    },
};

vistra.book(66, 'mohit');
