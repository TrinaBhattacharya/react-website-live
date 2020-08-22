import React from 'react';
import CoffeeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';
const Content=()=>{
    return(
        <Grid container>
            <Grid item={4}>
            <CoffeeCard />
            </Grid>
            <Grid item={4}>
            <CoffeeCard />
            </Grid>
            <Grid item={4}>
            <CoffeeCard />
            </Grid>
            <Grid item={4}>
            <CoffeeCard />
            </Grid>
            <Grid item={4}>
            <CoffeeCard />
            </Grid>
            <Grid item={4}>
            <CoffeeCard />
            </Grid>
        </Grid>
       
    );
};
export default Content;