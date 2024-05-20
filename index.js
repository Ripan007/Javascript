'use strict';
/*
https://restcountries.com/v2/all
https://restcountries.com/v2/name/county
*/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data) {
    const html = `<article class="country">
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

const getCountriesAndNeighbor = function (country) {
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
        const [neighbor] = data.borders;
    });
};

getCountriesAndNeighbor('portugal');
getCountriesAndNeighbor('usa');
