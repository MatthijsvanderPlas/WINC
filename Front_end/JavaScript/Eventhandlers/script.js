const btn = document.querySelector('.btn-alert');

btn.addEventListener('click', (e) => {
    e.preventDefault;
    alert('button clicked!');
})

const btnBackground = document.querySelector('.btn-background');

btnBackground.addEventListener('click', (e) => {
    btnBackground.parentElement.classList.toggle('red-background');
});

