'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting elements
console.log(document.documentElement); // entire html document
console.log(document.head); // head section
console.log(document.body); // body section

const header = document.querySelector('.header'); // first element with class header

const allSections = document.querySelectorAll('.section'); // all elements with class section
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button'); // live (updatable) HTMLCollection of all button elements
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // live HTMLCollection of all elements with class btn

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
//header.prepend(message); // adds as first child of header
header.append(message); // moves to last child of header
//header.append(message.cloneNode(true)); // to add a copy instead of moving

//header.before(message); // adds before header
//header.after(message); // adds after header

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // modern way to remove element
    //message.parentElement.removeChild(message); // old way to remove element
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // empty string, only inline styles are accessible this way
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

console.log(getComputedStyle(message).color); // actual computed color
console.log(getComputedStyle(message).height); // actual computed height

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// CSS custom properties
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // standard attribute
console.log(logo.src); // standard attribute
console.log(logo.className); // standard attribute
logo.alt = 'Beautiful minimalist logo'; // set standard attribute

// Non-standard attributes
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Jonas
logo.setAttribute('company', 'Bankist'); // set non-standard attribute
console.log(logo.getAttribute('company')); // Bankist
console.log(logo.src); // absolute URL
console.log(logo.getAttribute('src')); // relative URL

// Relative links
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // absolute URL
console.log(link.getAttribute('href')); // relative URL

// Data attributes
console.log(logo.dataset.versionNumber); // access data-version-number attribute

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
console.log(logo.classList.contains('c')); // true or false, similar to includes method for arrays
// Don't use
// logo.className = 'jonas'; // this will overwrite all existing classes

// Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  // top is always the same as y, left is always the same as x

  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth,
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY,
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // modern way of scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Types of events and event handlers
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// Event propagation
// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // Stop event propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
