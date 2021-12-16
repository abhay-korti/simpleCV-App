import React, { Component } from 'react'
import './App.css'
class Inputfield extends Component {
    constructor(props) {
        super(props);

        this.state = {


        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.props.func(event.target.value, this.props.newData);
        // const id = this.props.id;
        // console.log(id);
        // const cate = this.props.cat;
        // const key = this.props.newData;
        // const value = event.target.value;

        // let newObj = {
        //     [cate]: {
        //         id: id,
        //         values: {
        //             [key]: value
        //         }
        //     }
        // }
        // this.setState(newObj)
        // console.log(newObj)
        // console.log(this.state)
    }

    render() {
        if (this.props.type == "textarea") {
            return (
                <div className="App">
                    <textarea type={this.props.type} placeholder={this.props.dispText} rows="4" cols="27" onChange={this.onInputChange}></textarea>
                </div>
            )
        }
        else {
            return (<div className="App">
                <input type={this.props.type} placeholder={this.props.dispText} onChange={this.onInputChange}></input>
            </div>)
        }
    }
}

export default Inputfield