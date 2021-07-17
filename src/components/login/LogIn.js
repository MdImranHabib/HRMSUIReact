import React, { Component } from 'react'

class LogIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.password}`)
        event.preventDefault()
    }

    render() {
        const { username, password } = this.state
        return (
           <div></div>
        )
    }
}

export default LogIn


