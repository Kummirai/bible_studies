import React from "react";
import CourseCard from "./CourseCard";

const Courses = ({ heading, courses }) => {
  console.log(courses);

  return (
    <div
      className={
        heading === "Electives"
          ? "bg-slate-100 p-3 min-sm:p-10 mb-10"
          : "p-3 min-sm:p-10 mb-10"
      }
    >
      <h2 className="text-slate-900 text-2xl min-sm:text-4xl font-semibold text-center mb-10">
        {heading}
      </h2>
      <div
        className={
          heading === "Electives"
            ? "grid grid-cols-1 gap-5 min-xl:grid-cols-3  min-md:grid-cols-2 sm:grid-cols-1"
            : "grid grid-cols-1 gap-5 min-xl:grid-cols-3  min-md:grid-cols-2 sm:grid-cols-1 bg-white"
        }
      >
        {courses?.map((course) => (
          <CourseCard
            key={course.course.code}
            course={course}
            heading={heading}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
