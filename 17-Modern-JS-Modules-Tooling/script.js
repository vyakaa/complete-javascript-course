// All modules are executed in strict mode by default, so we don't need to add 'use strict' to our code.

// Importing module

// Importing named exports
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity as tq,
// } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);
/*console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

// Import default export
// Do not mix default and named imports in one statement!
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// Imports are not copies of the exported values. They are live connections to the exports. So when the exported value changes, the imported value also changes.
console.log(cart);

// Top-level await ES2022 - allows us to use await outside of async functions. This is only allowed in modules, not in regular scripts. This is a game-changer for modern JavaScript development, as it allows us to write asynchronous code in a more synchronous way, without having to wrap it in an async function.
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

// Not very clean, because we have to use then() to get the data from the promise. But this is how it works with top-level await, we have to use then() to get the data from the promise.
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

// The module pattern. The main goal of the module pattern is to encapsulate code and data in a module, so that it is not accessible from the outside
// IIFE
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  function addToCart(product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`,
    );
  }

  function orderStock(product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  }

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined

// CommonJS modules - used in Node.js, not in the browser. Each file is a module, and we export values from the module using module.exports, and import values using require().
// ES6 modules - used in the browser and in Node.js. Each file is a module, and we export values from the module using export, and import values using import.

// Note: In ES6 modules, the top-level code is executed only once, when the module is first imported. So if we import the same module multiple times, the top-level code will not be executed again. This is different from CommonJS modules, where the top-level code is executed every time the module is imported.

// Export for Node.js - CommonJS part
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`,
  );
};

// Import for Node.js - CommonJS part 
const { addToCart } = require('./shoppingCart.js');