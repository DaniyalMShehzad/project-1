import React, { useState } from 'react'
// import * as auth from 'firebase/auth'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function Signin() {

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
            <ul className="body" style={{ listStyle: 'none' }}>
                <li><input onChange={(e) => setEmail(e.target.value)} type='text' className="login" placeholder="enter your email" /></li>
                <li><input onChange={(e) => setpassword(e.target.value)} type='text' className="login" placeholder="password" /></li>
                <li><button onClick={SignIn} className="btn">submit</button></li>
            </ul>
        </>

    )
}

export default Signin