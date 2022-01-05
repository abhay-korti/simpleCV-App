import React, { Component } from 'react'
import './App.scss'

export default class WorkDisp extends Component {
    constructor(props) {
        super(props)
        this.heading = this.props.indy == 0 ? <div className='smallheadings'><h2 className='cate'>Work Experience</h2><hr className='cate'></hr></div> : ''
    }

    render() {
        console.log(this.props)
        return (
            <div className='total-bottom'>
                <div>
                    {this.heading}
                </div>
                <div>
                    <h2>{`${this.props.bio.values.expCname || ''}`}</h2>
                    <div>{`${this.props.bio.values.expFrom || ''} - ${this.props.bio.values.expTo || ''}`}</div>
                    <div>{`${this.props.bio.values.expCrole || ''}`}</div>
                    <div>{`${this.props.bio.values.expBio || ''}`}</div>
                </div>
            </div>
        )
    }

}

