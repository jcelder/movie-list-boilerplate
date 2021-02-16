import React from 'react';

class MovieEntry extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      buttonState: 'watch',
      toggle: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  //  toggle change to expand components
  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
    if (!this.props.movie.Watched) {
      this.setState({ buttonState: 'watch' });
    } else {
      this.setState({ buttonState: 'unwatch' });
    }
  }

  //  renders movie information to the screen based on if the movie has been toggled
  //  upon pressing the button it will switch the movie to watched or to watch
  render() {
    if (!this.state.toggle) {
      return (
        <div>
          <div onClick={this.handleToggle}>{this.props.movie.Title}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div style={{display: 'inline-block', width: '20%'}} onClick={this.handleToggle}>{this.props.movie.Title}</div>
          <ul>
            <li>
              Runtime: {this.props.movie.Runtime}
            </li>
            <li>
              Metascore: {this.props.movie.Metascore}
            </li>
            <li>
              imdbRating: {this.props.movie.imdbRating}
            </li>
            <li>
              <button onClick={() => this.props.handleWatchToggle(this.props.movie)}>
                {this.state.buttonState}
              </button>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default MovieEntry;