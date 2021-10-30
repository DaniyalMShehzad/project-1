import React,{useState} from 'react'
import {useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import Navbar from '..navbar/navbar';
function Admin(){
    // const history=useHistory()
const [email,setEmail]=useState('')
const [key,setKey]=useState('')
const [password,setpassword]=useState('')
console.log(password);
console.log(email)
// setName()
// setEmail()

const admin = (e) => {
    e.preventDefault()
    // const auth = getAuth()
    
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log('success')
        // history.push("/Adminpage")
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
    {/* <Navbar/> */}
    <ul className="admin" style={{listStyle:'none'}}>
        <h1 style={{color:'wheat'}}>Admin</h1>
  <li><input onChange={(e)=>setEmail(e.target.value)} type='email' className="login" placeholder="enter your email"/></li>
  <li><input onChange={(e)=>setKey(e.target.value)} type='password' className="login" placeholder="enter your key"/></li>
  <li><input onChange={(e)=>setpassword(e.target.value)}type='password' className="login" placeholder="Password"/></li>
  <li><button onClick={admin} className="btn">submit</button></li>
  </ul>
    </>

    )
}

export default Admin