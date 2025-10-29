import React from "react";

const Assignment = ({ title, type, instructions , order}) => {
  return <div className="border border-blue-200 p-5 rounded-lg shadow-sm">
    <h3 className="text-md font-medium text-slate-900 mt-2">{order}{title} ({type})</h3>
    <p className="text-gray-700 mt-1">{instructions}</p>
  </div>;
};

export default Assignment;
