import React, { Component } from 'react'
import Inputfield from './Inputfield'
import './App.css'


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
        return (
            <div className='divWrap'>
                <Inputfield type="text" dispText="School/University" cat="education" newData="eduCname" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="Degree/Diploma" cat="education" newData="eduDeg" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="From" cat="education" newData="eduFrom" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="To" cat="education" newData="eduTo" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="textarea" dispText="Small Bio" cat="education" newData="eduBio" id={`${this.props.indy}`} func={this.onUpdate} />
            </div>
        )
    }
}

export default Education