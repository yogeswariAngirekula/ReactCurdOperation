import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { userId } = useParams();
// useState is used to  data varibles to accession the variable  to sumbit values in backend which means variable  handle
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    emailId:"",
    mobileNo:"",
    city:"",
    password:"",
    confirmpassword: "",

  });
//destructur usestate react 
  const {firstName, lastName,   gender, emailId,  mobileNo,city } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8075/update`,user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8075/users/${userId}`);
    setUser(result.data);
  };

  return (
    
    <div className="container">
        <h2 className="text-center m-4">Edit User</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounde shadd p-6 mt-4 ">
            <div className="mb-3">
              <label htmlFor="userId" className="form-label">
              userId
              </label>
              <input
                type={"text"}
                className="form-control"
                // placeholder="Enter your name"
                name="userId"
                value={userId}
                // onChange={(e) => onInputChange(e)}
              />
            </div>


          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                firstName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                lastName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
              gender
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter gender"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailId" className="form-label">
              emailId
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your emailId address"
                name="emailId"
                value={emailId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">
              mobileNo
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your mobileNo number"
                name="mobileNo"
                value={mobileNo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailId" className="form-label">
              emailId
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your emailId address"
                name="emailId"
                value={emailId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
              city
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your emailId address"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="password" className="form-label">
              city
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your emailId address"
                name="city"
                value={city}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

