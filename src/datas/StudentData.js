import { getDatabase, ref, set, push, child } from "firebase/database";
import React, { useState ,useEffect} from 'react';
// import {  onValue } from "firebase/database";
import Navbar2 from "../navbar/Navbar2";
import {useHistory } from "react-router-dom";
function StudentData() {
  const history =useHistory()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setBirth] = useState("");
  const [cnic, setCnic] = useState("");
  const [image, setImage] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [data,setData] = useState([]);
// console.log(data);
  //     const saveData=()=>{
  //         const object={
  // name,
  // email,
  // date,
  // cnic,
  // }
  // // firebase.database().ref('UserData').push(object)
// const UserData = getDatabase();
// const starCountRef = ref(UserData,);
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });
// }
  function saveData() {
    
    const db = getDatabase();
    const newPostKey = push(child(ref(db), 'student')).key;
    set(ref(db, 'student/' + newPostKey), {
      image: image,
      username: name,
      email: email,
      date: date,
      cnic: cnic,
      qualifications: qualifications,
      uid: newPostKey
    })
    .then(() => {
      // Data saved successfully!
      console.log("success");
      history.push("/post")
      })
      .catch((error) => {
        // The write failed...
      });
  }
// useEffect(()=>{

//   const db = getDatabase();
//   const dbRef = ref(db, 'users/');
//   const arr = []
//   onValue(dbRef, (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//       const childKey = childSnapshot.key;
//       const childData = childSnapshot.val();
//       console.log(childData)
//       arr.push(childData)
//       // ...
      
//     });
//     setData(arr)
//   }, {
//     onlyOnce: true
//   });
// } ,[])
  const HandleChange = (e) => {
    let reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2)
        setImage(reader.result);
    };
    // firebase.database().ref('UserData').push(object)
    reader.readAsDataURL(e.target.files[0]);
  
  

  };
  console.log(saveData);

  return (
    <>
<div>
    <Navbar2/>
      <ul className="studentdata" style={{ listStyle: 'none' }}>
        {/* <img  src={image}  /> */}
        <h1 style={{ color: 'wheat' }}>Student User user</h1>
        <li><input onChange={HandleChange} type="file" className="login" placeholder='enter your name' /></li>
        <li><input onChange={e => setName(e.target.value)} type='text' className="login" placeholder='enter your name' /></li>
        <li><input type='email' onChange={e => setEmail(e.target.value)} className="login" placeholder='enter your email' /></li>
        <li><input type="date" onChange={e => setBirth(e.target.value)} className="login" placeholder='enter your birth' /></li>
        <li><input type="number" onChange={e => setCnic(e.target.value)} className="login" placeholder='enter your cnic' /></li>
        <li><input type="text" onChange={e => setQualifications(e.target.value)} className="login" placeholder='enter your qualifications' /></li>
        <button onClick={saveData} className="btn">submit</button>
      </ul>
        </div>
    </>
  );
}

export default StudentData






