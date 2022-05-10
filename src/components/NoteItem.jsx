import React from "react";

const NoteItem = ({ value }) => {
  return (
    <div className="flex flex-row justify-start items-center shadow hover:translate-x-1 hover:shadow-md w-full  p-2 break-all bg-white rounded-md transition-all duration-200 ">
      {value}
    </div>
  );
};

export default NoteItem;
