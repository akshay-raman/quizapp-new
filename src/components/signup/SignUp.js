import React, { Component } from 'react'
import {withRouter } from 'react-router-dom';

class SignUp extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: null,
            phoneNumber: null,
            password: null,
            confirmPassword: null,
            userDataList: []
        }
    }

    register = (event) => {
        event.preventDefault();
        const {email, phoneNumber, password, confirmPassword} = this.state;

        let userData = {
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            confirmPassword: confirmPassword
        }

        let userDataList = JSON.parse(localStorage.getItem("registerlist") || '[]');
        userDataList = [...userDataList, userData]
        userDataList=JSON.stringify(userDataList)
        localStorage.setItem("registerlist", userDataList)
        this.props.history.push("/home")
    }

    handleChange = (event) => {
        console.log("handlechange");

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.register}>
                    <input type="text" name="email" onChange={this.handleChange} placeholder="enter email"></input>
                    <input type="text" name="phonenumber" onChange={this.handleChange} placeholder="enter phone number"></input>
                    <input type="password" name="password" onChange={this.handleChange} placeholder="enter password"></input>
                    <input type="text" name="email" onChange={this.handleChange} placeholder="email confirm password"></input>
                    <input type="submit" value="register"></input>
                    {/* <input type="button" value="signup"></input> */}
                </form>
            </div>
        )
    }
}

export default withRouter(SignUp)
