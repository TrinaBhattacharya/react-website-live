import React from 'react';
const SlotM=(props)=>{
    // let x='😄';
    // let y='😄';
    // let z='🎄';
    let{x,y,z}=props;


    if((x===y) && (y===z)){
        return(
            <>
            <div style={{textAlign:"center"}}>
                <h1>{x} {y} {z}</h1>
            </div><br/>
            <h2 style={{textAlign:"center"}}>This is Matching</h2>
            <hr/>
            </>
        );
    }
    else{
        return(
            <>
            <div style={{textAlign:"center"}}>
                <h1>{x} {y} {z}</h1>
            </div><br/>
            <h2 style={{textAlign:"center"}}>This is not Matching</h2>
            <hr/>
            </>
        );
    }
};

const Slot=()=>{
    return(<>
        <h1 className="heading_style" >🎰<span>Welcome slote Machine</span>🎰</h1>
        
        <div>
            <SlotM x='😄' y='😄' z='😄'  />
            <hr/>
            <SlotM x='🍌' y='😄' z='☔️'  />
            <hr/>
            <SlotM x='❤️' y='🏩' z='😃' />
            <hr/>
            <SlotM x='🍒' y='🍒' z='🍒'  />
            <hr/>
        </div>
       
        </>
    );
};
export default Slot;
