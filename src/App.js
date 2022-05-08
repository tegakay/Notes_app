
import "./App.css";
import Navbar from "./components/Navbar";
import NoteCreator from "./components/NoteCreator";
import Notelist from "./components/Notelist";
import React, { useState } from "react";

function App() {
  const [tempNote, setTempNote] = useState()
  const [Note, setNote] = useState( JSON.parse(localStorage.getItem("notes")) || []);
  const [dark, setDark] = useState(false)

  function toggledark(props){
   
    setDark(prev=>!prev)
  }


  function writeNote(event) {

  const { value } = event.target;
  
    const newNote = {
      id: Math.floor(Math.random() * 100),
      content: value,
    };
 
    //setNote(prev=>([newNote,prev]))
    
    setTempNote(newNote)
   
  }

  function createNote(){
  
    setNote(prev=>([...prev,tempNote]))
    localStorage.setItem("notes",JSON.stringify(Note))
  }
 console.log("work",Note)


 const getNotes =  Note.map(notedata=>{
   return(
     <div >
       <Notelist
     key = {notedata.id}
     id = {notedata.id}
     content = {notedata.content}
     darkmode ={dark}
     toggle ={toggledark} />
     </div>
     
   )
 })
  return (
    <>
      <Navbar
      darkmode ={dark}
      toggle ={toggledark} />
      <NoteCreator
       writeNote={writeNote}
        notes={Note}
        create ={createNote}
        tempNote ={tempNote}
         />
         <div  className={dark?"body-dark":"body-light"}>
         {getNotes}
         </div>
 
    </>
  );
}

export default App;
