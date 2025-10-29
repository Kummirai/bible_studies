import React from "react";

const RequiredBooks = ({ title, chapter, description, author }) => {
  return (
    <div className="p-5 border border-blue-200 rounded-md">
      <div>
        <p className="font-bold">{title}</p>
        <p className="font-semibold">Chapter: {chapter}</p>
        <p className="">{description}</p>
        <p className="">{author}</p>
      </div>
    </div>
  );
};

export default RequiredBooks;
