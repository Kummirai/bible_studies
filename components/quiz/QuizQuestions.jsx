import React from "react";

const QuizQuestions = ({ question, options }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg mb-4 shadow-sm">
      <p>{question}</p>
      <ul>
        {options.map((option) => (
          <li key={option.id} className="flex items-center">
            <input type="radio" value="" name={question.question_id} className="mr-2" />
            <span>{option.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestions;
