import React, { Component } from 'react'
import Inputfield from './Inputfield'
import WorkDisp from './Display_WorkEx'
import './App.scss'

class WorkEx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '0',
            values: {
                expCname: '',
                expCrole: '',
                expFrom: '',
                expTo: '',
                expBio: '',
            },
        }
        this.counter = 0;
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate(value, x) {
        this.setState({
            id: this.props.indy,
            values: {
                ...this.state.values,
                [x]: value
            }
        }, () => this.props.func2(this.state, 'expObj', this.props.indy));
    }
    render() {
        if (this.props.example != undefined && this.counter < this.props.exCounter) {
            this.state = this.props.example;
            this.counter = this.counter + 1;
        }
        return (
            <div className='divWrap'>
                <Inputfield type="text" dispText="Company Name" newData="expCname" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.expCname} />
                <Inputfield type="text" dispText="Role" newData="expCrole" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.expCrole} />
                <Inputfield type="text" dispText="From" newData="expFrom" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.expFrom} />
                <Inputfield type="text" dispText="To" newData="expTo" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.expTo} />
                <Inputfield type="textarea" dispText="Small Bio" newData="expBio" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.expBio} />
            </div>
        )
    }
}

export default WorkEx