import React from "react";

const LectureContent = ({ title, content, duration }) => {
  return (
    <div className="pl-5">
      <div>
        <h3 className="text-md font-medium text-slate-900 mt-2">{title}</h3>
        <p className="text-gray-700 mt-1">{content}</p>
        <p className="text-sm text-gray-500 mt-1">Duration: {duration}</p>
      </div>
    </div>
  );
};

export default LectureContent;
