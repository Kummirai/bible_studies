import React from "react";

const RequiredBiblePassage = ({ book, chapter, focus, verses }) => {
  return (
    <div className="p-5 border border-blue-200 rounded-md">
      <div className="text-slate-800">
        <p className="font-bold"><span>{book}</span><span> {chapter}</span></p>
        <p className=""><span className="font-semibold">Focus: </span>{focus}</p>
        <p className=""><span className="font-semibold">Verses: </span>{verses}</p>
      </div>
    </div>
  );
};

export default RequiredBiblePassage;
