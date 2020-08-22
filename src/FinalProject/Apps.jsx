import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer'
//import Error from './Error';
//import Menu from './Menu';
//import User from './User';
//import Search from './Search';

const Apps=()=>
{
    return (<><Navbar/>
    <div className="text-center">

   
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/any' component={Contact}/>
        <Route  exact path='/service' component={Service}/>
        <Route  exact path='/about' component={About}/>
        <Redirect to="/"/>
        {/* <Route component={Error}/> */}

       
        </Switch>
        <Footer/>
        </div>
    </>)
};
export default Apps;