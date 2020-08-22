import React from 'react';
const Srslt=(props)=>{
    const img=`https://source.unsplash.com/400x400/?${props.name}`;
    return(
        <>
        <div>
        <img src={img}  alt="search"/>

        </div>
        
        </>
    )
}
export default Srslt;