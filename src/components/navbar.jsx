import React, { Component } from 'react';
import { NavLink , Link } from "react-router-dom";

class Navbar extends Component {
    render() { 
        return (
            <nav className=' navbar navbar-expand-lg navbar-dark bg-dark text-white'>
                <Link to="/" className="navbar-brand">Vildy</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto">
                        
                        <NavLink className='nav-item nav-link' to='/movies'>Movies</NavLink>
                        
                        
                        <NavLink className='nav-item nav-link' to='/customers'>Customers</NavLink>
                        
                        
                        <NavLink className='nav-item nav-link' to='/rentals'>Rentals</NavLink>

                        <NavLink className='nav-item nav-link' to='/login'>Log In</NavLink>
                        
                    </div>
                </div>
            </nav>
          );
    }
}
 
export default Navbar;