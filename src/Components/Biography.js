import React, { Component } from 'react'
import Display from './Display_Bio';
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

        }, () => console.log(this.state))

    }
    render() {
        return (
            <div>
                <Inputfield type="text" dispText="First Name" newData="fname" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="Role" newData="lname" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="From" newData="email" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="To" newData="telly" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="text" dispText="To" newData="crole" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Inputfield type="textarea" dispText="Small Bio" newData="expBio" cat="experience" id={`${this.props.indy}`} func={this.onUpdate} />
                <Display bio={this.state} />
            </div>
        )
    }
}


export default Biography