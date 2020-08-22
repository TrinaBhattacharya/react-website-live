import React from 'react';
//import ComA from './ComA';
import {FirstName,LastName} from "./First";
const ComC=()=>{
    return (<>
    <FirstName.Consumer>{(fname)=>{
        return(
            <LastName.Consumer>
                {(lname)=>{
                    return (<h1>My name is {fname} {lname}</h1>
                    )
                }}
            </LastName.Consumer>
        )
        
    }}
    </FirstName.Consumer>
    </>);
    // const fname=useContext(FirstName)
    // const lname=useContext(LastName)
    // return(<h1>My Name is {fname} {lname}</h1>)
};
export default ComC;