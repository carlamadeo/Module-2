import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {


    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id);        
    }

    render() {
        return (
            <div className="movie-detail">
                {this.props.movieDetail ? (
                <div>
                    <div>
                        <span>Title: </span>
                        <span>{this.props.movieDetail.Title}</span>
                    </div>
                    <div>
                        <img src={this.props.movieDetail.Poster} alt='poster'></img>
                    </div>
                </div>)
                : <h1>Cargando...</h1>
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        movieDetail: state.movieDetail
    }
}

function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);