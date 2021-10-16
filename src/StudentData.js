import { getDatabase, ref, onValue} from "firebase/database";


import React, { useState } from 'react'
function StudentData(){
    const [name,setName] =useState("")
    const [email,setEmail] =useState("")
    const [date,setBirth] =useState("")
    const [cnic,setCnic] =useState("")
    
    const saveData=()=>{
        const object={
name,
email,
date,
cnic,
}
// firebase.database().ref('UserData').push(object)


const UserData = getDatabase();
const starCountRef = ref(UserData,);
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
}




    return(
        <ul  className="studentdata" style={{ listStyle: 'none' }}>
            <li><input onChange={e=>setName(e.target.value)} type='text'  className="login"placeholder='enter your name'/></li>
            <li><input type='email' onChange={e=>setEmail(e.target.value)} className="login"placeholder='enter your email'/></li>
            <li><input type="date" onChange={e=>setBirth(e.target.value)} className="login"placeholder='enter your birth'/></li>
            <li><input type="number" onChange={e=>setCnic(e.target.value)} className="login" placeholder='enter your cnic'/></li>
            <button onClick={saveData} className="btn">submit</button>
        </ul>
    )
}

export default StudentData






