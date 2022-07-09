import "./src/scss/style.scss";
import "@fortawesome/fontawesome-free/css/all.css";

const colorChange = function(e, color = 0) {
	if(color === 0) color = e.target.value;
	document.body.style.backgroundColor = color;
	document.querySelector('.card__span').textContent = ` ${color}`;
	document.querySelector('.card__span').style.color = color;
	if(color === 'White') {
		document.querySelector('.card__span').style.color = 'black';
	}
	closeColorbar();
};

const closeColorbar = function() {
	colorbar.style.transform = '';
};

const addRadioEvent = function() {
	const radios = document.querySelectorAll('input[name="colortoggle"]');
	const lis = Array.prototype.slice.call(document.getElementsByClassName('colorbar__item'));

	radios.forEach.call(radios, function(radio, i = 0) {
	
			lis[i].style.backgroundColor = radio.value;

			const keyStrokes = {1: 'White', 2: 'Red',3: 'Yellow', 4: 'Blue',5: 'Green',6: 'Orange'};

			radio.addEventListener('change', colorChange);
			window.addEventListener('keydown', (e) =>{
				const pressedKey = Number(e.key);
				for(let key of Object.keys(keyStrokes)) {
					if(pressedKey === Number(key)) {
						colorChange(e, keyStrokes[key]);
					}
				}
			i++;
		})
	})
};

const colorbar = document.querySelector('.colorbar');

addRadioEvent();