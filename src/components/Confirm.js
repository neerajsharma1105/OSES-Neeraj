import React, { Component } from 'react'

export class Confirm extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.preStep();
    }

    render() {

        const {values : {firstName, lastName, gender, street, city, state, zipcode}} = this.props;

        return (
            <div>
                
                    {/* <li><b>FirstName</b> - {firstName}</li>
                    <li><b>LastName</b>  - {lastName}</li>
                    <li><b>Gender</b>    - {gender}</li>
                    <li><b>Street</b>    - {street}</li>
                    <li><b>City</b>      - {city}</li>
                    <li><b>State</b>     - {state}</li>
                    <li><b>Zipcode</b>   - {zipcode}</li> */}

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><h7>First Name : </h7>{firstName}</li>
                        <li class="list-group-item"><h7>Last Name : </h7>{lastName}</li>
                        <li class="list-group-item"><h7>Gender : </h7>{gender}</li>
                        <li class="list-group-item"><h7>City : </h7>{city}</li>
                        <li class="list-group-item"><h7>State : </h7>{state}</li> 
                    </ul>

                <br/>
                <button class="btn btn-light" type='submit' onClick={this.back}>Back</button>

            <button  class="btn btn-primary" type='submit' onClick={this.continue}>Confirm & Continue</button>
            </div>
        )
    }
}

export default Confirm
