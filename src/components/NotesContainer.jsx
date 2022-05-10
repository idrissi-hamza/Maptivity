import React from "react";
import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteItem from "./NoteItem";

const NotesContainer = () => {
  const [notesList, setNotesList] = useState([]);
  const generateId = () => `${new Date()}`;

  return (
    <div className="w-2/5 bg-[#f5f5f5]  rounded-l-xl overflow-y-scroll scrollbar-hide">
      <NoteForm
        submit={(value) => {
          setNotesList([...notesList, { id: generateId(), value }]);
        }}
      />
      <div className=" p-1  flex flex-col items-center space-y-1 rounded-xl   ">
        {notesList.map((note) => (
          <NoteItem key={note.id} value={note.value} />
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
