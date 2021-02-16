import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovie: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //  handles a change from entering in the text box
  handleChange(event) {
    this.setState({ newMovie: event.target.value})
  }

  //  renders add box to the screen and calls the funciton to add a movie to movie list upon submitting
  render () {
    return (
    <form onSubmit={() => this.props.handleAddMovie(this.state.newMovie)}>
      <input onChange={this.handleChange} value={this.state.newMovie}></input>
      <button>Add Movie</button>
    </form>
    );
  }
}

export default AddMovie;