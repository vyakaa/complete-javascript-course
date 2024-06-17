const country = 'Ukraine';
const continent = 'Europe';
let population = 33;
const isIsland = false;
const language = 'ukrainian';

console.log(country);
console.log(continent);
console.log(population);

//

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//

console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language;

console.log(description1);

//

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

if (population > 33) {
  console.log(`${country}'s population is ${population - 33} million above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
    below average`
  );
}

//

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// const numNeighbors = Number(prompt('How many neighbour countries does your contry have?'));

// if(numNeighbors === 1){
//   console.log('Only 1 border!')
// } else if(numNeighbors > 1){
//   console.log('More than 1 border')
// } else {
//   console.log('No borders')
// }

if(language === 'english' && population < 50 && !isIsland){
  console.log(`You should live in ${country}, Sarah`);
} else {
  console.log(`${country} does not meet your criteria, Sarah`);
}

switch(language){
  case 'ukrainian':
    console.log('Sweetest language of my heart');
    break;
  case 'chinese':
  case 'mandarin':
    console.log('Biggest number of native speakers');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place in number of native speakers');
    break;
  case 'hindi':
    console.log('4th place in number of native speakers');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  case 'russian':
    console.log('рускій воєнний корабль, іди нахуй');
    break;
  default:
    console.log('Good language too');
    break;
}

//

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);