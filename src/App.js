import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import ValidateInfo from './components/ValidateInfo';
import ViewUserComponent from './components/ViewUserComponent';
import EditUser from './components/EditUser';
import LoginForm from './components/LoginForm';
// import EmpLogin from './components/EmpLogin';
// import RegisterComponent from './components/RegisterComponent';
// import FooterComponent from './components/FooterComponent';
function App() {
  return (
    <div>
      
      <Router>
        <HeaderComponent />
        <div className="App">
          <Routes>
            {/* <Route exact path='/' element={<LoginForm/>}/> */}
            {/* <Route exact path='/employeelogin' element={<EmpLogin/>}/> */}

            <Route exact path="/" element={<ListUserComponent />} />
            <Route exact path="/employees" element={<ListUserComponent/>}></Route> 
            <Route exact path={"/add-user"} element={<ValidateInfo/>}></Route>
            <Route exact path="/edit-Employee/:userId" element={<EditUser />} />
              
            {/* <Route exact path="/view-employee/:userId" element={<ViewUserComponent/>}/> */}
            <Route  exact path={"view-employee/:userId"} element={<ViewUserComponent/>}></Route>
            {/* <Route exact path={"add-user/:userId"} element={RegisterComponent}></Route> */}
          </Routes>
                
        </div>
            {/* <RegisterComponent/>   */}
        {/* <FooterComponent /> */}
          {/* <EditUser/>   */}
       
      </Router>
    </div>

  );
}

export default App;


