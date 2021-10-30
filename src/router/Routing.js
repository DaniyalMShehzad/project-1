import React from 'react'
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import Signin from '../login/signin'
import Company from '../login/company'
import Signup from '../login/signup'
import Admin from '../login/admin'
import Navbar from '../navbar/navbar'
import Home from '../home/Home'
import CompanyData from '../datas/CompanyData'
import Post from '../posts/post'
import Post2 from '../posts/post2'
import StudentData from '../datas/StudentData'
import Navbar2 from '../navbar/Navbar2'
import Home2 from '../home/home2'
const Routing=()=>{

return(
<>
<Router>
    <Switch>
        <Route path='/signin' exact={true} component={Signin}/>
        <Route path='/signUp' component={Signup}/>
        <Route path='/admin' component={Admin}/>
        {/* <Route path='/admin2' component={Admin2}/> */}
        <Route path='/company' component={Company} />
        <Route path='/studentData' component={StudentData} />
        <Route path='/companyData' component={CompanyData} /> 
        {/* <Route path='/Adminpage' component={Adminpage}/> */}
        <Route path='/navbar' component={Navbar}/>
        <Route exact={true}path='/' component={Home} />
        <Route path='/post' component={Post}/>
        <Route path='/post2' component={Post2}/>
        <Route path='/navbar2' component={Navbar2}/>
        <Route path='/home2' component={Home2} />


    </Switch>
</Router>
</>
)



}


export default Routing
