import React from 'react';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';
// import movies from '../exampleMovieData/exampleMovieData.js';
import axios from 'axios';
import API_KEY from '../../key.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      displayList: [],
      watched: [],
      notWatched: [],
      search: '',
      selectedDisplay: 0,
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleWatchToggle = this.handleWatchToggle.bind(this);
    this.handleDisplayToggle = this.handleDisplayToggle.bind(this);
  }

  //  initialize the display/unwatched lists and add a watch property to each movie
  componentDidMount() {
    axios.get('http://localhost:3000/api/movies')
      .then(data => this.setState({ movieList: data.data}, this.setState({ displayList: this.state.movieList.slice()}))).then(() => this.handleSearchSubmit(''))
  }

  //  change the state of the search parameter
  handleSearchSubmit(searchTerm) {
    event.preventDefault();
    axios.get('http://localhost:3000/api/movies/search', {params: { search: searchTerm } })
      .then(data => {
        this.setState({ displayList: data.data });
      })
      .catch(err => console.log(err));
  }

  //  include the movie the user wants to add to the main movie list
  handleAddMovie(newMovie) {
    event.preventDefault();
    axios.post('http://localhost:3000/api/movies', {title: newMovie, watched: 0}).then(() => this.handleSearchSubmit(''));
  }

  //  changes whether the user wants to look at watched or unwatched movies
  handleDisplayToggle(display) {
    if (display === 'watched') {
      this.setState({ displayList: this.state.watched.slice() , selectedDisplay: 1}, () => this.handleSearchSubmit(''))
    } else {
      this.setState({ displayList: this.state.notWatched.slice(), selectedDisplay: 0}, () => this.handleSearchSubmit(''))
    }
  }

  //  toggles a movie to be considered watched or unwatched
  handleWatchToggle(movie) {
    axios.patch('http://localhost:3000/api/movies', {Title: movie.Title, Watched: movie.Watched}).then(() => this.handleSearchSubmit(''));
  }

  //  render components to the screen
  render() {
    return (
      <div>
        <SearchBar
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <AddMovie
          handleAddMovie={this.handleAddMovie}
        />
        <button style={{display: 'inline'}} onClick={() => this.handleDisplayToggle('watched')}>Watched</button>
        <button onClick={() => this.handleDisplayToggle('toWatch')}>To Watch</button>
        <MovieList
          movieList={this.state.displayList}
          selectedDisplay={this.state.selectedDisplay}
          handleWatchToggle={this.handleWatchToggle}
        />
      </div>
    );
  }
}

export default App;