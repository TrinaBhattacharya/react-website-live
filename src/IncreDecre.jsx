import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
///import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
const IncreDecre=()=>{
    const[num,setNum]=useState(0);

    const incre=()=>{
        setNum(num+1);
    };
    const decre=()=>
    {
        if(num>0){
            setNum(num-1);
        }else{
            alert("Zero reach");
            setNum(0);
        }
    };

    return(<><center>
    <h1 >{num}</h1><br/>
    <Tooltip title="Add">
    <Button onClick={incre}><AddIcon/></Button><br/><br/>
    </Tooltip>
    <Tooltip title="Delete">
    <Button onClick={decre}><DeleteOutlineIcon/></Button>
    </Tooltip>
    </center>

    </>)
};
export default IncreDecre;