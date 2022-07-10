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
		updateColorText(colors[e.target.value]);
		closeColorBar();
	} else {
		document.body.style.backgroundColor = color;
		checkRadioButton(color);
		updateColorText(color);
	}
}

function checkRadioButton(color) {
	arrayRadios.forEach((radio) => {
		if(radio.value === color) radio.checked = true;
	})
}

function updateColorText(color = 'White') {
	const textSpan = document.querySelector('.card__span')
	textSpan.textContent = ` ${color}`;
}

function closeColorBar() {
	document.querySelector('.dropdown__hover').classList.remove('dropdown__hover');
	setTimeout(() => {
		document.querySelector('.navbar__dropdown').classList.add('dropdown__hover');
	}, 2000);
	
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