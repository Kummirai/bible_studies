import React from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  return (
    <div className="p-10">
      <h2 className="text-gray-900 text-4xl font-semibold text-center my-10">Courses</h2>
      <div className="grid grid-cols-3 gap-5 bg-white">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
