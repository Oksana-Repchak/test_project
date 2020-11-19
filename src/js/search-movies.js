import ApiService from './api-service';
import movieCardTpl from "../templates/movie-card.hbs";
import moviesList from '../templates/movies-list.hbs';

const API_KEY = 'b4c2f63def68e49abedf5a34ac5e443b';
const BASE_URL = 'https://api.themoviedb.org/3';

const searchForm = document.querySelector('#searchForm');
const moviesContainer = document.querySelector('.js-movies-container');

const apiService = new ApiService();

// async function fetchMoviesByKeyWord(searchQuerry){
//     try {
//         const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuerry}`);
//         const data = await response.json();
//         return data.results;
//     } catch(error) {
//         return error;
//     }
// };

// apiService.fetchMoviesSearch()

searchForm.addEventListener('input', onSearch);

function onSearch(e) {
    apiService.query = e.target.value;
    console.log(e.target.value);
    console.log(apiService.query);
    if (apiService.query !== '') {
        apiService.fetchMoviesSearch(apiService.query)
            .then(renderMoviesCard);
    } else {
        clearMarkup();
    };
};

function renderMoviesCard(movies) {
    const movieMarkup = movieCardTpl(...movies);
  const allMoviesMarkup = moviesList(movies);

    if (movies.length === 1) {
        console.log(movies.length);
        moviesContainer.innerHTML = movieMarkup;
    } else {
        console.log(movies.length);
        moviesContainer.innerHTML = allMoviesMarkup;
    }
};

function clearMarkup() {
    moviesContainer.innerHTML = '';
}