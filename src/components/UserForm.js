import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails';
import UserDetails from './UserDetails'
import Confirm from './Confirm';
import Success from './Success';
import StartApplication from './StartApplication';
import './UserForm.css';
export class UserForm extends Component {

    state={
        step:0,
        firstName:'',
        lastName:'',
        gender:'',
        street:'',
        city:'',

        state:'',
        zipcode:'',
    }

    nextStep = ()=>{
        const {step}=this.state;
        this.setState({
            step:step+1
        });
    }

    preStep =()=>{
        const{step}=this.state;
        this.setState({
            step:step-1
        });
    }


    handleChange = input =>e =>{
        this.setState({[input]:e.target.value});
    }


    render() {

        const {step} = this.state;
        const{firstName, lastName, gender, street, city, state, zipcode } = this.state;
        const values = {firstName, lastName, gender, street, city, state, zipcode} 
    
        
        switch(step){
            
            case 1:
                return (
                    
                    <div>
                        <h1>General Information</h1>
                        <div class="container p-2 bg-light my-5 border">

                        <UserDetails 
                            nextStep = {this.nextStep}
                            handleChange ={this.handleChange}
                            values ={values}
                            />
                            
                        </div>
                    </div>

                    
                )
            case 2:
                return (
                    <div>
                        <h1>Personal Information</h1>
                    <div class="container p-2 bg-light my-5 border">
                        <PersonalDetails 
                            nextStep = {this.nextStep}
                            preStep = {this.preStep}
                            handleChange ={this.handleChange}
                            values ={values}
                            />
                    </div>
                    </div>
                )
            case 3:
                return (
                    <div class="container p-2 bg-light my-5 border">
                        <Confirm 
                            nextStep = {this.nextStep}
                            preStep = {this.preStep}
                            handleChange ={this.handleChange}
                            values ={values}
                            />
                    </div>
                )

                case 4:
                    return (
                    <div class="container p-2 bg-light my-5 border">
                        <Success />
                    </div>)

                default:
                        return (
                            <div class="container p-2 bg-light my-5 border">
                                <StartApplication 
                                    nextStep={this.nextStep}
                                />
                            </div>

                        )
        }
        
        
    }
}

export default UserForm
