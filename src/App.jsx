// src/App.jsx
import React, { useState, useEffect } from "react";
import NotesContainer from "./components/NotesContainer";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Load notes from localStorage on component mount
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    // Save notes to localStorage whenever they change
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (content) => {
    const newNote = {
      id: Date.now(),
      content,
      timestamp: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
  };

  const updateNote = (id, content) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, content, timestamp: new Date().toISOString() }
          : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          BaatChit
        </h1>
        <NotesContainer
          notes={notes}
          onAddNote={addNote}
          onUpdateNote={updateNote}
          onDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
