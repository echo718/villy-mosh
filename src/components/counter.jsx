import React, { Component, Fragment } from "react";
import { getMovie, getMovies } from "../services/fakeMovieService";
import upMovies from "./movies";


class Counter extends Component {
  
  state = {
    count: 0,
    movies: upMovies
     
  }

  // state = {
   
  // };

  // getBadgeClass() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.count === 0 ? "primary" : "warning";
  //   return classes;
  // }

  handelIncremental = (id) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {console.log(this.state.movies)}
       <span>Showing {this.state.movies.length} movies in the database.</span>
        
        {/* <button
          onClick={() => {
            this.handelIncremental({ id: 1 });
          }}
          className=" btn btn-secondary btn-sm "
        >
          Incremental
        </button> */}
        {/* {this.state.tags.length === 0 ? (
          <h1>There is no tag!</h1>
        ) : (
          <ul>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )} */}
      </React.Fragment>
    );
  }
}

export default Counter;


