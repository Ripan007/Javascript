'use strict';
/*
https://restcountries.com/v2/all
https://restcountries.com/v2/name/county
*/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/*


const getCountriesAndNeighbour = function (country) {
    //  ajax call for country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(request.responseText);
        console.log(data);
        //  render country 1
        renderCountry(data);
        //  ger  neighbor country 2
        const [neighbour] = data.borders;
        if (!neighbour) return;
        //  ajax call for country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        request2.addEventListener('load', function () {
            const data2 = JSON.parse(request2.responseText);
            console.log(data2);
            renderCountry(data2, 'neighbour');
        });
    });
};

getCountriesAndNeighbour('portugal');
getCountriesAndNeighbour('usa');


const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            renderCountry(data[0]);
        });
};

*/

const renderCountry = function (data, className = '') {
    const html = `<article class="country ${className}"  >
                    <img src="${data.flag}" alt="" class="country__img" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"><span>🧑‍🤝‍🧑</span>${(
                            +data.population / 100000
                        ).toFixed(1)}</p>
                        <p class="country__row"><span>👅</span>${
                            data.languages[0].name
                        }</p>
                        <p class="country__row"><span>💸</span>${
                            data.currencies[0].name
                        }</p>
                    </div>
                </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

// simplified way
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            if (!neighbour) return;
            //  fetch 2 country
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            readError('something went wrong ✴️✴️✴️ ');
        });
};

btn.addEventListener('click', function () {
    getCountryData('portugal');
});
