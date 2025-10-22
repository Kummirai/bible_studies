"use client";

import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="p-4 border flex flex-col justify-around items-start border-gray-400 rounded-2xl h-[230px]">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">{course.title}</h2>
        <h3 className="text-[0.85rem] text-gray-700">
          <span>{course.modules}</span>
          <span> Modules</span>
        </h3>
      </div>

      <p className="text-[0.9rem] text-gray-700 my-2 line-clamp-4">{course.desc}</p>
      <button className="px-5 py-[6px] rounded-lg bg-gray-900 text-[0.85rem] text-white hover:cursor-pointer hover:bg-gray-800">
        View Modules
      </button>
    </div>
  );
};

export default CourseCard;
