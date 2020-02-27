import React, { Component, version } from 'react'
import {withRouter } from 'react-router-dom';
import { prettyDOM } from '@testing-library/react';

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            emailOrPhone: null,
            password: null,
            
        }
    }

    handleChange = (event) => {
        console.log("handlechange");

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signup = () => {
        this.props.history.push("/signup")
    }

    login = (event) => {
        event.preventDefault();
        const {emailOrPhone, password} = this.state;

        let registerlist = JSON.parse(localStorage.getItem("registerlist") || '[]');

        registerlist.forEach(user => {
            if((user.email === emailOrPhone || user.phoneNumber === emailOrPhone) && (user.password === password)){
                console.log("true") 
                this.props.history.push("/home")
            }
            else{
                console.log("false")
            }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input type="text" name="emailOrPhone" onChange={this.handleChange} placeholder="email or phone number"></input>
                    <input type="password" name="password" onChange={this.handleChange} placeholder="enter password"></input>
                    <input type="submit" value="login"></input>
                    <input type="button" value="signup" onClick={this.signup}></input>
                </form>
            </div>
        )
    }
}


export default withRouter(Login)