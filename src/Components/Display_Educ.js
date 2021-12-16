import React, { Component } from 'react'


export default class EducDisp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>{`${this.props.bio.values.eduFrom} - ${this.props.bio.values.eduTo}`}</h2>
                <div>{`${this.props.bio.values.eduName}`}</div>
                <div>{`${this.props.bio.values.eduDeg}`}</div>
                <div>{`${this.props.bio.values.eduBio}`}</div>
            </div>
        )
    }
}

