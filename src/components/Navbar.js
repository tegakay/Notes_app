import React from 'react';

export default function Navbar(props){


     return(
         <div className='nav'> 
         <div className='top'>
         <h1 className='header'>Notes App</h1>
         <p className={`text ${props.darkmode?"body-dark":"body-button"}`}
            onClick={props.toggle}>
              {props.darkmode?"Light Mode":"dark mode"}</p>
         </div>
         <h3 className='nav-text'>Something for Your Note Taking Needs</h3>
         </div>
    
     )
}