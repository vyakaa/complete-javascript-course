'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');

//

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
  console.log(`You rolled a ${dice} dice`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if(dice === 6) console.log('Loop is about to end');
}