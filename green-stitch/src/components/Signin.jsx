import React,{useState} from 'react';
import "./Signin.css";
import user from '../assets/user.svg'
import pass from '../assets/pass.svg'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Signin = () => {

    const [userData , setUserData] = useState({username:"",
password:""});

const handleChange=(e)=>{
   
const {name , value} = e.target;
setUserData({...userData, [name]:value});
}


    const loginUser =async (e)=>{
e.preventDefault();
const {username , password} = userData;
const response = await axios.post("http://localhost:2000/userlogin",{username,password})
const data = response.data;

console.log(response);
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
        <div className='signin'>
            <div className='innerReactangle'>
            <form action="POST">
            <div className='label'><label>Login</label></div>
             
             <div className='centerDiv'><object  data={user} height="30" width="30"/> <input type='text' name="username" value={userData.username} placeholder='username' onChange={handleChange}/> </div>

             <div className='centerDiv'> <object data={pass} height="30" width="30"/> <input 
             type='password' name='password' placeholder='password' value={userData.password} onChange={handleChange}/> </div>
             <div className='toSignUp' > <Link to="/"><p>new to login? Register here!</p> </Link></div>
                 <div className='centerDiv'>  <button className='btn' type='submit' onClick={loginUser}>Signin</button></div>
            </form>
            </div>

            <ToastContainer/>
        </div>
    );
}

export default Signin;
