"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CourseCard = ({ course, heading }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState(null);


  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleViewModules = async (courseCode) => {
    let modules = [];

    if (heading === "Courses") {
      const res = await fetch(`/api/courses/${courseCode}`);
      modules = await res.json();
    } else if (heading === "Electives") {
      const res = await fetch(`/api/electives/${courseCode}`);
      modules = await res.json();
    } else if (heading === "General Education") {
      const res = await fetch(`/api/generalEducation/${courseCode}`);
      modules = await res.json();
    }

    sessionStorage.setItem(
      "courseModules",
      JSON.stringify({
        courseCode,
        modules,
        heading,
      })
    );

    router.push("/modules");
  };

  const handleEnroll = async (courseCode) => {
    try {
      const res = await fetch('/api/user/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseCode }),
      });

      const data = await res.json();

      if (res.ok) {
        setEnrollmentStatus('success');
        setTimeout(() => setEnrollmentStatus(null), 3000);
      } else {
        setEnrollmentStatus('error');
        setTimeout(() => setEnrollmentStatus(null), 3000);
      }
    } catch (error) {
      setEnrollmentStatus('error');
      setTimeout(() => setEnrollmentStatus(null), 3000);
    }
  };

  return (
    <div
      className={
        heading === "Electives"
          ? "bg-slate-100 p-4 border flex flex-col justify-between items-start hover:border-slate-400 border-slate-200 rounded-2xl h-[250px]"
          : "p-4 border flex flex-col justify-between items-start hover:border-slate-400 border-slate-200 rounded-2xl h-[250px]"
      }
    >
      <div>
        <h2 className="text-xl min-sm:text-2xl line-clamp-1 font-semibold text-slate-900">
          {course.course.title}
        </h2>
        <h3 className="text-xs pl-1 text-slate-700 font-semibold">
          <span>{course?.course.credits}</span>
          <span> Credits</span>
        </h3>
      </div>

      <p className="text-[0.9rem] text-slate-700 my-2 line-clamp-3">
        {course.course.description}
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => handleViewModules(course.course.code)}
          className="px-5 py-[6px] bg-slate-900 border rounded-lg border-slate-300 text-[0.85rem] text-white  hover:cursor-pointer  hover:border-slate-500  hover:text-slate-700 hover:bg-transparent"
        >
          View Modules
        </button>
        {isLoggedIn && (
          <button
            onClick={() => handleEnroll(course.course.code)}
            className="px-5 py-[6px] bg-green-600 border rounded-lg border-green-300 text-[0.85rem] text-white  hover:cursor-pointer  hover:border-green-500  hover:text-green-700 hover:bg-transparent"
          >
            Enroll
          </button>
        )}
      </div>
      {enrollmentStatus === 'success' && <p className="text-green-500 text-sm mt-2">Enrolled successfully!</p>}
      {enrollmentStatus === 'error' && <p className="text-red-500 text-sm mt-2">Failed to enroll.</p>}
    </div>
  );
};

export default CourseCard;

