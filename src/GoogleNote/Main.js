import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
const Main=()=>{
    return(<> <div className="jumbotron"><Header/>
    <Footer/>
    <CreateNote/>
    </div>
     </>)
}
export default Main;