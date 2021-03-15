import React, { Component } from 'react';
import TableHeader from './tableheader';
import TableBody from './tablebody';

class Table extends Component {
    render() { 
        return ( 
        <React.Fragment>
        <table className="container table">
            <TableHeader
            column={this.props.column}
            onSort={this.props.onSort}
            sortColumn={this.props.sortColumn}
            />
            <TableBody
            movies={this.props.movies}
            onDelete={this.props.onDelete}
            onLike={this.props.onLike}
            />
        </table>
        </React.Fragment>    
        );
    }
}
 
export default Table;