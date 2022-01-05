import React, { Component } from 'react'
import './App.scss'

export default class EducDisp extends Component {
    constructor(props) {
        super(props);
        this.heading = this.props.indy == 0 ? <div className='smallheadings'><h2 className='cate'>Education</h2><hr className='cate'></hr></div> : ''
    }


    render() {
        return (
            <div className='total-bottom'>
                {this.heading}
                <div>
                    <h2>{`${this.props.bio.values.eduFrom || ""} - ${this.props.bio.values.eduTo || ""}`}</h2>
                    <div>{`${this.props.bio.values.eduCname || ""}`}</div>
                    <div>{`${this.props.bio.values.eduDeg || ""}`}</div>
                    <div>{`${this.props.bio.values.eduBio || ""}`}</div>
                </div>
            </div>
        )
    }

}

