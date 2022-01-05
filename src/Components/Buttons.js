import React, { Component } from "react";
import './App.scss'

export default class Buttons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.prop1}>Add</button>
                <button onClick={this.props.prop2}>Delete</button>
            </div>
        )
    }
}