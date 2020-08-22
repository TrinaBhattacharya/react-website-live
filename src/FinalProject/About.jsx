import React from 'react';
import Common from './Common'
import web from '../FinalProject/images/img.jpg'
//import { NavLink } from 'react-router-dom';

const About=()=>{
    
    return (<>
        <Common 
            name="Welcome to About Page 😃"
            imgsrc={web}
            visit="/any "
            btname="Contact Now"
        />
    </>)
};

export default About;