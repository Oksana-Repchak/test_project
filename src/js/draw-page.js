
import moviePosterTpl from '../templates/movies-list.hbs';
import NewsApiService from './api-service';


const listElement = document.querySelector('.js-movies-container');

const newApiService = new NewsApiService();

render();

// рендер первой страницы
function render() {
  newApiService
    .insertGenresOfMovie()
    .then(renderMoviesCard)
    .catch(err => {
      console.log('error render');
    });
}

// для разметки
function renderMoviesCard(articles) {
  listElement.innerHTML = moviePosterTpl(articles);
}

