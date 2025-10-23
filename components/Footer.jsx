import React from "react";
import FooterCoursesCard from "./FooterCoursesCard";

const Footer = ({ courses, electives, generalEducation }) => {
  return (
    <div className="bg-slate-950 h-[fit-content] w-[100%] p-10 pb-3 ">
      <div className="grid grid-cols-4 mb-10">
        <FooterCoursesCard courses={courses} heading={"Courses"} />
        <FooterCoursesCard courses={electives} heading={"Electives"} />
        <FooterCoursesCard
          courses={generalEducation}
          heading={"General Education"}
        />
      </div>
      <hr />
      <div className="pt-4 text-slate-300 text-xs flex items-center justify-center border-t border-t-slate-400">
        <p>biblestudy.org &copy; 2025</p>
      </div>
    </div>
  );
};

export default Footer;
