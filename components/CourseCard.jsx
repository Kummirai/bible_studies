"use client";

import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="p-4 border flex flex-col justify-around items-start border-gray-400 rounded-2xl h-[250px]">
      <h2 className="text-2xl font-semibold text-gray-800">{course.title}</h2>
      <h3 className="text-[1rem] text-gray-700">
        <span>{course.modules}</span>
        <span> Modules</span>
      </h3>
      <p className="text-[0.8rem text-gray-900 my-3">{course.desc}</p>
      <button className="px-5 py-1 rounded-lg bg-gray-900 text-white hover:cursor-pointer hover:bg-gray-800">
        View Modules
      </button>
    </div>
  );
};

export default CourseCard;
