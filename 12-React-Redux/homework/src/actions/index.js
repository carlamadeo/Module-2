export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE_FAVOURITE = 'ADD_MOVIE_FAVORITE';
export const REMOVE_MOVIE_FAVOURITE = 'REMOVE_MOVIE_FAVORITE';

const API_KEY = '4530b205';


export function getMovies(title) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        });
        
    };
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIE_DETAIL, payload: json });
        });
    };
}

export function addMovieFavourite(movie) {
    return { type: ADD_MOVIE_FAVOURITE, payload: movie };
}
  
export function removeMovieFavourite(id) {
    return { type: REMOVE_MOVIE_FAVOURITE, payload: id };
}