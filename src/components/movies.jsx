import React, { Component } from "react";
import { deleteMovie, getMovie, getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    upMovies: getMovies(),
  };

  deleteMovie(id) {
    let newMovies = this.state.upMovies.filter((movie) => movie._id !== id);
    this.setState((this.state.upMovies = newMovies));
  }

  render() {
    return (
      <div style = { {padding: "0 20px"} } >
        {this.state.upMovies.length == 0 ? (
          <h2>There are no movies.</h2>
        ) : (
          <h2>Showing {this.state.upMovies.length} in the database.</h2>
        )}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">numberInStock</th>
              <th scope="col">dailyRentalRate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.upMovies.map((movie) => (
              <tr>
                <th scope="row" key={movie}>
                  {movie.title}
                </th>
                <td>{movie.genre.name}</td>
                <td> {movie.numberInStock}</td>
                <td> {movie.dailyRentalRate}</td>
                <td>
                  <button
                    className=" btn btn-primary "
                    onClick={() => {
                      this.deleteMovie(movie._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
