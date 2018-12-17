import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import Paginate from "./utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";

class movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4
  };
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }
  handleDelete(key) {
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== key)
    });
  }
  handleLiked(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const { pageSize, currentPage, movies: allMovies, genres } = this.state;
    const count = this.state.movies.length;
    const movies = Paginate(allMovies, pageSize, currentPage);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup items={genres} />
        </div>
        <div className="col">
          <h1>showing {count} movies from database</h1>
          <table className="table">
            <thead>
              <tr>
                <th>title</th>
                <th>DailyRental</th>
                <th>no. of stocks</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>{movie.numberInStock}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLiked(movie)}
                    />
                  </td>
                  <td
                    className="badge badge-danger"
                    onClick={() => this.handleDelete(movie._id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
            itemsCount={count}
          />
        </div>
      </div>
    );
  }
}

export default movies;
