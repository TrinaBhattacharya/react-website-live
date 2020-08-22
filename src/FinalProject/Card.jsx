import React from 'react';
//import web from '../FinalProject/images/img2.jpg';
import { NavLink } from 'react-router-dom';
const Card=(props)=>{
    return (<>
        
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                    <img  className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
                    <div  className="card-body">
                     <h5  className="card-title font-weight-bold">{props.title}</h5>
                     <p  className="card-text">{props.para}</p>
                     <NavLink to="/any"  className="btn btn-primary">Go To Contact</NavLink>
                   </div>
               </div>
             </div>
                    
     </>)
};
export default Card;