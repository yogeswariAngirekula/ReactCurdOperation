import React,{useState} from 'react' 
import { Link } from 'react-router-dom';
const LoginForm=()=>{ 
	const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:passw}; 
		setDataInput([info]);
       
		// UserService.loginUser(user)
	}
	return(
	<div className='Loginforms'>
		<form action="" onSubmit={submitThis}> 
			<div> 
                <h4> Admin Login Page</h4>
				<label htmlFor="email">Email</label>
				<input type="text" name="email" id="email" value={email}   onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
			<div> 
				<label htmlFor="passw">Password</label>
			<input type="text" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)}/> 
			</div>  
<pre></pre>
	
            <Link className='text-decoration-none btn btn-md btn-info' to="/add-user"> Sign Up</Link>
            <Link className="btn btn-success mx-2" to="view-employee">
            Login
            </Link> <a href="/employeelogin">SignIn as employee </a>
            
		</form>
	</div>
)} 

export default LoginForm