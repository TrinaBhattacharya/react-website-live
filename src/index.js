//  import React from 'react';
//  import ReactDOM from 'react-dom';
// import './index.css';
// import Forms from './Forms';
//import Slot from  './Slot';
//import Hook from './Hook';
 //import myfav,{prog,names} from './App';
 //import './index.css';
//  const img1= "https://picsum.photos/200/300";
//  const img2= "https://picsum.photos/250/300";
//  const img3= "https://picsum.photos/300/300";
//  const heading={
//     color: "rgb(151, 135, 222)",
//     textAlign: "center",
//     textTransform: "capitaliz",
//     fontWeight: "300",
//     fontFamily: "'Tangerine', serif",
//     textShadow:" 0px 2px 4px  rgb(151, 135, 222)" ,
//   }
//  ReactDOM.render(<>
//  <h1 style={heading}>Hello guys</h1>
//     <div className="image">
//      <img src={img1} alt="randomimage"/>
//      <img src={img2} alt="randomimage"/>
     
//      <img src={img3} alt="randomimage"/>


//  </div>

//  </>,
//   document.getElementById('root'));
// let curDate=new Date(2020 , 8 , 6 ,13);
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
// ReactDOM.render(<>
//       <div>
//          <h1> 
//          Hello TRina,<span style={cssStyle}>{greeting}</span>
//          </h1>
//       </div>
//       </>,
// document.getElementById("root"));
// ReactDOM.render(<>
// <ol>
//     <li>{myfav}</li>
//     <li>{prog}</li>
//     <li>{names()}</li>
// </ol>
// </>
// ,document.getElementById("root"));
// import React from 'react';
// //import ReactDOM from 'react-dom';
// //import App from './App';
// import {Button,Typography} from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
// const useStyles = makeStyles({
    
//     buttonStyle:
//     {
//         color:"red"
//     }
//   })

// export default index(){
//     const classes=useStyles();
//   return (<>
      
//     <Button className={classes.buttonStyle} fullWidth>
//       Hello World
//     </Button>
//     </>
//   );
// };


//  //ReactDOM.render(<App />, document.getElementById('root'));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import { makeStyles} from '@material-ui/styles';
// import { Typography} from '@material-ui/core';
// //import {Paper} from '@material-ui/core';
// import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
// //import classes from '*.module.css';
// const useStyles = makeStyles({
//   typographyStyles:{
//     color:"red"
//   },
    
//     buttonStyle:
//     {
//         color:"red",
//         display:"block"
       
//     }
    
//   })

// function App() {
//   const classes=useStyles();
//   const theme = createMuiTheme({
//     palete: {
//       type: "dark"
//     },
//   });
//   return (
//   <ThemeProvider theme={theme}>
//   {/* <Paper color="grey" elevation="14"> */}
//     <Typography className={classes.typographyStyles} align="center">
//     <h1>Trina</h1>
   
// </Typography>
//  {/* </Paper> */}
//     <Button className={classes.buttonStyle} onClick={() => { alert('clicked') }} >
//       Hello World
//     </Button>
//     </ThemeProvider>
   
    
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import First from "./Context/First";
import Apps from './FinalProject/Apps';
import {BrowserRouter} from "react-router-dom";
import  './index.css';
//import web from '../src/images/img2';
//import Countdown from 'react-countdown';
//import UseEff from './UseEff';
 
ReactDOM.render(<BrowserRouter><Apps/>
</BrowserRouter>, 
document.getElementById('root'));
  //<Countdown date={Date.now() + 20000} />,
 