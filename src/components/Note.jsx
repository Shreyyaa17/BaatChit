// // src/components/Note.jsx
// import React, { useState } from 'react';

// function Note({ note, onUpdate, onDelete }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editContent, setEditContent] = useState(note.content);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editContent.trim()) {
//       onUpdate(note.id, editContent);
//       setIsEditing(false);
//     }
//   };

//   const formatDate = (timestamp) => {
//     return new Date(timestamp).toLocaleString();
//   };

//   if (isEditing) {
//     return (
//       <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
//         <textarea
//           value={editContent}
//           onChange={(e) => setEditContent(e.target.value)}
//           className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//           rows="4"
//           autoFocus
//         />
//         <div className="flex justify-end gap-2 mt-2">
//           <button
//             type="button"
//             onClick={() => setIsEditing(false)}
//             className="px-3 py-1 text-gray-600 hover:text-gray-800"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     );
//   }

//   return (
//     <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
//       <div className="whitespace-pre-wrap mb-3">{note.content}</div>
//       <div className="flex items-center justify-between text-sm text-gray-500">
//         <span>{formatDate(note.timestamp)}</span>
//         <div className="flex gap-2">
//           <button
//             onClick={() => setIsEditing(true)}
//             className="text-blue-500 hover:text-blue-600"
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => onDelete(note.id)}
//             className="text-red-500 hover:text-red-600"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Note;

// import React, { useState } from "react";

// function Note({ note, onUpdate, onDelete }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editContent, setEditContent] = useState(note.content);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editContent.trim()) {
//       onUpdate(note.id, editContent);
//       setIsEditing(false);
//     }
//   };

//   const formatDate = (timestamp) => {
//     return new Date(timestamp).toLocaleString();
//   };

//   if (isEditing) {
//     return (
//       <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
//         <textarea
//           value={editContent}
//           onChange={(e) => setEditContent(e.target.value)}
//           className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//           rows="4"
//           autoFocus
//         />
//         <div className="flex justify-end gap-2 mt-2">
//           <button
//             type="button"
//             onClick={() => setIsEditing(false)}
//             className="px-3 py-1 text-gray-600 hover:text-gray-800"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     );
//   }

//   return (
//     <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
//       <div className="whitespace-pre-wrap mb-3 max-h-40 overflow-auto">
//         {note.content}
//       </div>
//       <div className="flex items-center justify-between text-sm text-gray-500">
//         <span>{formatDate(note.timestamp)}</span>
//         <div className="flex gap-2">
//           <button
//             onClick={() => setIsEditing(true)}
//             className="text-blue-500 hover:text-blue-600"
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => onDelete(note.id)}
//             className="text-red-500 hover:text-red-600"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Note;

import React, { useState } from "react";

function Note({ note, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(note.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editContent.trim()) {
      onUpdate(note.id, editContent);
      setIsEditing(false);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          autoFocus
        />
        <div className="flex justify-end gap-2 mt-2">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-3 py-1 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="whitespace-pre-wrap mb-3 break-words">{note.content}</div>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{formatDate(note.timestamp)}</span>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
