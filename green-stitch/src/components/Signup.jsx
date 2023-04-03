import React,{useState} from 'react';
import "./Signup.css";
import { ToastContainer, toast } from 'react-toastify';

import axios from "axios";
import { Link } from 'react-router-dom';


const Signup = () => {

    const [userRegister , setUserRegister] = useState({
   name:"",
   email:"",     
username:"",
password:"",
cpassword:"",
});

const handleChange=(e)=>{
const {name , value} = e.target;
setUserRegister({...userRegister, [name]:value});
}


    const registerUser =async (e)=>{
e.preventDefault();
const {name , email , username , password , cpassword} = userRegister;
const response = await axios.post("http://localhost:2000/signup",{name,email,username,password,cpassword})
const data = response.data;
if(data.message){
toast.success(data.message, {
    position: toast.POSITION.TOP_CENTER
});
}else{
    toast.error(data.error, {
        position:toast.POSITION.TOP_CENTER
    })
}
    }
    return (
        <div className='signup'>
        
        <div className='card'>
        <form action="POST">
        <div className='labelSignUp'><label>Signup</label></div>
        
    <Link to="/signin">
        <div className='toLogin'>Already Registered ? login here.. </div></Link>



        <div className='inputBox'><input type="text" onChange={handleChange} value={userRegister.name} name='name' placeholder='name' /></div>
        <div className='inputBox'><input type="email" onChange={handleChange} value={userRegister.email} name='email' placeholder='email' /></div>
        <div className='inputBox'><input type="text" onChange={handleChange} value={userRegister.username} name='username' placeholder='username' /></div>
        <div className='inputBox'><input type="password" onChange={handleChange} value={userRegister.password} name='password' placeholder='password' /></div>
        <div className='inputBox'><input type="password" onChange={handleChange} value={userRegister.cpassword} name="cpassword" placeholder='confirm password' /></div>

        <div className='inputBox'><button className='btn-signUp' onClick={registerUser}>Register</button></div>

        </form>
        </div>

        <ToastContainer/>
    </div>
    );
}

export default Signup;
