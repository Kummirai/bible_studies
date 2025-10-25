// app/modules/page.js
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
    <div className="max-w-5xl mx-auto">
      <div>
        {modules.map((module, index) => (
          <div key={index} className="module-card">
            <h2 className="text-2xl text-center font-semibold">
              {module.course.title}
            </h2>
            <p className="my-2 w-[80%] mx-auto">{module.course.description}</p>
            <ul>
              {module.learningOutcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
            <ul>
              {module.modules.map((week, index) => (
                <li className="" key={week.module_id}>
                  <span>{week.week}. </span>
                  {week.topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
