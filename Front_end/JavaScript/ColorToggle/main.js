import './src/scss/style.scss'
import "@fortawesome/fontawesome-free/css/all.css";

const colorChange = function(e) {
	document.body.style.backgroundColor = e.target.value;
	document.querySelector('.card__span').textContent = ` ${e.target.value}`;
	document.querySelector('.card__span').style.color = e.target.value;
	if(e.target.value === 'White') {
		document.querySelector('.card__span').style.color = 'black';
	}
	closeColorbar();
}

const closeColorbar = function() {
	colorbar.style.transform = '';
}

const addRadioEvent = function() {
	const radios = document.querySelectorAll('input[name="colortoggle"]');
	const lis = Array.prototype.slice.call(document.getElementsByClassName('colorbar__item'));

	radios.forEach.call(radios, function(radio, i = 0) {
	
		lis[i].style.backgroundColor = radio.value;

		radio.addEventListener('change', colorChange)

		i++;
	})
}

const colorbar = document.querySelector('.colorbar');

// addBarEvent();
addRadioEvent();