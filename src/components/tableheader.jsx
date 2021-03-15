import React, { Component } from 'react';

class TableHeader extends Component {
    raiseSort = path => {
        const sortColumn = {... this.props.sortColumn};
        if(sortColumn.path === path)
        {
           sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        }
        else
        {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
        };
        sortIcon = column =>
        {
            if(column.path !== this.props.sortColumn.path) return null;
            if(this.props.sortColumn.order === 'asc') return <i className='fa fa-sort-asc'></i>
            if(this.props.sortColumn.order === 'desc') return <i className='fa fa-sort-desc'></i>
        }
    render() { 
        return ( 
            <React.Fragment>
                <thead>
                <tr>
                        {this.props.column.map(column => (
                        <th key={column.lable || column.key} onMouseOver={() => this.raiseSort(column.path)} >{column.lable} {this.sortIcon(column)}</th>
                        ))}
                </tr>
                </thead>
            </React.Fragment>
        );
    }
}
 
export default TableHeader;