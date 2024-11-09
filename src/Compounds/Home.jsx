import React, { useState, useEffect } from "react";
import Question from "./Question";
import questionsData from "./questions.json";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : questions.length - 1
    );
  };

  return (
    <div className=" bg-gray-700 min-h-screen bg-cover bg-center flex items-center justify-center">
      <div className=" w-full max-w-3xl p-6 bg-w bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-8 justify-start">
          Question Answer Home
        </h1>
        {questions.length > 0 && (
          <Question questionData={questions[currentQuestionIndex]} />
        )}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
