import React, { Component } from 'react'
import Inputfield from './Inputfield'
import './App.css'
import EducDisp from './Display_Educ'

class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            values: {
                eduName: '',
                eduDeg: '',
                eduFrom: '',
                eduTo: '',
                eduBio: '',
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
                <Inputfield type="text" dispText="School/University" cat="education" newData="eduCname" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="Degree/Diploma" cat="education" newData="eduCname" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="From" cat="education" newData="eduCname" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="To" cat="education" newData="eduCname" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="textarea" dispText="Small Bio" cat="education" newData="eduCname" id={`${this.props.indy}`} func={this.onUpdate} />
                <EducDisp bio={this.state} />
            </div>
        )
    }
}

export default Education