import alertify from 'alertifyjs'
import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default class FormDemo2 extends Component {
    state = {
        email: '',
        pword: '',
        city: '',
        desc: ''
    }
    handleChange = (evt) => {
        let name = evt.target.name
        let value = evt.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        alertify.success(this.state.email + "added")
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="e-mail" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="pword">Password</Label>
                        <Input type="password" name="pword" id="pword" placeholder="password" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="desc">Description</Label>
                        <Input type="textarea" name="desc" id="desc" placeholder="description" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" id="city" placeholder="city" onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>IStanbuul</option>
                            <option>Izmir</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        )
    }
}
