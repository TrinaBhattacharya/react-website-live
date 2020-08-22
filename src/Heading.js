// import React from 'react';
// function Heading(){
//     return <h1>Hello Guys</h1>
// }
// export default Heading;

import React from 'react';
import {AppBar,Toolbar,Typography, makeStyles} from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
//import {makeStyles} from '@material-ui/Styles';
const useStyles = makeStyles({
    typographyStyles: {
        flex: 1
      
    },
  });
    const Heading = () =>{
        const classes=useStyles();
        return(
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.typographyStyles}>
                        Trina
                    </Typography>
                    <AcUnitIcon/>
                </Toolbar>
            </AppBar>
        );
    };


    export  {Heading};

