import React, { Component } from 'react'
import Inputfield from './Inputfield'
import './App.scss'


class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            values: {
                eduCname: '',
                eduDeg: '',
                eduFrom: '',
                eduTo: '',
                eduBio: '',
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
        }, () => this.props.func2(this.state, 'eduObj', this.props.indy));
    }

    render() {
        if (this.props.example != undefined && this.counter < this.props.exCounter) {
            this.state = this.props.example;
            this.counter = this.counter + 1;
        }
        return (
            <div className='divWrap'>
                <Inputfield type="text" dispText="School/University" cat="education" newData="eduCname" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.eduCname} />
                <Inputfield type="text" dispText="Degree/Diploma" cat="education" newData="eduDeg" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.eduDeg} />
                <Inputfield type="text" dispText="From" cat="education" newData="eduFrom" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.eduFrom} />
                <Inputfield type="text" dispText="To" cat="education" newData="eduTo" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.eduTo} />
                <Inputfield type="textarea" dispText="Small Bio" cat="education" newData="eduBio" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.eduBio} />
            </div>
        )
    }
}

export default Education