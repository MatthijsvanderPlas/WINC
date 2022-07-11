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
