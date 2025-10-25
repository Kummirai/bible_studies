"use client";

import React from "react";

const CourseCard = ({ course, heading }) => {
  const handleViewModules = async (courseCode) => {
    if (heading === "Courses") {
      const res = await fetch(`/api/courses/${courseCode}`);
      const modules = await res.json();
      console.log(modules);
    } else if (heading === "Electives") {
      const res = await fetch(`/api/electives/${courseCode}`);
      const modules = await res.json();
      console.log(modules);
    } else if (heading === "General Education") {
      const res = await fetch(`/api/generalEducation/${courseCode}`);
      const modules = await res.json();
      console.log(modules);
    }
  };

  return (
    <div
      className={
        heading === "Electives"
          ? "bg-slate-100 p-4 border flex flex-col justify-around items-start hover:border-slate-400 border-slate-200 rounded-2xl h-[230px]"
          : "p-4 border flex flex-col justify-around items-start hover:border-slate-400 border-slate-200 rounded-2xl h-[230px]"
      }
    >
      <div>
        <h2 className="text-xl min-sm:text-2xl line-clamp-1 font-semibold text-slate-900">
          {course.course.title}
        </h2>
        <h3 className="text-xs pl-1 text-slate-700 font-semibold">
          <span>{course?.modules.length}</span>
          <span> Modules</span>
        </h3>
      </div>

      <p className="text-[0.9rem] text-slate-700 my-2 line-clamp-4">
        {course.course.description}
      </p>

      <button
        onClick={() => handleViewModules(course.course.code)}
        className="px-5 py-[6px] bg-slate-900 border rounded-lg border-slate-300 text-[0.85rem] text-white  hover:cursor-pointer  hover:border-slate-500  hover:text-slate-700 hover:bg-transparent"
      >
        View Modules
      </button>
    </div>
  );
};

export default CourseCard;
