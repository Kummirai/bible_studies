import React from "react";

const FooterCoursesCard = ({ courses, heading }) => {
  return (
    <>
      <div className="text-white">
        <h2 className="text-[1rem] font-semibold mb-1">{heading}</h2>
        <ul className="text-white">
          {courses.map((course, index) =>
            index < 6 ? (
              <li key={index} className="text-[0.79rem] text-slate-300">
                {course.title}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default FooterCoursesCard;
