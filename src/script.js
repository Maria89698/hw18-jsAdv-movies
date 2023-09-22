const { log } = require("console");
const { method } = require("lodash");

const moviesSearchForm = document.querySelector('.movies-form');
const moviesTable = document.querySelector('.movies-table');    
const BASE_URL = 'http://localhost:3000/movies';

function getMovies() {
    return fetch(`${BASE_URL}/movies`)
    .then(res => res.json())
};

function getMoviesById(id) {
    return fetch(`${BASE_URL}/movies/${id}`)
    .then(res => res.json())
};

const newMovie = {
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    year: 1994
};

function postMovies() {
    const options = {
        method: "POST",
        
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(newMovie),
    }
        
    
    return fetch(`${BASE_URL}/movies`)
    .then(res => res.json())
};

postMovies().then(res => console.log(res)).catch(error => console.error(error));