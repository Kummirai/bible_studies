"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ModuleDetailPage() {
  const searchParams = useSearchParams();
  const [selectedModule, setSelectedModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedData = sessionStorage.getItem("moduleDetail");
    console.log("Stored data from sessionStorage:", storedData);

    if (storedData) {
      try {
        const moduleDetail = JSON.parse(storedData);
        console.log("Parsed module detail:", moduleDetail);
        setSelectedModule(moduleDetail);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  if (
    !selectedModule ||
    !selectedModule.module ||
    selectedModule.module.length === 0
  ) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          No Module Data Found
        </h1>
        <p className="text-gray-600 mb-4">
          Please select a module from the previous page.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  const moduleData = selectedModule.module[0];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-blue-950 text-white p-5 py-10">
        <h2 className="text-4xl text-center font-semibold">
          {moduleData.week_title}
        </h2>
        <p className="mt-4 w-[80%] text-md font-extralight  mx-auto text-blue-200">
          {moduleData.overview.description}
        </p>
      </div>
      <div className="grid sm:grid-cols-3 bg-blue-300 text-white p-3 font-semibold text-center">
        <p>Year: {moduleData.year}</p>
        <p>Semester: {moduleData.semester}</p>
        <p>Duration: {moduleData.overview.duration_hours}</p>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <h2 className="text-blue-950 text-2xl font-semibold mb-2">
            Objectives
          </h2>
          <ul className="pl-10 ">
            {moduleData?.overview.learning_objectives.map((outcome, index) => (
              <li className="list-disc  text-gray-900 py-[0.1rem]" key={index}>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
