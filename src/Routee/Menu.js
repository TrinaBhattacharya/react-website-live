import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu=()=>
{
    return (<>
    <NavLink exact activeClassName="active_class" to="/" >AboutUs</NavLink><br/>
    <NavLink exact activeClassName="active_class" to="/any" >ContactUs</NavLink><br/>
    <NavLink exact activeClassName="active_class" to="/user" >User</NavLink><br/>
    <NavLink exact activeClassName="active_class" to="/search" >Search</NavLink><br/>

    </>)
};
export default Menu;