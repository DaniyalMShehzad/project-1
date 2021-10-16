import React,{useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Admin2(){


const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
// console.log(email)
// console.log(password);
    

const admin2 = (e) => {

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
        <ul className="admin2" style={{listStyle:'none'}}>
        <li><input onChange={(e)=>setEmail(e.target.value)} type='email' className="login" placeholder="enter your email"/></li>
        <li><input onChange={(e)=>setPassword(e.target.value)}type='password' className="login" placeholder="password"/></li>
        <li><button onClick={admin2} className="btn">submit</button></li>
        </ul>
          </>
      
    )
}

export default Admin2