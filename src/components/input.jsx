import React, { Component } from 'react';

const Input = (props) => {
    return ( 
        <React.Fragment>
            <div className="form-group">
            <label htmlFor={props.name} >{props.label}</label>
            <input name={props.name} value={props.value} onChange={props.onChange} type={props.type} className="form-control" id={props.name}></input>
            {props.errs && <div className='alert alert-danger'>{props.errs}</div>}
            </div>
        </React.Fragment>
     );
}
 
export default Input;