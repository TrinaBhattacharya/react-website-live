// 
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Lists from "./Lists";
const ToDo=()=>{
    const[item,setItem]=useState("");
    const[newitem,setNewItem]=useState([]);
    const itemEvent=(event)=>
    {
        setItem(event.target.value);
    };
    const click=()=>{
        setNewItem((prev)=>{
            return[...prev,item]
        });
        setItem("")
    };
return (<> <div className="main">
<div className="center">
<h1>ToDo List</h1><br/>
<input type="text"  value={item} placeholder="Add item" onChange={itemEvent}/>
<Button className="btn" onClick={click}> <AddIcon/> </Button>
<br/>
<ol>
{newitem.map((val,index)=>{
return <Lists 
key={index} 
text={val} />;
})}
   
</ol>
</div>
</div>
</>);
};
 export default ToDo;