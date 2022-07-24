export { getGenreData };
export { searchMovie };

const getData  = async (url) => {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmNjNTY3ODQ5YTkzYTA2ZTM1MDViNzFhYjQzMmVlZiIsInN1YiI6IjYyZGQxMTUwMGQ5ZjVhMDA2N2I3ODFjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qIhBJLH4AuHmAHJ5XWcbw2Nh69sKGvQ1WpXUYL76QkU'
        },
        mode: 'cors',
        cache: 'default'
    })
    return res
}

async function getGenreData() {
    const apiURL = `https://api.themoviedb.org/3/genre/movie/list`;
    try {
        const res = await getData(apiURL)
        
        const apiData = await res.json();
        return apiData
    } catch (err) {
        console.log(err)
    }
}

async function searchMovie(movie) {
    const apiURL = `https://api.themoviedb.org/3/search/movie?query=${movie}`;
    try {
        const res = await getData(apiURL)   

        const movieId = await res.json();

        const movieInfo = await getMovie(movieId.results[0].id)
        return movieInfo
    } catch (err) {
        console.log(err)
    }
}

async function getMovie(id) {
    const apiURL = `https://api.themoviedb.org/3/movie/${id}/external_ids`
    try {
        const res = await (await getData(apiURL)).json();

        const movieResult = await getMovieResult(res.imdb_id);

        return movieResult;
    } catch (err) {
        console.log(err)
    }
}

async function getMovieResult(id) {
    const apiURL = `https://api.themoviedb.org/3/find/${id}?external_source=imdb_id`;
    try {
        const res = await (await getData(apiURL)).json();
        return res.movie_results[0];
    } catch (err) {
        console.log(err)
    }
}