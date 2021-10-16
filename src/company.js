import React,{useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Company(){

const [email,setEmail]=useState('')
const [password,setpassword]=useState('')
console.log(password);
console.log(email)
// setName()
// setEmail()

const Company = (e) => {

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
    return(
    <>
    <ul className="company" style={{listStyle:'none'}}>
  <li><input onChange={(e)=>setEmail(e.target.value)} type='email' className="login" placeholder="enter your email"/></li>
  <li><input onChange={(e)=>setpassword(e.target.value)}type='password' className="login" placeholder="Password"/></li>
  <li><button onClick={Company} className="btn">submit</button></li>
  </ul>
    </>

    )
}

export default Company