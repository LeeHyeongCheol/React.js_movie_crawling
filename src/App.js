import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Oldboy",
//   "Star Wars"
// ]

// const movieImages = [
//   "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
//   "https://i.ytimg.com/vi/6hkNuykz2RE/maxresdefault.jpg",
//   "https://img.sbs.co.kr/newsnet/etv/upload/2013/11/12/30000332514_700.jpg",
//   "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/220px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
// ]

// const movies = [
//   {
    
//     title:"Matrix",
//     poster:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
//   },
//   {
    
//     title:"Full Metal Jacket",
//     poster:"https://i.ytimg.com/vi/6hkNuykz2RE/maxresdefault.jpg",
//   },
//   {
    
//     title:"Oldboy",
//     poster:"https://img.sbs.co.kr/newsnet/etv/upload/2013/11/12/30000332514_700.jpg",
//   },
//   {
    
//     title:"Star Wars",
//     poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/220px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg",
//   }
// ]

//will mount->did render->did mount

class App extends Component {

  state = {
    // greeting: 'Hello!',
    // movies: [
    //     {
    //       title:"Matrix",
    //       poster:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
    //     },
    //     {
    //       title:"Full Metal Jacket",
    //       poster:"https://i.ytimg.com/vi/6hkNuykz2RE/maxresdefault.jpg",
    //     },
    //     {
    //       title:"Oldboy",
    //       poster:"https://img.sbs.co.kr/newsnet/etv/upload/2013/11/12/30000332514_700.jpg",
    //     },
    //     {
    //       title:"Star Wars",
    //       poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/220px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg",
    //     },
    //     {
    //       title:"Transpoter",
    //       poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/e/e4/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg/220px-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg",
    //     }
    //   ]
  }

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({
    //     ...this.state.movies,
    //     movies: [
    //           {
    //             title:"Matrix",
    //             poster:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
    //           },
    //           {
    //             title:"Full Metal Jacket",
    //             poster:"https://i.ytimg.com/vi/6hkNuykz2RE/maxresdefault.jpg",
    //           },
    //           {
    //             title:"Oldboy",
    //             poster:"https://img.sbs.co.kr/newsnet/etv/upload/2013/11/12/30000332514_700.jpg",
    //           },
    //           {
    //             title:"Star Wars",
    //             poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/220px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg",
    //           },
    //           {
    //             title:"Transpoter",
    //             poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/e/e4/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg/220px-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%98%81%ED%99%94.jpg",
    //           }
    //         ]    
    //   })    }, 3000);
    this._getMovies();
  }
  
 
  
    _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => { //array.map() 새로운 배열 생성
           return <Movie 
           title={movie.title_english} 
           poster={movie.medium_cover_image} 
           key={movie.id} 
           genres={movie.genres} 
           synopsis={movie.synopsis}/>
    })
    return movies
  }

  _callMovies = () => {

  }

  _callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?sort by=download count")
    .then(photo => photo.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
         {/* {this.state.movies.map((movie,index) => { //array.map() 새로운 배열 생성
           return <Movie title={movie.title} poster={movie.poster} key={index} />
         })} */
         movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App; 
