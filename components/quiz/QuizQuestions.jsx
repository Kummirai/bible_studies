import React from "react";

const QuizQuestions = ({ question, options }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg mb-4 shadow-sm">
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestions;
