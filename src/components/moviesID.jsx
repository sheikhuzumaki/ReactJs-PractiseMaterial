import React, { Component } from 'react';

class MoviesID extends Component {
    handleSave = () => {
        return this.props.history.replace("/movies");
      };
    render() { 
        return ( 
            <div>
            <h1>
                Movies : {this.props.match.params.id}
            </h1>
            <button className="btn btn-success" onClick={this.handleSave}>
                Save
            </button>
        </div>
         );
    }
}
 
export default MoviesID;