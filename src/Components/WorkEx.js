import React, { Component } from 'react'
import Inputfield from './Inputfield'
import Display from './Display_Bio'
import './App.css'

class WorkEx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            values: {
                expCname: '',
                expCrole: '',
                expFrom: '',
                expTo: '',
                expBio: '',
            },
        }
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate(value, x) {
        console.log(value, x)
        this.setState({
            id: this.props.indy,
            values: {
                ...this.state.values,
                [x]: value
            }
        })
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <Inputfield type="text" dispText="Company Name" newData="expCname" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="Role" newData="expCrole" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="From" newData="expFrom" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="To" newData="expTo" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="textarea" dispText="Small Bio" newData="expBio" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
            </div>
        )
    }
}

export default WorkEx