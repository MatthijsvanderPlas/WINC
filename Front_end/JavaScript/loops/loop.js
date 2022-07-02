const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

while(i < colors.length) {
    console.log(colors[i]);
    i++;
}

for(i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(color => console.log(color));

// for loop takes 3 lines (4 if you include the itterable)
// while loop takes 5 lines (6 if you include the itterable)
// forEach method can be done on a single line (for simple functionality)
// forEach loop is more readable and less error prone since it is simpler and more explicit
// its harder to get into an infinite loop

// Iterating through an object with 5 properties

const Person = {
    name: 'Thomas',
    age: 45,
    city: 'Glasgow',
    job: 'plumber',
    hobby: 'archery'
};

for(const item in Person) {
    console.log(`${item}: ${Person[item]}`);
}

Object.entries(Person).forEach(item => {
    console.log(item[0] + ": " + item[1]);
}) 
