import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {
        userName: '',
        city: ''
    }
    onChangeHandler = (evt) => {
        let name = evt.target.name
        let value = evt.target.value
        this.setState({
            [name]: value
        })
    }
    onSubmitHandler = (evt) => {
        evt.preventDefault()
        alert(this.state.userName)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>Username</h3>
                    <input name="userName" onChange={this.onChangeHandler} type="text"></input>
                    <h3>Username is {this.state.userName}</h3>
                    <h3>City</h3>
                    <input name="city" onChange={this.onChangeHandler} type="text"></input>
                    <h3>City is {this.state.city}</h3>
                    <input type="submit" value="Save"></input>
                </form>
            </div>
        )
    }
}
