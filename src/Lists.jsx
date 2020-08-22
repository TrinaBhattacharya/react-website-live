import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Lists=(props)=>{
    const [line,setLine]=useState(false);
    const cut=()=>{
        setLine(true);
    };
    return(<div className="todo">
    <span onClick={cut}>
    <DeleteOutlineIcon className="del"/>
    </span>
     <li style={{textDecoration:line ? "line-through" : "none"}}>{props.text}</li>
     </div>
      );
    
    
};
export default Lists;