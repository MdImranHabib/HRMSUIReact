import React, { Component } from 'react'

class LogIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',             
             password: ''
        }
    }

    handleUserNameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }    

    handlePasswordChange = (event) =>{
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.password}`)
        event.preventDefault()
    }
    
    render() {
        const { username, password} = this.state
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="username" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}

export default LogIn


