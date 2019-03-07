import React, { Component } from "react";

class AuthorDetail extends Component {
  render() {
    // Author Object
    const author = this.props.author;
    const authorBook = author.books.map(book => (
      <tr>
        <td>{book.title}</td>
        <td>{author.first_name + " " + author.last_name}</td>
        <td>
          <button
            className="btn"
            style={{
              backgroundColor: book.color
            }}
          />
        </td>
      </tr>
    ));

    return (
      <div className="author col-xs-10">
        <br />
        <hr />
        <br />
        <div>
          <h3>{author.first_name + " " + author.last_name}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail"
            alt={"Author:" + author.first_name}
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{authorBook}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
