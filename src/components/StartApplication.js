import React, { Component } from 'react'
import UserForm from './UserForm'
import './css/StartApplication.css'
export class StartApplication extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        
        return (
            <div class="container p-5 my-5 border">
                <button onClick={this.continue}type="button" class="btn btn-primary start">Start Application</button>
            </div>
        )
    }
}

export default StartApplication
