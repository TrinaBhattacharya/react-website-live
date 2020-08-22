import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
//import Error from './Error';
import Menu from './Menu';
import User from './User';
import Search from './Search';

const Aapp=()=>
{
    return (<><div className="text-center">

    <Menu/>
    <Switch>
        <Route exact path='/' component={()=><About name="Trina"/>}/>
        <Route exact path='/any' component={Contact}/>
        <Route  exact path='/user/:name' component={User}/>
        <Route  exact path='/search' component={Search}/>
        <Redirect to="/"/>
        {/* <Route component={Error}/> */}

       
        </Switch>
        </div>
    </>)
};
export default Aapp;