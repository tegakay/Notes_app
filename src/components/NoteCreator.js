import React from 'react';

export default function NoteCreator(props){

//console.log("checking props",props)
     return(
        <div>
             <input 
                    type="text"
                    placeholder="Insert Note"
                    className="form--input"
                    name="content"
                    onChange={props.writeNote}
                    value={props.tempNote}
                />
                <button className='btn'
                onClick={props.create}
                >Submit</button>
        </div>
     )
}