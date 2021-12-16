import React, { Component } from 'react'


export default class WorkDisp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>{`${this.props.bio.values.expFrom} - ${this.props.bio.values.expTo}`}</h2>
                <div>{`${this.props.bio.values.expCname}`}</div>
                <div>{`${this.props.bio.values.expBio}`}</div>
            </div>
        )
    }
}

