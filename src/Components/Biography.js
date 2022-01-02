import React, { Component } from 'react'
import './App.css'
import Inputfield from './Inputfield';



class Biography extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            values: {
                fname: '',
                lname: '',
                crole: '',
                telly: '',
                email: '',
                bioBio: '',
                location: '',
            }
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

        }, () => this.props.func2(this.state, 'bioObj', this.props.indy));

    }
    render() {
        return (
            <div className='divWrap'>
                <Inputfield type="text" dispText="First Name" newData="fname" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="Last Name" newData="lname" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="Email" newData="email" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="Tel" newData="telly" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="Current Role" newData="crole" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="Location" newData="location" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="textarea" dispText="Small Bio" newData="bioBio" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
            </div>
        )
    }
}


export default Biography