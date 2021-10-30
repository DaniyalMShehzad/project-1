import React, { useState } from 'react'
import {Link, useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import Navbar from './navbar';
function Signin() {
    //    const history=useHistory() 

    const [password, setpassword] = useState('')
    const [email, setEmail] = useState('')
    // console.log(name);
    // console.log(email)
    // setName()
    // setEmail()

    const SignIn = (e) => {

        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // history.push("/StudentData")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <>
        {/* <Navbar/> */}
            <ul className="body" style={{ listStyle: 'none' }}>
            <h1 style={{color:'wheat'}}>signin</h1>
                <li><input onChange={(e) => setEmail(e.target.value)} type='text' className="login" placeholder="enter your email" /></li>
                <li><input onChange={(e) => setpassword(e.target.value)} type="password" className="login" placeholder="password" /></li>
                <li><button onClick={SignIn} className="btn">submit</button></li>
            </ul>
        </>

    )
}

export default Signin