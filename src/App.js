import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main.jsx";
import uuid from "react-uuid";
function App() {
   const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);

   const [activeNote, setActiveNote] = useState(false);

   useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
   }, [notes]);

   //func for adding notes
   const onAddNote = () => {
      console.log("added note");
      const newNote = {
         id: uuid(),
         title: "New title",
         body: ""
      };

      setNotes([newNote, ...notes]);
   };

   const onUpdateNote = (updatedNote) =>{
      const updatedNotesArray = notes.map((note) => {
        if (note.id === activeNote){
          return updatedNote;
        }

        return note;
      });

      setNotes(updatedNotesArray);
   }

   const onDeleteNote = (idToDelete) => {
      setNotes(notes.filter((note) => note.id !== idToDelete));
   };

   const getActiveNote = () =>{
     return notes.find((note) => note.id === activeNote)
   }
   return (
      <div className="layout">
         <Sidebar
            notes={notes}
            onAddNote={onAddNote}
            onDeleteNote={onDeleteNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
         />
         <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
      </div>
   );
}

export default App;
