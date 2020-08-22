import React, { useState } from 'react';
import './index.css';

const Forms=()=>{
    const[fullName,setName]=useState({
        fName:"",
        lName:"",
    });
    // const[fname,setfName]=useState("");

    // const[fullName,setFull]=useState();
    // const[fulName,setFul]=useState();
    const inputEvent=(event)=>
    {
        console.log(event.target.value);
        console.log(event.target.name);
        const {value,name}=event.target;//object distraction
       // const name=event.target.name;
        setName((preValue)=>{
            return{
                ...preValue, //spread opreator
                [name]:value,
            };
            // if(name==="fName") {
            //     return{
            //         fName: value,
            //         lName:preValue.lName,
            //         email:preValue.email,
            //         phone:preValue.phone,
            //     };
            // }else if(name==="lName") {
            //     return{
            //         fName: preValue.fName,
            //         lName:value,
            //         email:preValue.email,
            //         phone:preValue.phone,
            //     };
            // }else if(name==="email") {
            //     return{
            //         fName: preValue.fName,
            //         lName:preValue.lName,
            //         email:value,
            //         phone:preValue.phone,
            //     };
            // }else if(name==="phone") {
            //     return{
            //         fName: preValue.fName,
            //         lName:preValue.lName,
            //         email:preValue.email,
            //         phone:value,
            //     };
            // }
        });

            
    };
        //setName(event.target.value);

    
    // const inEvent=(event)=>
    // {
    //     setfName(event.target.value);
        
    // };
    const clicked=(event)=>
    {
        event.preventDefault();
        alert("form submit");
        // setFull(name);
        // setFul(fname);
    };
    
    return(
        <>
        <form onSubmit={clicked}>
        <div>
        <h1 className="heading_style">Hello {fullName.fName} {fullName.lName} </h1>
        <p>{fullName.email}</p><br/>
        <p>{fullName.phone}</p><br/>
        <input type="text" placeholder="Enter Your Name" name="fName" onChange={inputEvent} value={fullName.fName}/><br/>
        <input type="password" placeholder="Enter Your Password" name="lName" onChange={inputEvent} value={fullName.lName}/><br/>
        <input type="email" placeholder="Enter Your email" name="email" onChange={inputEvent} value={fullName.email}/><br/>
        <input type="number" placeholder="Enter Your phone number" name="phone" onChange={inputEvent} value={fullName.phone}/><br/>
        <button type='submit'>Clik Me</button>
        </div>
        </form>
        </>
    );
}
export default Forms;
