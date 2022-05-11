import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import NoteForm from "./NoteForm";
import NoteItem from "./NoteItem";

const NotesContainer = () => {
  const { notesList } = useContext(GlobalContext);


  return (
    <div className="w-2/5 bg-[#f5f5f5]  rounded-l-xl overflow-y-scroll scrollbar-hide">
      <NoteForm
      
      />
      <div className=" p-1  flex flex-col items-center space-y-1 rounded-xl   ">
        {notesList.map((note) => (
          <NoteItem key={note.id} value={note.value} />
        ))}
        {/* <pre>{JSON.stringify(notesList,null,2)}</pre> */}
      </div>
    </div>
  );
};

export default NotesContainer;
