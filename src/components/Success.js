import React, { Component } from 'react'

export class Success extends Component {


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e =>{
        e.preventDefault();
        this.props.preStep();
    }


    render() {
        const {values, handleChange} = this.props;
        return (
            <div>
                <h1>Thankyou</h1>
            </div>
        )
    }
}

export default Success
