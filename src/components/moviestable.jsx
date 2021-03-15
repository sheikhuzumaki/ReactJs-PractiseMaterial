import React, { Component } from 'react';
import Table from './table';

class MoviesTable extends Component {
    column = 
    [
        {path: 'title' , lable: 'Title'},
        {path: 'genre.name' , lable: 'Genre'},
        {path: 'numberinstock' , lable: 'Stock'},
        {path: 'dailyrentalrate' , lable: 'Rate'},
        {key: 'like'},
        {key: 'delete'}
    ];
    render() { 
        const {movies , onDelete , onLike } = this.props;
    return ( 
        <Table
        column={this.column}
        onSort={this.props.onSort}
        sortColumn={this.props.sortColumn}
        movies={movies}
        onDelete={onDelete}
        onLike={onLike}
        />
     );
    }
}
 
 
export default MoviesTable;