import React from "react";
import "../css/sidebar.css";
import add from "../img/add.svg";
import close from "../img/close.svg";

const Sidebar = ({ notes,onAddNote,onDeleteNote,activeNote, setActiveNote }) => {
   return (
      <div className="sidebar">
         <div className="sidebar-header">
            <h1>Notes</h1>
            <button className="sidebar-header-btn" onClick={onAddNote}>
               <img src={add} alt="" />
            </button>
         </div>
         <div className="sidebar-notes">
            {notes.map((note) => (
               <div className={`sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                  <div className="sidebar-note__title">
                     <h3 className="note-title">{note.title}</h3>
                     <button className="note-delete-btn" onClick={() => onDeleteNote(note.id)}>
                        <img src={close} alt="" />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};
export default Sidebar;
