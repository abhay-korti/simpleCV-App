import React, { Component } from 'react'
import './App.scss'
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

        }, () => this.props.func2(this.state, 'bioObj', this.props.indy));
    }



    render() {
        if (this.props.example != undefined && this.counter < this.props.exCounter) {
            this.state = this.props.example;
            this.counter = this.counter + 1;
        }
        return (
            <div className='divWrap'>
                <Inputfield type="text" dispText="First Name" newData="fname" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.fname} />
                <Inputfield type="text" dispText="Last Name" newData="lname" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.lname} />
                <Inputfield type="text" dispText="Email" newData="email" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.email} />
                <Inputfield type="text" dispText="Tel" newData="telly" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.telly} />
                <Inputfield type="text" dispText="Current Role" newData="crole" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.crole} />
                <Inputfield type="text" dispText="Location" newData="location" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.location} />
                <Inputfield type="textarea" dispText="Small Bio" newData="bioBio" id={`${this.props.indy}`} func={this.onUpdate} exampleVal={this.state.values.bioBio} />
            </div>
        )
    }
}


export default Biography