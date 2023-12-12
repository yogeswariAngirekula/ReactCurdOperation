import React, { Component } from 'react';
import UserService from '../Service/UserService';
function RegisterComponent()
{ 
    
    return(
      <div className="form">
          <div className="form-body">
          <div className="userId">
                  <label className="form__label" for="firstName">userId </label>
                  <input className="form__input" type="text" id="userId" placeholder="userId"/>
              </div>
              <div className="firstName">
                  <label className="form__label" for="firstName">firstName </label>
                  <input className="form__input" type="text" id="firstName" placeholder="firstName"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="lastName"/>
              </div>
              <div className="gender">
                  <label className="form__label" for="gender">gender</label>
                  <input  type="text" name="" id="gender"  className="form__input"placeholder="gender"/>
              </div>
              <div className="emailId">
                  <label className="form__label" for="email">emailId </label>
                  <input  type="emailId" id="emailId" className="form__input" placeholder="emailId"/>
              </div>
              <div className="mobileNo">
                  <label className="form__label" for="mobileNo">mobileNo </label>
                  <input className="form__input" type="mobileNo"  id="mobileNo" placeholder="mobileNo"/>
              </div>
              <div className="city">
                  <label className="form__label" for="city">city </label>
                  <input className="form__input" type="city"  id="city" placeholder="city"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
          <button type="button" class="btn btn-primary"> Register</button>
             
          </div>
      </div>      
    )       
}
export default RegisterComponent;