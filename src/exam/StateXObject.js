import React, { useState } from "react";
import "./StateXObject.css";

const emptyNote = {
  content: "",
  author: "",
};

const StateXObject = () => {
  // - States
  const [note, setNote] = useState(emptyNote); //สร้างโน๊ต
  const [editNote, setEditNote] = useState(null);
  const [allNotes, setAllNotes] = useState([]); //เก็บโน๊ตทั้งหมด

  // - Functions form inputs
  function onNoteValueChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  // - Functions add, edit, delete

  function onNoteSubmit(event) {
    event.preventDefault();

    if (note.content === "" || note.author === "") {
      alert("โปรดกรอกข้อมูล");
    } else {
      // Add note
      setAllNotes((prevAllNotes) => {
        const newNote = { ...note };
        newNote.id = Date.now().toString();
        return [newNote, ...prevAllNotes];
      });

      // Clear add form
      setNote(emptyNote);
    }
  }

  function onEditNoteSubmit(event) {
    event.preventDefault();

    // Edit note
    setAllNotes((prevAllNotes) => {
      return prevAllNotes.map((theNote) => {
        if (theNote.id !== editNote.id) return theNote;
        return editNote;
      });
    });

    // Clear edit form
    setEditNote(null);
  }

  function onEditNoteValueChange(event) {
    const { name, value } = event.target;
    setEditNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function onNoteDelete(noteId) {
    setAllNotes((prevAllNotes) => {
      return prevAllNotes.filter((theNote) => {
        return theNote.id !== noteId;
      });
    });
  }

  // - Elements
  const allNotesElements = allNotes.map((theNote) => {
    return (
      <div key={theNote.id} className="app-note">
        <p>{theNote.content}</p>
        <h5>{theNote.author}</h5>
        <p>
          <a
            onClick={() => {
              setEditNote(theNote);
            }}
          >
            Edit
          </a>
          <span> | </span>
          <a
            onClick={() => {
              onNoteDelete(theNote.id);
            }}
          >
            Delete
          </a>
        </p>
      </div>
    );
  });

  let editNoteElement = null;
  if (!!editNote) {
    editNoteElement = (
      <div className="app-edit-note">
        <form onSubmit={onEditNoteSubmit}>
          <p>
            <textarea
              rows="3"
              placeholder="คิดอะไรอยู่ . . ."
              name="content"
              value={editNote.content}
              onChange={onEditNoteValueChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="ลงชื่อ"
              name="author"
              value={editNote.author}
              onChange={onEditNoteValueChange}
            />
          </p>
          <p>
            <button type="submit">บันทึก</button>
          </p>
        </form>
      </div>
    );
  }

  return (
    <section className="app-section">
      <div className="app-container">
        <h3>เพิ่มโน๊ต</h3>
        <form onSubmit={onNoteSubmit}>
          <p>
            <textarea
              rows="3"
              placeholder="คิดอะไรอยู่"
              name="content"
              value={note.content}
              onChange={onNoteValueChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="ลงชื่อ"
              name="author"
              value={note.author}
              onChange={onNoteValueChange}
            />
          </p>
          <p>
            <button type="submit">เพิ่มลงไป</button>
          </p>
        </form>
        <div className="app-notes">{allNotesElements}</div>
      </div>
      {editNoteElement}
    </section>
  );
};

export default StateXObject;
