

import React,{Component} from 'react';
import UserService from '../Service/UserService';
import { Link } from 'react-router-dom';
class ValidateInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }   
  sendData() {
   console.log("hiiii");
    console.log(this.state.fields);
    UserService.saveuser(this.state.fields);
   
    console.log(this.state.fields);
   // console.log("No");
    alert("Form Submitted");
    // <Link to="/" />
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["firstName"] = "";
      fields["lastName"] = "";
      fields["gender"] = "";
      fields["emailId"] = "";
      fields["mobileNo"] = "";
      fields["city"] = "";
      fields["password"] = "";
      fields["confirmpassword"] = "";

      this.setState({ fields: fields });

      this.sendData()
      console.log("hoiiii");

      alert("Form submitted");
    }
  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your firstName.";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your lastName.";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["emailId"]) {
      formIsValid = false;
      errors["emailId"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailId"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailId"])) {
        formIsValid = false;
        errors["emailId"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileNo"]) {
      formIsValid = false;
      errors["mobileNo"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileNo"] !== "undefined") {
      if (!fields["mobileNo"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileNo"] = "*Please enter valid mobile no.";
      }
    }
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "*Please enter your city.";
    }

    if (typeof fields["city"] !== "undefined") {
      if (!fields["city"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["city"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    if (!fields["confirmpassword"]) {
      formIsValid = false;
      errors["confirmpassword"] = "*Please enter your confirmpassword.";
    }

    if (typeof fields["confirmpassword"] !== "undefined") {
      if (!fields["confirmpassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["confirmpassword"] = "*Please enter secure and strong confirmpassword.";
      }
      if (!fields["confirmpassword"].match(fields["password"])) {
        formIsValid = false;
        errors["confirmpassword"] = "*Password and Confirmpassword must be match.";
      }
    }
    this.setState({
      errors: errors

    });
    return formIsValid;
    
    // sendData(){
    // UserService.saveuser(this.state.fields);
    // alert("Form Submitted");
    //     <Link to="/" />
  
  }
  
  render() {
    return (
      <div id="main-registration-container">
        <h3>Registration page</h3>
        <div id="register">

          <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
            <label>firstName</label>
            <input type="text" name="firstName" value={this.state.fields.firstName} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.firstName}</div>

            <label>lastName</label>
            <input type="text" name="lastName" value={this.state.fields.lastName} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.lastName}</div>
            <label>Gender</label>
            <div>
              <input value="Male"
                checked={this.state.fields.gender === "Male"}
                onChange={this.handleChange} type="radio" name="gender" />Male
            </div>
            <div>
              <input value="Female"
                checked={this.state.fields.gender === "Female"}
                onChange={this.handleChange} type="radio" name="gender" />Female
            </div>
            <div>
              <input value="None"
                checked={this.state.fields.gender === "None"}
                onChange={this.handleChange} type="radio" name="gender" />Prefer not to say
            </div>
            <div>
            <input  name="user" valu
            e = "user" type = "checkbox" onChange = {this.handleChange} />
            <span> User </span>
         </div>
         <div>
            <input   name="admin" value = "admin" type = "checkbox" onChange = {this.handleChange} />
            <span> Admin </span>
         </div>
           

<pre></pre>
            <label>Email ID:</label>
            <input type="text" name="emailId" value={this.state.fields.emailId} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.emailId}</div>
            <label>Mobile No:</label>
            <input type="number" name="mobileNo" value={this.state.fields.mobileNo} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.mobileNo}</div>
            <label>city</label>
            <input type="text" name="city" value={this.state.fields.city} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.city}</div>
            <label>password</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>
                  

            <label>Confirm password</label>
            <input type="password" name="confirmpassword" value={this.state.fields.confirmpassword} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.confirmpassword}</div>

            <input type="submit" className="btn btn-success" value="Register" />
            <Link className="btn btn-primary my-2" to={"/"}>
              Back to Home
            </Link>
          </form>
        </div>
      </div>

    );
  }


}


export default ValidateInfo;