// // import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
 
//  ///import Heading from './Heading';
// //  import Order from './Order';
// //  function App(){ 
// //    return(
// //      <>
// //  <Heading></Heading>
  
// //   <Order></Order>
// //   </>
// //    );
// //   }
// //   export default App;
// function App(){
//   let curDate=new Date(2020 , 8 , 6 ,7);
// curDate=curDate.getHours();
// let greeting=' ';
// const cssStyle={ };
// if(curDate>=1 && curDate<12)
// {
//    greeting='Good Morning';
//    cssStyle.color='green';
// }
// else if(curDate>=12 && curDate<19){
//    greeting='Good Afternoon';
//    cssStyle.color='orange';
// }
// else{
//    greeting='Good Night';
//    cssStyle.color='black';
// }
// return(
//        <div>
//           <h1> 
//           Hello TRina,<span style={cssStyle}>{greeting}</span>
//           </h1>
//        </div>
// );
// }
// export default App;

  // const youtuber="thapa";
  // const prog="react js";
  // function names(){
  //   let name="trina";
  //   return name;
  // }
  // export default youtuber;
  // export {prog,names};
  // import React from 'react';
  // import Sdata from './Sdata';
  // import Cards from './Cards';
  // import {add,sub,div,mul} from './Cal';
  // function App(){
  //   return(
  //     <>
  //    <ol>
  //        <li>add of two numbers {add(40,4)}</li>
  //        <li>sub of two numbers {sub(40,4)}</li>
  //        <li>divition of two numbers {div(180,19)}</li>
  //        <li>multi of two numbers {mul(180,19)}</li>
  //    </ol>
  //    </>
  //   );
  // }
//   import React from 'react';
//   //import Sdata from './Sdata';
//   //import Cards from './Cards';
//   import Hotstar from './Hotstar';
//   import Zee from './Zee';
//   const favseries = 'Hotstar'
//   const Fav=()=>{
//   if(favseries==='Hotstar')
//   {
//     return <Hotstar />
//   }
//   else{
//     return <Zee />
//   }
// };

//   const App=()=>(<>
//     <h1 className="heading_style">A Hotstar vip</h1>
    
//          <Fav />
   
    
//     </>
//   );
import React from 'react';
import {Heading} from './Heading';
import Content from './Content';
import {Grid} from "@material-ui/core";


const App=()=>{
  return (
      <Grid container direction="coloumn">
        <Grid item> <Heading /> </Grid>
        <Grid item container>
          <Grid item xs={0} sm="2"/>
          <Grid item xs={0} sm="8">
          <Content/>
          </Grid>
          <Grid item xs={0} sm="2"/>
        </Grid>
      </Grid>
  );
};
  export default App;