function describeCountry(country, population, capitalCity){
  console.log(`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}

const ukraine = describeCountry('Ukraine', 33, 'Kyiv');
const spain = describeCountry('Spain', 47, 'Madrid');
const italy = describeCountry('Italy', 58, 'Rome');

console.log(ukraine, spain, italy);

//

const worldPopulation = 7900;

function percentageOfWorld1(population){
  return (population / worldPopulation) * 100;
}

const percUkraine1 = percentageOfWorld1(33);
const percSpain1 = percentageOfWorld1(47);
const percItaly1 = percentageOfWorld1(58);

console.log(percUkraine1, percSpain1, percItaly1);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

const percentageOfWorld3 = population => (population / worldPopulation) * 100;

const percUkraine3 = percentageOfWorld3(33);
const percSpain3 = percentageOfWorld3(47);
const percItaly3 = percentageOfWorld3(58);

console.log(percUkraine3, percSpain3, percItaly3);

//

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;

console.log(describePopulation('Ukraine', 33));
console.log(describePopulation('Spain', 47));
console.log(describePopulation('Italy', 58));

//

const populations = [33, 47, 58, 11];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]), 
  percentageOfWorld1(populations[1]), 
  percentageOfWorld1(populations[2]), 
  percentageOfWorld1(populations[3])
];

console.log(percentages);

//

const neighboursOfUkraine = ['Poland', 'Slovakia', 'Hungary', 'Romania', 'Moldova', 'russia', 'belarus'];

console.log(neighboursOfUkraine);

neighboursOfUkraine.push('Utopia');
console.log(neighboursOfUkraine);

neighboursOfUkraine.pop();
console.log(neighboursOfUkraine);

if(!neighboursOfUkraine.includes('Germany')){
  console.log('Not a central european country');
}

const russiaIndex = neighboursOfUkraine.indexOf('russia');
neighboursOfUkraine[russiaIndex] = 'terrorist state';

console.log(neighboursOfUkraine);

//

const myCountry = {
  country: 'Ukraine',
  capital: 'Kyiv',
  language: 'ukrainian',
  population: 33,
  neighbours: ['Poland', 'Slovakia', 'Hungary', 'Romania', 'Moldova', 'russia', 'belarus'],
  describe: function(){
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },
  checkIsland: function(){
    this.IsIsland = this.neighbours.length === 0 ? true : false;
    // this.isIsland = !Boolean(this.neighbours.length);
    return this.IsIsland;
  }
}

console.log(myCountry);

//

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

//

myCountry.describe();
console.log(myCountry);
myCountry.checkIsland();
console.log(myCountry);

//

for(let n = 1; n <= 50; n++){
  console.log(`Voter number ${n} is currently voting`);
}

//

const percentages2 = [];
for(let i = 0; i < populations.length; i++){
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

//

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden']];

for(let a = 0; a < listOfNeighbours.length; a++){
  for(let b = 0; b < listOfNeighbours[a].length; b++){
    console.log(listOfNeighbours[a][b]);
  }
}

//

const percentages3 = [];
let i = 0;
while(i < populations.length){
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);