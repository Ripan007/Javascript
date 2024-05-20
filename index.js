'use strict';
/*
https://restcountries.com/v2/all
https://restcountries.com/v2/name/county
*/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/all');
request.send();
// console.log(request.responseText);

request.addEventListener('load', function () {
    console.log(this.responseText);
});
