import React, { Component } from 'react';
import Like from './like';
import { Route } from "react-router-dom";
import MovieLink from './movielink';
import MoviesID from './moviesID';
import { NavLink } from "react-router-dom";


class TableBody extends Component {
    render() { 
        return (
            <React.Fragment>
            <tbody>
                {this.props.movies.map(movie => (
                    <tr key={movie._id}>
                    <td>
                    <NavLink to={`/movies/${movie._id}`} className="nar-link nav-item">
                    {movie.title}
                    </NavLink>
                    </td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like like={movie.liked} onClick={this.props.onLike} movies={movie} /></td>
                    <td><button onClick={() => this.props.onDelete(movie)} className='btn btn-danger'>Delete</button></td>
                </tr>
                ))}
            </tbody>
            </React.Fragment>
          );
    }
}
 
export default TableBody;