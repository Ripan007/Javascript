'use strict';
/*
https://restcountries.com/v2/all
https://restcountries.com/v2/name/county
*/
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
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
};

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
            renderError(
                `something went wrong ✴️✴️✴️  ${err.message}.Try again later.`
            );
        })
        .finally(function () {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', function () {
    getCountryData('portugal');
});
