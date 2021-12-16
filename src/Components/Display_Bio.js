import React, { Component } from 'react'


export default class Bio_Display extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>{`${this.props.bio.values.fname} ${this.props.bio.values.lname}`}</h2>
            </div>
        )
    }
}

