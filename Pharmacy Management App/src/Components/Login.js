// import { useState } from 'react';
import {TextField} from '@mui/material'
import '../Assets/Login.css'
import { Link, useNavigate } from "react-router-dom";
import { UserCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Slidebar from './Slidebar';
import { createContext, useContext } from 'react';
export const EmailContextLog = createContext('');
const Login=()=>{
    useEffect(()=>{
        document.title='Login';
      })
    const nav=useNavigate();
    const[email,setEmail]=useState('')
    const[pass,setp]=useState('')
    const Fun = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3001/users?email=${email}&pass=${pass}`)
        .then(res=>{
            if(res.data.length>0){
                toast.success(`login Successfull`)
                setTimeout(() => {
                    nav('/slidebar');
                },1000);
                <Slidebar email1={email}/>
            }
            else{
                toast.error(`Invalid Email or Password`)
                // alert(`Invalid`)
            }
        })
        console.log(email);
        // nav('/slidebar')
        e.preventDefault();  
    }
    return(
        <>
        <div className='maindiv'>
        <div className='divmid'>
            <form className='login' onSubmit={Fun}>
                <b style={{fontSize:40}}><UserCircle2 size={30}/> &nbsp;Login</b>
                {/* <TextField onChange={(event)=>{sete(event.target.value)}} value={email} type='Email' label="Email" variant="filled" sx={{height:55}} className='input'/> */}
                <EmailContextLog.Provider value={email}>
            <TextField
              type='email'
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              variant='filled'
              sx={{ height: 55 }}
              className='input'
            />
          </EmailContextLog.Provider>
                <TextField onChange={(event)=>{setp(event.target.value)}} value={pass} type='password' label="Password" variant="filled" sx={{height:55}} className='input'/>
                <p className='for'><p style={{fontSize:18}} className={` $ forget method`}>Forgot password?</p></p>
                <h2 className='for'>
                <a href="www.google.com"><img src="https://i.pinimg.com/736x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg" alt="Avatar" className="avatar"></img></a>
                    <a href="www.facebook.com"><img src="https://i.pinimg.com/474x/40/dc/f7/40dcf736057b653bce55423691112da3.jpg" alt="Avatar" className="avatar"></img></a>
                    <a href="www.microsoft.com"><img src="https://i.pinimg.com/564x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg" alt="Avatar" className="avatar"></img></a>
                </h2>
                <Link to='/signup'><button style={{fontSize:16}} className={`$ switch method`} >Don't have an account? SignUp</button> </Link>
                {/* <Link to='/slidebar'> */}
                <button value='Login' className='button1' style={{fontSize:20}}><b>Login</b></button>
                {/* </Link> */}
            </form>
            <div className='space'>
                <div >
                <p style={{fontSize:40}}><b>Welcome Back!</b></p><br/>
                <p style={{fontSize:25}} className='for'>One of India's most trusted online pharmacy & medical stores</p>
                </div>
            </div>
            </div>
            </div>
            <Toaster position="top-center" reverseOrder={false}/>
        </>
    )
}
export default Login