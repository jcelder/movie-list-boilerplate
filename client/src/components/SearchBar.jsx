import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  //  handles a change from entering in the text box
  handleChange(event) {
    this.setState({ search: event.target.value })
  }
  //  renders search box to the screen and calls the funciton to change the search term upon submitting
  render() {
    return (
      <form onSubmit={() => this.props.handleSearchSubmit(this.state.search)}>
        <input type="text" value={this.state.search} onChange={this.handleChange}></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;