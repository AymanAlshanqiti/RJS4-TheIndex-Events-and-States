import React, { Component } from "react";

class SearchBar extends Comment {
  state = { query: "" };

  handleChange = event => {
    this.setState({ query: event.targer.value });
  };

  render() {
    return (
      <div>
        <span />
      </div>
    );
  }
}
