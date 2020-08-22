// import React, { useState } from 'react';
// import './index.css';
// const Hook=()=>{
//     const state=useState();
//     const [count,setCount]=useState(0);
//     const [counting,showCount]=useState(50);
//     const IncNum=()=>{
//         setCount(count + 1);
//         showCount(counting -2);
//     };
//     return(<>
//             <h1 className='heading_style'>{count}</h1>
//             <h1 className='heading_style'>{counting}</h1>
//             <button onClick={IncNum}>Click Me</button>
//             </>
//     );
// };
// export default Hook;

//Hook Challange

// import React, { useState } from 'react';
// import './index.css';

// const Hook=()=>{
//     let newTime= new Date().toLocaleTimeString();
//     const[ctime,setTime]=useState(newTime);

//     const CurrentTime=()=>{
//         newTime= new Date().toLocaleTimeString();
//         setTime(newTime);
//     };
//     setInterval(CurrentTime,1000);
//     return(
//         <>
//             <h1 className="heading_style">{newTime}</h1>
//             {/* <button onClick={CurrentTime}>Get Time</button> */}
//         </>
//     );
// }
// export default Hook;

//Event using Hook

import React, { useState } from 'react';
 import './index.css';
 const Hook=()=>{
       const purple='#8e44ad';
       const [bg,setBg]=useState(purple);
       const [name,setName]=useState("Click Me");

        const CurrentTime=()=>{
           let newBg= '#34495e';
            setBg(newBg);
            setName('ouch!! 😈');

        };
        const bgColor=()=>{
            let newBgg= 'pink';
             setBg(newBgg);
             setName('Ayyo!! 😠');
 
         };

        
        return(
            <>
               <div style={{backgroundColor:bg}}>
                <button onClick={CurrentTime} onDoubleClick={bgColor}>{name}</button> 
                </div>
            </>
        );
    }
    export default Hook;