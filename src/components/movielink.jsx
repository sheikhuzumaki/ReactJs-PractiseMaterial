import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const MovieLink = (props) => {
    return ( 
        <NavLink to={`/movies/${props.movie._id}`} className="nar-link nav-item">
            {props.movie.title}
        </NavLink>
     );
}
 
export default MovieLink;