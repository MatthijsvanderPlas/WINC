'use strict';

const age = 21;
const allowed = (age > 18) ? 'You are allowed in!' : 'You are not allowed in!' ;
console.log(allowed);

const isFemale = true;
const ladiesNight = (isFemale === true) ? 'Ladies only! join the party!' : 'Sorry no guys allowed!';
console.log(ladiesNight)

const driverStatus = 'designated';
if(driverStatus === 'designated') {
    console.log('You can drive home!')
} else {
    console.log('You have been drinking please hand in your keys')
}

const discount = (age >= 18 && age <= 25) ? 'You are getting 50% off!' : 'You are not getting a discount';
console.log(discount);

const firstName = 'Abraham';
const freeBeer = (firstName === 'Sarah' || firstName === 'Abraham') ? 'Hooray! You are getting a free beer' : 'Welcome to our 50th brithday party!';
console.log(freeBeer)

const totalAmount = 120;

if (totalAmount > 100) {
    console.log('Enjoy your free bottle of champagne!')
} else if (totalAmount > 50) {
    console.log('Bon Apetit! Free portion of nachos')
} else if (totalAmount > 25) {
    console.log('Healthy balls comming up!')
}