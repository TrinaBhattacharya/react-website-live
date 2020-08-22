import React, { createContext } from 'react';
import ComA from './ComA';
const FirstName=createContext();
const LastName=createContext();

const First=()=>{
    
    return (<> <FirstName.Provider value={"Trina"}>
    <LastName.Provider value={"Bhat"}><ComA/>
    </LastName.Provider>
    
    </FirstName.Provider></>)
};
export default First;
export {FirstName,LastName};