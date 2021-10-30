import React, { useState ,useEffect} from 'react';
import { getDatabase, ref, set, push, child } from "firebase/database";
// import {useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navbar2 from '../navbar/Navbar2';
import {  onValue } from "firebase/database";
function Post(){
  const [data,setData] = useState([]);
  useEffect(()=>{
    
    const db = getDatabase();
    const dbRef = ref(db, 'users/');
    const arr = []
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        // console.log(childData)
        arr.push(childData)
        // ...
      });
        setData(arr)
      }, {
        onlyOnce: true
      });
    } ,[])
    console.log(data);
    return(
      <>
        <Navbar2/>
        {(!data)?
        <h1>loading</h1>
        :
        data.map((e,i)=>{
              return(
                <>
                <div>
                <Card sx={{ minWidth: 275 }}>
              <CardContent>
              <img src={e.image}/>
                <Typography variant="h1" component="div">
                {e.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {e.email}
                </Typography>
                <Typography variant="body2">
                 {e.Number}
                 </Typography>
                 </CardContent>
                 <CardActions>
                 </CardActions>
                 </Card>
                 </div>
                 </>
                 )
                })
                }
        </>
    )
}

export default Post