import React from 'react';
import {useParams,useLocation, useHistory} from 'react-router-dom';
const User=()=>{
const {name}=useParams();
const location=useLocation();
const history=useHistory();

    return  (<> 
    <h1>oops!{name} page not found</h1>
    <p>My current location is{location.pathname} <br/>
    {location.pathname===`/user/trina` ? (<button onClick={()=>history.goBack()}>Go Back</button>
    ):null}
    </p>
    </>
    );
};
export default User;