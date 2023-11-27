// import { useState } from 'react';
import '../Assets/Login.css'
import { Link, useNavigate } from "react-router-dom";
import {   UserCircle2 } from 'lucide-react';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Slidebar from './Slidebar';
import { createContext } from 'react';
export const EmailContext =createContext(' ');
const Signin=()=>{
    useEffect(()=>{
        document.title='SignUp';
      })
    const nav=useNavigate();
    const [pass,setp]=useState('');
    const [Username,setu]=useState('');
    const [email,sete]=useState('');
    const Fun = (e) => {
        e.preventDefault();
        console.log(email);
        axios.post('http://localhost:3001/users',{
            email,Username,pass
        })
        .then(res=>{toast.success(`SignUp Successfull`)})
        .catch(err=>{console.log(err)})
        setTimeout(() => {
            <Slidebar email1={email}/>
            nav('/slidebar');
        },1000);
    }
    return(
        <>
        <div className='maindiv'>
        <div className='divmid'>
            <div className='space'>
                <p style={{fontSize:40}}><b>Welcome!</b></p><br/>
                <p style={{fontSize:25}} className='for'>One of India's most trusted online pharmacy & medical stores</p>
            </div>
            <form className='login' onSubmit={Fun}>
                <b style={{fontSize:35}}><UserCircle2 size={30} /> &nbsp;Sign Up</b>
                <TextField type='Email' required label="Email" variant="filled" sx={{height:55}} className='input' value={email} onChange={(event)=>{sete(event.target.value)}}/>
                <TextField type='text' required label="UserName" variant="filled" sx={{height:55}} className='input'value={Username} onChange={(event)=>{setu(event.target.value)}}/>
                <TextField type='password' required label="Password" variant="filled" sx={{height:55}} className='input' value={pass} onChange={(event)=>{setp(event.target.value)}}/>
                <h2 className='for'>
                    <a href="www.google.com"><img src="https://i.pinimg.com/736x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg" alt="Avatar" className="avatar"></img></a>
                    <a href="www.facebook.com"><img src="https://i.pinimg.com/474x/40/dc/f7/40dcf736057b653bce55423691112da3.jpg" alt="Avatar" className="avatar"></img></a>
                    <a href="www.microsoft.com"><img src="https://i.pinimg.com/564x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg" alt="Avatar" className="avatar"></img></a>
                </h2>
                <Link to='/login'><button style={{fontSize:16}} className={`$ switch method`} >Already have account? Login</button> </Link>
                {/* <Link to='/slidebar'> */}
                    <button style={{fontSize:20}} type='Submit' className='button1'><b>Sign Up</b></button>
                {/* </Link> */}
            </form>
        </div>
        </div>
        <Toaster position="top-center" reverseOrder={false}/>
        </>
    )
}
export default Signin