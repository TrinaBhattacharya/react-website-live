import React, { useState } from 'react';
import Srslt from './Srslt';
const Search=()=>{
const [img,setImg]=useState("");
const inputEvent=(event)=>{
    const data=event.target.value;
    setImg(data);
};
return (<center>
{/* <button className="btn btn-success">hi</button> */}
    <input type="text" placeholder="Search "
    value={img}
    onChange={inputEvent}
    /><br/><br/>
   {img==="" ? null : <Srslt name={img}/>} 
    </center>

    );
};
export default Search;