import { useState } from "react";
import "./Note.css";

function Note() {
  const [note, saveNote] = useState(
    JSON.parse(localStorage.getItem("note")) || ""
  );

  const handleChange = async (e) => {
    saveNote(e.target.value);
    localStorage.setItem("note", JSON.stringify(e.target.value));
  };

  return (
    <div className="note-box">
      All notes
      <textarea onChange={handleChange} value={note}></textarea>
    </div>
  );
}

export default Note;
