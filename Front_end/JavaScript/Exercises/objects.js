const person = {
    name: 'Test',
    age: 21,
    evaluations: [7, 10, 9] 
}

console.log(person)
console.log(person.name)
console.log(person['age'])

console.log(person.evaluations);

let colors = ['blue', 'red', 'green'];

console.log(colors)
console.log(colors.length)

console.log(colors[0]);

console.log(colors[colors.length - 1])

colors.push('yellow')
colors[5] = 5;

colors.push({greeting: 'hi, I am an object'});

console.log(colors[colors.length - 1].greeting)