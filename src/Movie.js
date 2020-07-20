import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

class Movie extends Component{

    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired,
        genres : PropTypes.array.isRequired,
        synopsis : PropTypes.string.isRequired
    }

    render() {
        console.log(this.props)
        return(
            <div className="Movie">
                <div className="Movie_Colums">
                <MoviePoster poster={this.props.poster}/>
                </div>
                 <div className="Movie_Colums">
                <h1>{this.props.title}</h1>
                </div>
                <div className="Movie_Genres">
                <MovieGenres genres={this.props.genres}/>
                </div>
                <div className="Movie_synopis">
                    <LinesEllipsis 
                    text={this.props.synopsis} 
                    maxLine='3' ellipsis='...' 
                    trimRight 
                    basedOn='letters'/>
                </div>
            </div>
        )
    }
}

class MovieGenres extends Component{
    static propTypes = {
        genres : PropTypes.array.isRequired
    }
    render(){
    return <span className="Movie_Genres">{this.props.genres}</span>
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster : PropTypes.string.isRequired,
    }

    render(){
        return(
            <img src={this.props.poster} alt="Movie_Poster" className="Movie_Poster"/>
            
        )
    }
}

// function MoviePoster({poster}){
//     return (
//         <img src={poster} alt="Movie Poster"/>
//     )
// }

export default Movie
 