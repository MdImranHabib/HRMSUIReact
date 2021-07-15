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
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User Name: </label>
                        <input className='form-control' type='text' value={username} onChange={this.handleUserNameChange} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input className='form-control' type='password' value={password} onChange={this.handlePasswordChange} />
                    </div>                   
                    <div>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LogIn

