import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUserComponent() {
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

//this  is called destructure 
    const { userId } = useParams();

    useEffect(() => {
        loadUser();
    
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8075/users/${userId}`);
        setUser(result.data);
    };
    

    return (
        <div className="container-fluid">
            <div className="row">
                <> <div className="col-md-6 offset-md-3">
                    <h2 className="text-center m-4">User Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of user id : {user.userId}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>userId:</b>
                                    {user.userId}
                                </li>
                                <li className="list-group-item">
                                    <b>firstName:</b>
                                    {user.firstName}
                                </li>
                                <li className="list-group-item">
                                    <b>lastName:</b>
                                    {user.lastName}
                                </li>
                                <li className="list-group-item">
                                    <b>gender:</b>
                                    {user.gender}
                                </li>
                                <li className="list-group-item">
                                    <b>emailId:</b>
                                    {user.mobileNo}
                                </li>
                                <li className="list-group-item">
                                    <b>mobileNo:</b>
                                    {user.emailId}
                                </li>
                                <li className="list-group-item">
                                    <b>city:</b>
                                    {user.city}
                                </li>
                                {/* <li className="list-group-item">
                                    <b>password:</b>
                                    {user.password}
                                </li>
                                <li className="list-group-item">
                                    <b>confirmpassword:</b>
                                    {user.confirmpassword}
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div></>
            </div>
         </div>
    );
}