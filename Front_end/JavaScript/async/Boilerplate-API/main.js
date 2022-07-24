import './style.scss'
import { getGenreData } from './api-client';
import { searchMovie } from './api-client';

function addGenreToDom(genre) {
	const parent = document.querySelector('.genres__list')
	const child = document.createElement('li')
	child.innerHTML = `genre naam: ${genre.name}, id:${ genre.id}`
	parent.appendChild(child);
}

function addFavouriteMovie(movie) {
	const parent = document.querySelector('.favourite');
	const title = document.createElement('h1')
	const overview = document.createElement('p');
	title.innerHTML = `${movie.original_title}`
	overview.innerHTML = `${movie.overview}`;
	parent.appendChild(title)
	parent.appendChild(overview);
}


async function api() {
    const genreData = await getGenreData();
    genreData.genres.forEach(genre => addGenreToDom(genre))
};

async function test() {
	const searchedMovie = await searchMovie('The Lion King');
	addFavouriteMovie(searchedMovie)
}

api();
test();