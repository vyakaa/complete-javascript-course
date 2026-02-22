// Exporting module
console.log('Exporting module');

// Blocking code - this will block the entire module, so we should avoid it in real projects
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users');

const shippingCost = 10;

// Named exports
export const cart = [];
const totalPrice = 237;
const totalQuantity = 23;

export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`,
  );
}

export { totalPrice, totalQuantity };

// Default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`,
  );
}
