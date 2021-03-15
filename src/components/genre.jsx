import React, { Component } from 'react';

class Genre extends Component {
    render() { 
        return (
            <React.Fragment>
                <ul class="list-group">
                    {this.props.items.map(genre=> (
                        <li key={genre._id} onMouseOver={() => this.props.onClickGenre(genre)} className={genre === this.props.selectedGenre ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>{genre.name}</li>
                    ))}
                </ul>
            </React.Fragment>
          );
    }
}
 
export default Genre;