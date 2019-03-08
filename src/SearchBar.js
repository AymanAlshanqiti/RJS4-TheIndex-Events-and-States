import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    query: ""
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
    this.props.filterAuthors(event.target.value);
  };

  render() {
    return (
      <div className="col-12">
        <input
          type="text"
          class="form-control ds-input"
          placeholder="Search..."
          value={this.state.query}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
