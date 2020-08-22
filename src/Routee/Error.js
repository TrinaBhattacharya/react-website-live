import React from 'react';
import { NavLink } from 'react-router-dom';
const Error=()=>
{

    return (<>
    <center><div className="setStyle2">
    <h1>oops!error 404 page not found</h1>
    </div>
    <NavLink to='/'>Go Back</NavLink></center>
    
    </>)
};
export default Error;