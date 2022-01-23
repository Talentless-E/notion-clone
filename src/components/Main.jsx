import React from "react";
import "../css/main.css";
const Main = ({ activeNote, onUpdateNote }) => {
    const onEditField = (key, value) =>{
        onUpdateNote({
            ...activeNote,
            [key]: value
        });
    }
    if(!activeNote) return <div className="no-active-notes"><p>no notes selected</p></div>
   return (
      <div className="main">
         <div className="main-container">
            <input
               type="text"
               id="title"
               className="main__note-title"
               value={activeNote.title}
               onChange={(e) => onEditField("title", e.target.value)}
               placeholder="enter title"
            />
            <textarea
               id="body"
               className="main__note-text"
               value={activeNote.body}
               onChange={(e) => onEditField("body", e.target.value)}
               placeholder="enter your text here.."
            />
         </div>
      </div>
   );
};

export default Main;
