import ApiService from './api-service';

import moviesList from '../templates/movies-list.hbs';

const searchForm = document.querySelector('#searchForm');
const moviesContainer = document.querySelector('.js-movies-container');

const apiService = new ApiService();

searchForm.addEventListener('submit', onSearch)

function onSearch(e) {
    e.preventDefault();

  apiService.query = e.currentTarget.elements.query.value;
        
  apiService.resetPage();
  clearListMovies();
  viewMarkup();
}

function listMoviesMarkup(movies) {
  moviesContainer.insertAdjacentHTML('beforeend', moviesList(movies));
}

function clearListMovies() {
  moviesContainer.innerHTML = '';
}

async function viewMarkup() {
try {
    const response = await apiService.fetchMoviesSearch();
    listMoviesMarkup(response);
    apiService.incrementPage();
  }
  catch (error) {
    console.log('Error');
  }
}