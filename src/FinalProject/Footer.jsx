import React from 'react';
const Footer=()=>{
    const year=new Date().getFullYear();
    return (<><footer className="bg-aqua text-center"><p>
    Copyright© {year}
    </p></footer>
    </>)
};
export default Footer;
