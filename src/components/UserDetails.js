import React, { Component } from 'react'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { AppBar } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import RaisedButton from '@material-ui/core';
import { StylesContext } from '@material-ui/styles';
import handleChange from './UserForm'
export class UserDetails extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {

        const {values, handleChange} = this.props;
        
        return (
            // <MuiThemeProvider>
            //     <React.Fragment>
            //         <AppBar title="Enter User Details"/>
            //         <TextField
            //             hintText="Enter Your First Name"
            //             floatingLabelText="First Name"
            //             onChange={handleChange('firstName')}
            //             defaultValue={values.firstName}
            //         />
            //         <br/>

            //         <TextField
            //             hintText="Enter Your Last Name"
            //             floatingLabelText="Last Name"
            //             onChange={handleChange('lastName')}
            //             defaultValue={values.lastName}
            //         />
            //         <br/>

            //         <TextField
            //             hintText="Gender"
            //             floatingLabelText="Gender"
            //             onChange={handleChange('gender')}
            //             defaultValue={values.gender}
            //         />
            //         <br/>
            //         <button onClick={this.continue}>Continue</button>
                    
            //     </React.Fragment>
            // </MuiThemeProvider>
                


            <div>

                <div >
                    <label class="form-label"for="inputCity">First Name</label>
                    <input class="col-4 " type="text" defaultValue={values.firstName} onChange={handleChange('firstName')} class="form-control" id="inputCity"/>
                </div>

                <div >
                    <label class="form-label"for="inputCity">Last Name</label>
                    <input class="col-8 " type="text" defaultValue={values.lastName} onChange={handleChange('lastName')} class="form-control" id="inputCity"/>
                </div>

                <div >
                    <label class="form-label"for="inputCity">Gender</label>
                    <select id="inputState" class="form-control" defaultValue={values.state} onChange={handleChange('state')}>
                        <option selected></option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <br/>
                <button className="btn btn-primary" type='submit' onClick={this.continue}>Continue</button>

            </div>

        )
    }
}

const styles ={
    button:{
        margin:15
    }
}

export default UserDetails
