import React from "react";

export default function Notelist(props){
    
    return(
       <div key={props.id}>
          <p>{props.id}. {props.content} <button className="btn">Delete</button></p>
           
       </div> 
    )
}