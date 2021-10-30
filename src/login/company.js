import React,{useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useHistory } from "react-router-dom";
// import Navbar from './navbar';
function Company(){
    const history=useHistory() 
const [email,setEmail]=useState('')
const [password,setpassword]=useState('')
const [key,setKey]=useState('')
console.log(password);
console.log(email)
// setName()
// setEmail()

const company = (e) => {
    e.preventDefault()
    // const auth = getAuth()
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, key)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log('success')
        history.push("/CompanyData")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('eror',errorMessage)
            // ..
        });
}
    return(
    <>
    <ul className="company" style={{listStyle:'none'}}>
    <h1 style={{color:'wheat'}}>Company login</h1>
  <li><input onChange={(e)=>setEmail(e.target.value)} type='email' className="login" placeholder="enter your email"/></li>
  <li><input onChange={(e)=>setKey(e.target.value)} type="password" className="login" placeholder="enter your key"/></li>
  <li><input onChange={(e)=>setpassword(e.target.value)}type='password' className="login" placeholder="Password"/></li>
  <li><button onClick={company}  className="btn">submit</button></li>
  </ul>
  
    </>
    )
}

export default Company