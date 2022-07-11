// Getting all the buttons from the page
const bigFiveButtons = [...document.querySelectorAll('.big-five-button')];

const spottedList = document.querySelector('#spotted-animals-list');

const removeFirst = document.querySelector('#remove-first-item-button');

const removeAll = document.querySelector('#remove-all-button');

// add a new Li to the list of animals
function addSpottedAnimal(animal){
    // console.log(`${e.target.innerHTML} got clicked!`)
    const newLi = document.createElement('li');
    newLi.classList.add('spotted-animals-list-item')
    newLi.innerHTML = animal;
    spottedList.appendChild(newLi);
}

function checkDuplicateSpot(e) {
    const animal = e.target.innerHTML;
    const spottedAnimalList = [...document.querySelector('#spotted-animals-list').children];
    const animalList = spottedAnimalList.map(item => item.innerHTML);
    if (!animalList.includes(animal)) {
        addSpottedAnimal(animal)
    } else {
        alert(`${animal} has already been spotted`)
    }
} 

function removeFirstItem() {
    const firstChild = spottedList.children[0]
    if (firstChild) {
        firstChild.parentElement.removeChild(firstChild);
    } else {
        alert(`Nothing left to remove`)
    }
}

function removeAllItems() {
    const children = [...spottedList.children];
    children.forEach(item => item.parentElement.removeChild(item));
}

// Adding the event listener to the buttons.
bigFiveButtons.forEach(btn => btn.addEventListener('click', checkDuplicateSpot));

removeFirst.addEventListener('click', removeFirstItem);

removeAll.addEventListener('click', removeAllItems)


