'use strict';

const flight = 'uu34';
const jonas = {
    name: 'john schenwin',
    password: 22233444,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'HTT77';
    passenger.name = 'mr.' + passenger.name;
    if (passenger.password === 22233444) {
        alert('password correct');
    } else {
        console.log('fill up correct credentials');
    }
};

const newPassword = function (person) {
    person.password = Math.trunc(Math.random() * 100000000000);
};
newPassword(jonas);
checkIn(flight, jonas);
