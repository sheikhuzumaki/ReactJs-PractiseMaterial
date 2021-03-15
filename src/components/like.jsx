import React, { Component } from 'react';

class Like extends Component {
    render() { 
        let classess = "fa fa-heart";
        if(!this.props.like) classess+= "-o";
        return ( <i className={classess} style={{curson : 'pointer' }} onClick={() => this.props.onClick(this.props.movies)} aria-hidden="true"></i> );
    }
}
 
export default Like;