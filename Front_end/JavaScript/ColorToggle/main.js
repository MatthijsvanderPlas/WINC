import "./src/scss/style.scss";
import "@fortawesome/fontawesome-free/css/all.css";

// Select all <li> elements in the color menu

const colors = {1: 'White', 2: 'Red',3: 'Yellow', 4: 'Blue',5: 'Green',6: 'Orange'};
const arrayRadios = [...document.querySelectorAll('.colorbar__radio')];
const arrayBtn = [...document.querySelectorAll('.colorbar__btn')];

function changeColor(e, color = 0) {
	e.preventDefault();
	if(color === 0) {
		document.body.style.backgroundColor = colors[e.target.value];
		checkRadioButton(colors[e.target.value]);
		
	} else {
		document.body.style.backgroundColor = color;
		checkRadioButton(color)
	}
}22

function checkRadioButton(color) {
	arrayRadios.forEach((radio) => {
		if(radio.value === color) {
			radio.style.color = 'black';
		}
	})
}

 arrayRadios.forEach((element) => {
	element.parentNode.style.backgroundColor = element.value;
});

arrayBtn.forEach((btn) => {
	btn.addEventListener('click', changeColor);
});

window.addEventListener('keydown', (e) =>{

	const pressedKey = Number(e.key);

	for(let key of Object.keys(colors)) {

		if(pressedKey === Number(key)) {
			changeColor(e, colors[key]);
		}
	}
});




// function closeColorbar() {
// 	;
// }

// const addRadioEvent = function() {
// 	const radios = document.querySelectorAll('input[name="colortoggle"]');
// 	const lis = Array.prototype.slice.call(document.getElementsByClassName('colorbar__item'));

// 	radios.forEach.call(radios, function(radio, i = 0) {
	
// 		lis[i].style.backgroundColor = radio.value;

// 		radio.addEventListener('change', colorChange);
		
// 		i++;12
// 	})
// }

// const updateCheckedRadio = function(numRadio) {
// 	const radios = document.querySelectorAll('input[name="colortoggle"]');
// 	radios.forEach((radio) => radio.setAttribute('checked', ''));
// 	// radios[(numRadio-1)].setAttribute('checked', true)
// }

// const getKeystroke = function() {
// 	const keyStrokes = {1: 'White', 2: 'Red',3: 'Yellow', 4: 'Blue',5: 'Green',6: 'Orange'};

	
// 		}
// 	})
// }

// const colorbar = document.querySelector('.colorbar');

// getKeystroke();
// addRadioEvent();


/* 
Ideal situation

we listen for keydown event to change the color
we listen for hover event CSS
User can change the color by clicking the button
the Radio only indicates which one is active.

hovering over the menu allready works as intended

function that does a color change (either by btn click or keydown)
function that sets the radio button




*/

// const colorChange = function(e, color = 0) {
// 	if(color === 0) color = e.target.value;
// 	document.body.style.backgroundColor = color;
// 	document.querySelector('.card__span').textContent = ` ${color}`;
// 	document.querySelector('.card__span').style.color = color;
// 	if(color === 'White') {
// 		document.querySelector('.card__span').style.color = 'black';
// 	}
// 	closeColorbar();
// };