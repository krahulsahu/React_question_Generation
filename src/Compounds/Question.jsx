import React, { useState } from "react";

const Question = ({ questionData }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(true);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-white shadow-md hover:shadow-lg transition-shadow duration-200">
      <p className="text-xl font-semibold text-gray-800 mb-4">
        {questionData.question}
      </p>

      <button
        onClick={handleClick}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Get Answer
      </button>

      {showAnswer && (
        <div className="mt-6">
          <p className="text-md text-gray-700 font-medium">
            {questionData.answer}
          </p>
          {questionData.image && (
            <img
              src={questionData.image}
              alt="Related visual"
              className="mt-4 w-full max-w-xs rounded-md shadow-sm border border-gray-200"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
