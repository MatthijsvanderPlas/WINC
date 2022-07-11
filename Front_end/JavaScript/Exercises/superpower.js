const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ];

const superheroNames = superheroes.map(hero => hero.name);
// console.log(superheroNames);

const lightSuperheroes = superheroes.filter((hero) => Number(hero.weight) < 190);
// console.log(lightSuperheroes);

const twoHundredPoundHeroes = superheroes.filter((hero) => Number(hero.weight) === 200).map(hero => hero.name);
// console.log(twoHundredPoundHeroes);

const firstAppearance = superheroes.map(hero => hero.first_appearance);
// console.log(firstAppearance);

const dcComicsSuperheroes = superheroes.filter(hero => hero.publisher === "DC Comics")
// console.log(dcComicsSuperheroes);

const marvelSuperheroes = superheroes.filter(hero => hero.publisher === "Marvel Comics")
// console.log(marvelSuperheroes);

const sumDcWeight = superheroes.filter(hero => hero.publisher === "DC Comics").map(hero => Number(hero.weight)).reduce((total, weight) => {
        if (weight) {
            total += weight
            return total
        } else {
            total += 0
            return total
        }
    })

// console.log(sumDcWeight)
    
const sumMarvelWeight = superheroes.filter(hero => hero.publisher === "Marvel Comics").map(hero => Number(hero.weight)).reduce((total, weight) => {
    if (weight) {
        total += weight
        return total
    } else {
        total += 0
        return total
    }
})

// console.log(sumMarvelWeight)

const allHeroes = superheroes.map(hero => {
    if(Number(hero.weight)) {
        hero.weight = Number(hero.weight);
        return hero;
    } else {
        hero.weight = 0;
        return hero;
    }
});

const heaviestHero = allHeroes.reduce((heaviest, hero) => {
    if (heaviest.weight > hero.weight) {
        return heaviest;
    } else {
        return hero;
    }
}, 0);

// console.log(heaviestHero)