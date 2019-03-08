import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    filterAuthors: authors
  };

  // Changing Current Author To Presint His/Her Detail
  selectAuthor = author => this.setState({ currentAuthor: author });

  // To Go Back To The Authors List Page
  unselectAuthor = () => {
    this.setState({ currentAuthor: null });
  };

  filterAuthors = query => {
    this.setState({
      filterAuthors: authors.filter(author => {
        const authorName = `${author.first_name} ${
          author.last_name
        }`.toLowerCase();
        return authorName.includes(query.toLowerCase());
      })
    });
  };

  getView = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.filterAuthors}
          selectAuthor={this.selectAuthor}
          filterAuthors={this.filterAuthors}
        />
      );
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
