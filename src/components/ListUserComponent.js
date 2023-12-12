  import React, { Component } from 'react'
import UserService from '../Service/UserService';
import { Link } from 'react-router-dom';


class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
        
        // this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteuser = this.deleteuser.bind(this);
        //  this.adduser=this.adduser.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    deleteuser(userId) {
        UserService.deleteBook(userId).then(res => {
            this.setState({ users: this.state.users.filter(user => user.userId !== userId) });
        });
    }
    viewEmployee(userId) {
        this.props.history.push(`/view-employee/${userId}`);
    }
    editEmployee(user) {
        console.log(">>>");
        this.props.history.push(`/edit-employee/${user}`);
    }

    componentDidMount() {
        UserService.getAlluser().then((res) => {
            this.setState({ users: res.data });
        });
    }
    // addEmployee() {
    //     this.props.history.push('/add-employee/_add');
    // }
    // adduser(userId)
    // {
    //     this.props.history.push(`/add-user/${userId}`);
    // }

    // adduser() {
    //     this.props.history.push('/add-user/_add');
    // }

    render() {
        return (

            <><div className="col-md-1 offset-11 ">
                {/* <button className="btn btn-primary" onClick={this.adduser}> AddUser</button> */}
                <Link className='text-decoration-none btn btn-sm btn-info' to="/add-user">Add</Link>
                {/* <Link className='text-decoration-none btn btn-sm btn-info' to="/*">Login</Link> */}
            </div><div className="container-fluid ">
                    <div className='image'>

                        {/* <img src="reactimage.jpg"   /> */}
                        <nav className="navbar navbar-expand-sm  navbar-success">
                            <ul className="navbar-nav">
                                <li className="row">
                                </li>

                            </ul>
                        </nav>

                        {/* <div className="row">
<button className="btn btn-primary" onClick={this.Viewall}>Viewall</button>
</div> */}
                        <br></br>
                        <div className="">
                            <table className="table table-striped table-bordered">

                                <thead>
                                    <tr>
                                        <th>userId</th>
                                        <th>firstName</th>
                                        <th>lastName</th>
                                        <th>gender</th>
                                        <th>emailId</th>
                                        <th>mobileNo</th>
                                        <th>city</th>
                                        <th>admin</th>
                                        <th>user</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.users.map(
                                        user => <tr key={user.userId}>
                                            <td>{user.userId}</td>
                                            <td> {user.firstName} </td>
                                            <td> {user.lastName}</td>
                                            <td> {user.gender}</td>
                                            <td> {user.emailId}</td>
                                            <td> {user.mobileNo}</td>
                                            <td> {user.city}</td>
                                             <td>{user.admin}</td>
                                            <td> {user.user}</td>
                                            <td>
                                                {/* <Link onClick={() => this.editEmployee(user.userId)} className="btn btn-info">Update </Link> */}

                                                <Link className='text-decoration-none btn btn-sm btn-info' to={`/view-employee/${user.userId}`}>View</Link>
                                                <Link className='text-decoration-none btn btn-sm btn-info' to={`/edit-Employee/${user.userId}`}>Update</Link>


                                                {/* <Link className='text-decoration-none btn btn-sm btn-info' to=`/view-employee/${user.userId}`>view</Link> */}

                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteuser(user.userId)} className="btn btn-danger">Delete </button>

                                                {/* <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(user.userId)} className="btn btn-info">View </button> */}
                                            </td>
                                        </tr>

                                    )}
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div></>
        )
    }

}
//we can use any where by importing the this components i.e we can write export default components.
export default ListUserComponent

