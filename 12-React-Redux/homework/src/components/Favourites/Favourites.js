import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { removeMovieFavourite } from "../../actions";
import './Favourites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favourites && this.props.favourites.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                {movie.title}
              </Link>
              <button onClick={() => {this.props.removeMovieFavourite(movie.id)}}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    favourites: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch){
  return {
    removeMovieFavourite: movieId => dispatch(removeMovieFavourite(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
