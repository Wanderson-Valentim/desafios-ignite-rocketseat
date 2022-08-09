import MovieCard from '../components/MovieCard';
import { GenreResponseProps, MovieProps } from '../assets/Interfaces'
import React from 'react';


interface ContentProps {
  selectedGenre: GenreResponseProps,
  movies: MovieProps[]
}


function Content({selectedGenre,movies}:ContentProps) {
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}


export default React.memo(Content, (prevProps , nextProps) => {
  const selectedGenreIsEqual = Object.is(prevProps.selectedGenre, nextProps.selectedGenre)
  const moviesIsEqual = Object.is(prevProps.movies, nextProps.movies)

  return selectedGenreIsEqual && moviesIsEqual
});