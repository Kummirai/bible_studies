import React from "react";

const QuizQuestions = ({ question, options, questionId, type }) => {
  return (
    <div className="p-3 border border-gray-300 rounded-lg mb-4 shadow-sm">
      <p className="mb-1 text-slate-800">
        <span className="font-bold text-blue-950 mr-1">{questionId}.</span>
        {question}
      </p>
      <ul>
        {type === "multiple_choice" ? (
          options?.map((option) => (
            <li key={option.id} className="flex items-center text-slate-800">
              <input type="radio" value="" name={questionId} className="mr-2" />
              <span>{option.text}</span>
            </li>
          ))
        ) : type === "true_false" ? (
          <>
            <li className="flex items-center">
              {" "}
              <input type="radio" value="" name={questionId} className="mr-2" />
              True
            </li>
            <li className="flex items-center text-slate-800">
              {" "}
              <input type="radio" value="" name={questionId} className="mr-2" />
              False
            </li>
          </>
        ) : type === "short_answer" ? (
          <textarea className="border border-blue-200 rounded-md w-[80%] outline-blue-300 p-1 text-slate-800"></textarea>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default QuizQuestions;
