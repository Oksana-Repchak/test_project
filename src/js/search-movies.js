import NewsApiService from './api-service';
import moviesList from '../templates/movies-list.hbs';


const searchForm = document.querySelector('#searchForm');
const moviesContainer = document.querySelector('.js-movies-container');

const newApiService = new NewsApiService();

searchForm.addEventListener('input', onSearch);

function onSearch(e) {
    e.preventDefault();

  newApiService.query = e.target.value;
    if (newApiService.query !== '') {
        newApiService.insertSearchGenresOfMovie()
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