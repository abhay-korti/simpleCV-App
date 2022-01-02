import React, { Component } from 'react'
import './App.css'

export default class BioDisp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className='bio-wrapper'>
                    <div class="bio-one">
                        <h2 className='mainheadings'>{`${this.props.bio.values.fname || ""} ${this.props.bio.values.lname || ""}`}</h2>
                        <div className='role'>{`${this.props.bio.values.crole || ""}`}</div>
                    </div>
                    <div className='bio-two'>
                        <div>{`${this.props.bio.values.telly || ""}`}</div>
                        <div>{`${this.props.bio.values.email || ""}`}</div>
                        <div>{`${this.props.bio.values.location || ""}`}</div>
                    </div>
                </div>
                <div className='total-bottom'>
                    <div className='smallheadings'>
                        <h2>Description</h2>
                        <hr className='cate'></hr>
                    </div>
                    <div className='cate'>{`${this.props.bio.values.bioBio || ""}`}</div>

                </div>
            </div>
        )
    }
}

