// src/components/NotesContainer.jsx
import React, { useState } from "react";
import Note from "./Note";

function NotesContainer({ notes, onAddNote, onUpdateNote, onDeleteNote }) {
  const [newNoteContent, setNewNoteContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNoteContent.trim()) {
      onAddNote(newNoteContent);
      setNewNoteContent("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <textarea
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
            placeholder="Write your note here..."
            className="flex-1 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors h-fit"
          >
            Add Note
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onUpdate={onUpdateNote}
            onDelete={onDeleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default NotesContainer;
