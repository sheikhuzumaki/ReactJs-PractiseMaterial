import React, { Component } from 'react';
import {getMovies} from './fakeMovieService';
import Page from './page';
import Paginate from '../utils/paginate';
import Genre from './genre';
import {getGenres} from './fakeGenreService';
import MoviesTable from './moviestable';
import _ from 'lodash';

export default class Movies extends Component {
    state = 
    { 
        movies: [],
        PageSize: 4,
        CurrentPage: 1,
        genres: [],
        selectedGenre: null,
        sortColumn:{ path:'title' , order:'asc'}
    }

    componentDidMount()
    {
        const genre = [ {_id: "" , name: "All Genre"} ,... getGenres()];
        this.setState({movies: getMovies() , genres: genre});
    }

    delete = movie => 
    {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }
    like = movie =>
    {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
        
    }
    onPagination = page => {
        this.setState({CurrentPage : page});
    };
    handleGenre = genre =>
    {
        this.setState({selectedGenre : genre , CurrentPage : 1});
    }
    sort = sortColumn =>
    {
        this.setState({sortColumn});
    }
    render() { 
        if(this.state.movies.length == 0 ) return <h1>No Movies</h1>;
        const filterMovies = this.state.selectedGenre && this.state.selectedGenre._id ? this.state.movies.filter(m => m.genre._id === this.state.selectedGenre._id) : this.state.movies;
        const sortMovies = _.orderBy(filterMovies , [this.state.sortColumn.path] , [this.state.sortColumn.order]);
        const movies = Paginate (sortMovies , this.state.CurrentPage , this.state.PageSize);
        return (
        <React.Fragment>
        <h1>Showing {filterMovies.length} movies from database.</h1>
        <div className='row'>
        <div className='col-3'>
            <Genre
            onClickGenre={this.handleGenre}
            items={this.state.genres}
            selectedGenre={this.state.selectedGenre}
            />
        </div>
        <div className='col'>
        <MoviesTable
        movies={movies}
        sortColumn={this.state.sortColumn}
        onLike={this.like}
        onDelete={this.delete}
        onSort={this.sort}
        />
        <Page
        Count={filterMovies.length}
        PageSize={this.state.PageSize}
        CurrentPage={this.state.CurrentPage}
        onPageChange={this.onPagination}
        />
        </div>
        </div>
        </React.Fragment>
        );
    }
}
 
