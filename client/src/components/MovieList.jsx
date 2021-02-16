import React from 'react';
import MovieEntry from './MovieEntry';

//  function to display movies based on search term
//  filters the movies by changing them to lowercase and only displaying ones that contain the search parameter
var MovieList = (props) => (
  <ul>
    {props.movieList.filter(movie => movie.Watched === props.selectedDisplay).map((movie, id) => (
      <li key={movie.Title + id}>
        <MovieEntry
          movie={movie}
          handleWatchToggle={props.handleWatchToggle}
        />
      </li>
    ))}
  </ul>
);

export default MovieList;