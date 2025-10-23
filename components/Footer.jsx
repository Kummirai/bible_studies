import React from "react";
import FooterCoursesCard from "./FooterCoursesCard";
import FooterContactCard from "./FooterContactCard";

const date = new Date();
const year = date.getFullYear();

const Footer = ({ courses, electives, generalEducation }) => {
  return (
    <div className="bg-slate-950 h-[fit-content] w-[100%] p-5 min-sm:p-10 pb-3 ">
      <div className="grid grid-cols-1 min-sm:grid-cols-2 min-lg:grid-cols-4 gap-4 mb-10">
        <FooterCoursesCard courses={courses} heading={"Courses"} />
        <FooterCoursesCard courses={electives} heading={"Electives"} />
        <FooterCoursesCard
          courses={generalEducation}
          heading={"General Education"}
        />
        <FooterContactCard />
      </div>
      <hr />
      <div className="pt-4 text-slate-300 text-xs flex items-center justify-center border-t border-t-slate-400">
        <p>biblestudy.org &copy; {year}</p>
      </div>
    </div>
  );
};

export default Footer;
