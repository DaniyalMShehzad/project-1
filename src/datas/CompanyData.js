import { getDatabase, ref, set, push, child } from "firebase/database";
import React, { useState ,useEffect} from 'react';
import {  onValue } from "firebase/database";
import {useHistory } from "react-router-dom";

function CompanyData() {
  const history=useHistory()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [data,setData] = useState([]);
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
    history.push("/post2")
    const db = getDatabase();
    const newPostKey = push(child(ref(db), 'users')).key;
    set(ref(db, 'users/' + newPostKey), {
      image: image,
      username: name,
      email: email,
      Number:Number,
      uid: newPostKey
    })
    .then(() => {
      // Data saved successfully!
      console.log("success");
      
    })
    .catch((error) => {
      // The write failed...
    });
  }
  console.log(saveData);
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
  //       setData(arr)
  //     }, {
  //       onlyOnce: true
  //     });
  //   } ,[])
    const HandleChange = (e) => {
      let reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState == 2)
        setImage(reader.result);
      };
      // firebase.database().ref('UserData').push(object)
      reader.readAsDataURL(e.target.files[0]);
      
  

  };

  return (
    <>
<div>
      <ul className="studentdata" style={{ listStyle: 'none' }}>
        {/* <img  src={image}  /> */}
        <h1 style={{ color: 'wheat' }}>Company user</h1>
        <li><input onChange={HandleChange} type="file" className="login" placeholder='Profile Pic' /></li>
        <li><input onChange={e => setName(e.target.value)} type='text' className="login" placeholder='Enter User Name' /></li>
        <li><input type='email' onChange={e => setEmail(e.target.value)} className="login" placeholder='Enter Your Email' /></li>
        <li><input type='number' onChange={e => setNumber(e.target.value)} className="login" placeholder='Number' /></li>

        <button onClick={saveData} className="btn">submit</button>
      </ul>

      {/* {
        data.map(( val)=> (
          <h1>{val.image}</h1>
          ) )
    }
    {
      data.map(( val)=> (
<h1>{val.username}</h1>
      ) )
    }
        {
          data.map(( val)=> (
            <h1>{val.email}</h1>
            ) )
          }        {
            data.map(( val)=> (
              <h1>{val.qualifications}</h1>
              ) )
            }
        {
          data.map(( val)=> (
            <h1>{val.date}</h1>
            ) )
          }        {
            data.map(( val)=> (
              <h1>{val.cnic}</h1>
              ) )
            } */}
</div>
    </>
  );
}

export default CompanyData