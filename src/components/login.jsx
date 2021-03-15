import React, { Component } from 'react';
import Input from './input';
import Joi from 'joi-browser';

class LogInForm extends Component {

    state = {
        data : { username : "" , password : ""},
        errs : {}
    };

    schema = {
        username : Joi.string().required().label('UserName'),
        password : Joi.string().required().label("Password")
    };

    username = React.createRef();

    validate = () => {

        const result = Joi.validate(this.state.data , this.schema , {abortEarly : false} );
        console.log(result);

        const errs = {};

        if(!result.error) return null;

        for(let item of result.error.details)
        {
            errs[item.path[0]] = item.message;  
        }

        return errs;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errs = this.validate();
        console.log(errs);
        this.setState({errs : errs || {}});
        if(errs) return ;

        console.log("Submitted");
    }

    validateChange = ({name , value}) => {
        const obj = {[name] : value};
        const schema = {[name] : this.schema[name]};
        const {error} = Joi.validate(obj , schema);
        
        return error ? error.details[0].message : null ;
    }

    handleChange = ({currentTarget : input}) => {
        const errs = {... this.state.errs};
        const errMessage = this.validateChange(input);
        if(errMessage)
        {
            errs[input.name] = errMessage;
        }
        else
        {
            delete errs[input.name];
        }
        const data = {...this.state.data}
        data[input.name] = input.value;
        this.setState({data , errs});
    }
    render() { 
        return ( 
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                    name="username"
                    label="User Name"
                    value={this.state.data.username}
                    onChange={this.handleChange}
                    type="text"
                    errs = {this.state.errs.username}
                    />
                    <Input
                    name="password"
                    label="Password"
                    value={this.state.data.password}
                    onChange={this.handleChange}
                    type="password"
                    errs = {this.state.errs.password}
                    />
                    <div className="form-group">
                        <button 
                        disabled = {this.validate()}
                        className="btn btn-primary" id="Submit"
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default LogInForm;