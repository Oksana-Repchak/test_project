import ApiService from './api-service';
import moviesList from '../templates/movies-list.hbs';


const searchForm = document.querySelector('#searchForm');
const moviesContainer = document.querySelector('.js-movies-container');

const apiService = new ApiService();

searchForm.addEventListener('input', onSearch);

function onSearch(e) {
    apiService.query = e.target.value;
    if (apiService.query !== '') {
        apiService.fetchMoviesSearch()
            .then(renderMoviesCard);
    } else {
        clearMarkup();
    };
};

function renderMoviesCard(movies) {
    const allMoviesMarkup = moviesList(movies);
    moviesContainer.innerHTML = allMoviesMarkup;
};

function clearMarkup() {
    moviesContainer.innerHTML = '';
}