"use client";
import RequiredBiblePassage from "@/components/reading/RequiredBiblePassage";
import RequiredBooks from "@/components/reading/RequiredBooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RecommendedBook from "@/components/reading/RecommendedBook";
import RecommendedLecture from "@/components/reading/RecommendedLecture";
import LectureContent from "@/components/lectureContent/LectureContent";
import Assignment from "@/components/assignment/Assignment";
import QuizQuestions from "@/components/quiz/QuizQuestions";

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
  console.log(moduleData.quiz_questions[0]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-blue-950 text-white p-5 py-15">
        <h2 className="text-4xl text-center font-semibold max-w-[768px] mx-auto">
          {moduleData.week_title}
        </h2>
        <p className="mt-4 w-[80%] text-md font-extralight  mx-auto text-blue-200">
          {moduleData.overview.description}
        </p>
      </div>
      <div className="grid sm:grid-cols-4 bg-blue-300 text-white p-3 font-semibold text-center">
        <p>Year: {moduleData.year}</p>
        <p>Semester: {moduleData.semester}</p>
        <p>Week: {moduleData.week_number}</p>
        <p>Duration: {moduleData.overview.duration_hours} hours</p>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <h2 className="text-blue-950 text-2xl font-semibold mb-2">
            Learning Objectives
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
      <div className="p-5 pt-0">
        <h2 className="text-blue-950 text-xl font-semibold mb-2">
          Lecture Content
        </h2>
        {moduleData.lecture_content.sections.map((lecture, index) => (
          <LectureContent
            key={index}
            title={lecture.section_title}
            content={lecture.content}
            duration={`${lecture.duration_minutes} minutes`}
          />
        ))}
      </div>
      <div>
        <h2 className="text-blue-950 text-xl font-semibold mb-2 px-5">
          Required Reading
        </h2>
      </div>
      <div className="pl-5">
        <div>
          <h2 className="text-blue-950 text-lg font-semibold mb-2 px-5">
            Books
          </h2>
        </div>
        <div className="p-5 pt-0 grid sm:grid-cols-2 gap-4 pl-5">
          <RequiredBooks
            title={moduleData?.reading_resources.required[0].title}
            chapter={moduleData?.reading_resources.required[0].chapter}
            description={moduleData?.reading_resources.required[0].description}
            author={moduleData?.reading_resources.required[0].author}
          />
        </div>
        <h2 className="text-blue-950 text-lg font-semibold mb-2 px-5">
          Bible Passages
        </h2>
        <div className="p-5 pt-0 grid sm:grid-cols-3 gap-4">
          {moduleData?.reading_resources.required.passages !== undefined ? (
            moduleData?.reading_resources?.required[1]?.passages.map(
              (passage, index) => (
                <RequiredBiblePassage
                  key={index}
                  book={passage.book}
                  chapter={passage.chapter}
                  focus={passage.focus}
                  verses={passage.verses}
                />
              )
            )
          ) : (
            <p>No Bible Passages Required</p>
          )}
        </div>
        <div className="pl-5 pt-2">
          <h2 className="text-blue-950 text-lg font-semibold mb-2">
            Recommended
          </h2>
          <div className="grid  sm:grid-cols-2 gap-4">
            <RecommendedBook
              title={moduleData?.reading_resources.recommended[0].title}
              chapter={moduleData?.reading_resources.recommended[0].chapter}
              author={moduleData?.reading_resources.recommended[0].author}
            />
            <RecommendedLecture
              title={moduleData?.reading_resources.recommended[1].title}
              creator={moduleData?.reading_resources.recommended[1].creator}
              url={moduleData?.reading_resources.recommended[1].url}
            />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-blue-950 text-xl font-semibold mb-2 p-5">Quiz</h2>
        <form>
          {moduleData.quiz_questions.map((quizQuestion) => (
            <QuizQuestions
              key={quizQuestion.question_id}
              question={quizQuestion.question_text}
              options={quizQuestion.options}
              type={quizQuestion.type}
              questionId={quizQuestion.question_id}
            />
          ))}
          <button className="bg-blue-950 px-4 py-1 text-white rounded-sm">
            Submit Quiz
          </button>
        </form>
      </div>
      <div className="border border-blue-100 rounded-lg pt-4 mb-5">
        <h2 className="text-blue-950 text-xl font-semibold mb-2 pl-4">
          Assignments
        </h2>
        <div className="p-5 grid grid-cols-1 gap-4">
          {moduleData.assignments.map((assignment, index) => (
            <Assignment
              key={index}
              title={assignment.title}
              type={assignment.type}
              instructions={assignment.instructions}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
