import React from 'react';

const Footer=()=>{
    const year=new Date().getFullYear();
    return(<> <footer>
    <center><p><h5>Copyright© {year} </h5></p></center>
        
    </footer>
    </>
    );
};
export default Footer;