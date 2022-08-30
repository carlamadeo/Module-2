import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVOURITE, REMOVE_MOVIE_FAVOURITE} from '../actions/index'

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: ''
};

export default function rootReducer(state = initialState, action) {

    switch (action.type) {

        case ADD_MOVIE_FAVOURITE: 
            
        if(!state.moviesFavourites.find(movie => movie.id === action.payload.id)){
            return {
                ...state,
                moviesFavourites: [...state.moviesFavourites, action.payload]
            }
        }
        else{
            return state;
        }
        
        
        case GET_MOVIES:
        return {
            ...state,
            moviesLoaded: action.payload.Search
        };

        case GET_MOVIE_DETAIL:
        return {
            ...state,
            movieDetail: action.payload
        };

        case REMOVE_MOVIE_FAVOURITE:
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload)
        };

        default:
            return state;
    }
}