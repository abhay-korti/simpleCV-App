import React, { Component } from 'react'
import './App.scss'

class Inputfield extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.props.func(event.target.value, this.props.newData);
    }

    // componentDidMount() {
    //     this.props.func(this.props.defaultVal, this.props.newData);
    // }


    render() {
        if (this.props.type == "textarea") {
            return (
                <div className="App">
                    <textarea type={this.props.type} placeholder={this.props.dispText} rows="4" cols="27" onChange={this.onInputChange} value={this.props.exampleVal || ''} />
                </div>
            )
        }
        else {
            return (<div className="App">
                <input type={this.props.type} placeholder={this.props.dispText} onChange={this.onInputChange} value={this.props.exampleVal || ''}></input>
            </div>)
        }
    }
}

export default Inputfield