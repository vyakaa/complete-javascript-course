'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million people</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
// AJAX call: XMLHttpRequest (old way of making AJAX calls)
/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeighbour('ukraine');
*/

// Callback hell example (not to be used in real code!)
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//         setTimeout(() => {
//           console.log('5 seconds passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// AJAX call: Fetch API (modern way of making AJAX calls)
/*const request = fetch('https://restcountries.com/v2/name/ukraine');
console.log(request); // Promise { <pending> } - because the request is still pending and has not yet resolved or rejected*/

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// Refactored version using arrow functions for readability
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(
//       response => {
//         console.log(response);

//         if (!response.ok)
//           throw new Error(`Country not found (${response.status})`);
//         return response.json();
//       } /*,
//       err => alert(err),*/,
//     )
//     .then(data => {
//       renderCountry(data[0]);

//       // Chaining promises: Get neighbour country (2)
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       // Country 2
//       // Return the fetch promise here so that we can chain another .then() to handle the response of this second fetch call
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(
//       response => {
//         if (!response.ok)
//           throw new Error(`Country not found (${response.status})`);
//         return response.json();
//       },
//       /*,
//       err => alert(err),*/
//     )
//     .then(data => renderCountry(data, 'neighbour'))
//     // Handle any errors that occur in any of the previous promises in the chain
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);

      // Chaining promises: Get neighbour country (2)
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      // Return the promise from getJSON() so that we can chain another .then() to handle the response of this second API call
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found',
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    // Handle any errors that occur in any of the previous promises in the chain
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// Handling rejected promises (errors) with .catch()
btn.addEventListener('click', function () {
  getCountryData('ukraine');
});

// The event loop in practice
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0); // callback queue
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); // microtasks queue
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 100000000; i++) {} // Simulate a long-running task
//   console.log(res);
// }); // microtasks queue
// console.log('Test end');

// Building a simple promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🎲');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition()
//   .then(pos => console.log(pos))
//   .catch(err => console.error(err));

// Consuming promises with async/await (from ES2017)
// Error handling with try...catch
const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
    );

    if (!response.ok)
      throw new Error(
        `Problem with the request. Please try again ${response.status}`,
      );

    const data = await response.json();
    console.log(`2: You are in ${data.city}, ${data.countryName}`);

    const res = await fetch(
      `https://restcountries.com/v2/name/${data.countryName}`,
    );

    if (!res.ok) throw new Error(`Country not found (${res.status})`);

    const countryData = await res.json();
    renderCountry(countryData[0]);
  } catch (err) {
    console.error(`${err.message} 💥`);
    renderError(`Something went wrong 💥 ${err.message}. Try again!`);

    // Reject the promise returned by the async function to allow further chaining of .catch() if needed
    throw err;
  }
};

// whereAmI();

// console.log('1: Will get location');
// // IIFE to use async/await at the top level (since we cannot use await at the top level of our code)
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();

// Running multiple promises in parallel with Promise.all() - promise combinator
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    // console.log([data1.capital, data2.capital, data3.capital]);

    // Short-circuits if any of the promises reject, and immediately rejects with that error. If all promises resolve, it returns an array of the resolved values in the same order as the input promises.
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');

// Other Promise combinators: Promise.race, Promise.allSettled, Promise.any

// Promise.race() - returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise. In other words, it short-circuits as soon as the first promise settles (either fulfills or rejects).
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

// Promise.race() example with a timeout to handle cases where a promise takes too long to settle
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(0.15),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled() - returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise. It never short-circuits and waits for all promises to settle regardless of whether they fulfill or reject.
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

// Promise.all() - returns a promise that fulfills when all of the promises in an iterable fulfill, with an array of the fulfilled values in the same order as the input promises. If any of the input promises reject, the returned promise immediately rejects with that reason.
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any() [ES2021] - returns a promise that fulfills as soon as any of the promises in an iterable fulfills, with the value of the fulfilled promise. If all promises reject, it rejects with an AggregateError containing an array of rejection reasons.
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
