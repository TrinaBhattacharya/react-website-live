import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const UseEff=()=>{
    const [num,setNum]=useState(0);
    //const[nums,setNums]=useState(0);
    useEffect(()=>{
        //alert("i am clicked");
        document.title=`You Clicked me ${num} times`
    });
    return(
        <button className="btn btn-danger" onClick={()=>{setNum(num+1);

        }}>
         click me{num}
        </button>
        /* <br/> <br/> <br/>
        <button className="btn btn-danger" onClick={()=>{setNums(nums+1);

        }}>
        click me{nums}
        </button> */ 
      
    );
};
export default UseEff;