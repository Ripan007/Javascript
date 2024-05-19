const vistra = {
    airline: 'vistara',
    iatacode: 'yy5',
    bookings: [],
    book: function (flightNum, name) {
        console.log(
            `${name} booked a seat on ${flightNum} flight ${this.iatacode} ${flightNum}`
        );
    },
};

vistra.book('jj1', 'mohit');
