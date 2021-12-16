import React, { Component } from 'react'


export default class BioDisp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>{`${this.props.bio.values.fname} ${this.props.bio.values.lname}`}</h2>
                <div>{`${this.props.bio.values.crole}`}</div>
                <div>{`${this.props.bio.values.telly}`}</div>
                <div>{`${this.props.bio.values.email}`}</div>
            </div>
        )
    }
}

