const greetForAge = (age) => age >= 18 ? "Hello there" : "Hey Kiddo";

console.log(greetForAge(20));

const getVAT = (base, vat) =>  base * (vat / 100 );

const addVAT = (base, vat) => base + getVAT(base, vat);

console.log(addVAT(100, 21));
console.log(addVAT(250, 9));


const extractVAT = (base, vat) => base / (1 + (vat /100));

const seperateVAT = (amount, percentage, result = []) => {
    const vat = extractVAT(amount, percentage);
    const base = amount - vat;
    result.push(Math.round(vat), Math.fround(base));
    return result;
}

console.log(seperateVAT(272.5, 9))