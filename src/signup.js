import React, { useState } from 'react'
// import * as auth from 'firebase/auth'
// import { getAuth } from 'firebase/auth'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')

    // setName()
    // setEmail()

    const signUp = (e) => {

        e.preventDefault()
        // const auth = getAuth()


        const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log('success')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('eror',errorMessage)
                // ..
            });
    }

    return (
        <>
            <ul className="style" style={{ listStyle: 'none' }}>
                <li><input onChange={(e) => setEmail(e.target.value)} type='email' className="login" placeholder="enter your email" /></li>
                <li><input onChange={(e) => setPassowrd(e.target.value)} type='password' className="login" placeholder="password" /></li>
                <li><button onClick={signUp} className="btn">SignUp</button></li>
            </ul>
        </>
    )
}

export default Signup