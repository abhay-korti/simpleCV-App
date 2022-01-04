import React, { Component } from 'react';
import './App.css'


export default class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='header main-header-div' >
                <h1 className='header main-header'>CV Maker</h1>
                <div>
                    <button onClick={this.props.addExampleFunc}>Example</button>
                </div>
            </div>
        )
    }
}