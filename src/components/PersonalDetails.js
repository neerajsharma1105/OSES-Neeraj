import React, { Component } from 'react'

export class PersonalDetails extends Component {

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

            {/* <label for='city'>City - </label>

            <input type='text' name='City' defaultValue={values.city} onChange={handleChange('firstName')} />

            <br/>

            <label for='state'>State - </label>

            <input type='text' name='state' defaultValue={values.state} onChange={handleChange('lastName')} />

            <br />

            <label for='zipcode'>ZipCode - </label>

            <input type='text' name='zipCode' defaultValue={values.zipCode} onChange={handleChange('email')} />

            <br /> */}




<form>
  
  
  <div class="form-row" >
    <div >
      <label class="form-label"for="inputCity">City</label>
      <input class="col-4 " type="text" defaultValue={values.city} onChange={handleChange('city')}class="form-control" id="inputCity"/>
    </div>
    <div >
      <label class="form-label" for="inputState">State</label>
      <select id="inputState" class="form-control" defaultValue={values.state} onChange={handleChange('state')}>
        <option selected></option>
        <option>Madhya Pradesh</option>
        <option>Maharastra</option>
        <option>Uttar Pradesh</option>
      </select>
    </div>
    <div >
      <label class="form-label" for="inputZip">Zip</label>
      <input class="col-4 " type="text" class="form-control" defaultValue={values.zipcode} onChange={handleChange('zipcode')} id="inputZip"/>
    </div>
  </div>
  
  
</form>
<br/>
            <button class="btn btn-light" type='submit' onClick={this.back}>Back</button>

            <button class="btn btn-primary" type='submit' onClick={this.continue}>Continue</button>

        </div>

        )
    }
}

export default PersonalDetails
