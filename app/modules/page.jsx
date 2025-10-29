"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ModulesPage() {
  const searchParams = useSearchParams();
  const [modules, setModules] = useState([]);
  const [courseCode, setCourseCode] = useState("");
  console.log(modules);

  useEffect(() => {
    const storedData = sessionStorage.getItem("courseModules");
    if (storedData) {
      const { courseCode, modules } = JSON.parse(storedData);
      setCourseCode(courseCode);
      setModules(modules);
      sessionStorage.removeItem("courseModules");
    }
  }, [searchParams]);

  return (
    <div className="max-w-6xl mx-auto">
      <div>
        {modules.map((module, index) => (
          <div key={index} className="module-card">
            <div className="bg-blue-950 text-white p-5 py-10">
              <h2 className="text-4xl text-center font-semibold">
                {module.course.title}
              </h2>
              <p className="mt-4 w-[80%] text-md font-extralight text-justify mx-auto text-blue-200">
                {module.course.description}
              </p>
            </div>
            <div className="p-5">
              <div className="mb-4">
                <h2 className="text-blue-950 text-2xl font-semibold mb-2">
                  Objectives
                </h2>
                <ul className="pl-10 ">
                  {module.learningOutcomes.map((outcome, index) => (
                    <li
                      className="list-disc text-gray-900 py-[0.1rem]"
                      key={index}
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-blue-950 text-xl font-semibold mb-2">Topics</h2>
                <ul className="pl-10  text-gray-900">
                  {module.modules.map((week, index) => (
                    <li className="py-[0.1rem]" key={week.module_id}>
                      <span>{week.week}. </span>
                      {week.topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
