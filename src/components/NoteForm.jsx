import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
const NoteForm = ({ submit }) => {
  const context = useContext(GlobalContext);
  const { dispatch,disableInput } = context;
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(value);
    setValue("");
    dispatch({ type: "DISABLE_FORM" });
    
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex rounded-l-lg mx-1 mt-1 "
    >
      <input
        className="w-full bg-none border-0 outline-none p-2 m-2 placeholder:text-sm"
        type="text"
        placeholder="mark on map then add a note..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        disabled={disableInput}
      />
      <button className="pr-1 text-2xl hover:text-yellow-500 scale-110  text-yellow-400 active:scale-95 ">
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
    </form>
  );
};

export default NoteForm;
