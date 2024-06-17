let calcAverage = (a, b, c) => (a + b + c) / 3;

// test data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas){
  if(avgDolphins >= avgKoalas * 2){
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if(avgKoalas >= avgDolphins * 2){
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else{
    console.log(`No team wins (${avgKoalas} vs. ${avgDolphins})`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// test data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);

//

// const calcTip = bill => (bill > 50 && bill < 300) ? bill * 0.15 : bill * 0.20;

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);

//

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

mark.calcBMI();
john.calcBMI();

console.log(`${john.fullName}'s BMI (${john.bmi}) is ${john.bmi > mark.bmi ? 'higher' : 'lower'} than ${mark.fullName}'s (${mark.bmi})!`);

//

const calcTip = bill => (bill > 50 && bill < 300) ? bill * 0.15 : bill * 0.20;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);

calcAverage = function(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));