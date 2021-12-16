import React, { Component } from 'react'
import './App.css'

class Headings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <h2>{this.props.heading}</h2>
            </div>
        )
    }
}

export default Headings