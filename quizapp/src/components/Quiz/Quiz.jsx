import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

export default function Quiz({ questions, onRestart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const currentQuestion = questions[currentIndex];
  const isQuizComplete = Object.keys(userAnswers).length === questions.length;

  const handleSelectOption = (option) => {
    setUserAnswers({ ...userAnswers, [currentQuestion.id]: option });
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevQuestion = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-50 py-12 px-6">
      {!isQuizComplete ? (
        <>
          <div className="max-w-3xl mx-auto mb-6 p-4 bg-white rounded-lg shadow-lg text-center text-gray-700 font-semibold text-lg tracking-wide">
            Question {currentIndex + 1} of {questions.length}
          </div>

          <Question
            questionData={currentQuestion}
            selectedOption={userAnswers[currentQuestion.id]}
            onSelect={handleSelectOption}
          />

          <div className="max-w-3xl mx-auto flex justify-between mt-8">
            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className={`px-6 py-3 rounded-lg font-medium transition
                ${
                  currentIndex === 0
                    ? "bg-gray-300 cursor-not-allowed text-gray-600"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
                }
              `}
            >
              Previous
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={() => onRestart(false)}
                disabled={!userAnswers[currentQuestion.id]}
                className={`px-6 py-3 rounded-lg font-medium transition
                  ${
                    !userAnswers[currentQuestion.id]
                      ? "bg-gray-300 cursor-not-allowed text-gray-600"
                      : "bg-green-600 text-white hover:bg-green-700 shadow-md"
                  }
                `}
              >
                Finish
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled={!userAnswers[currentQuestion.id]}
                className={`px-6 py-3 rounded-lg font-medium transition
                  ${
                    !userAnswers[currentQuestion.id]
                      ? "bg-gray-300 cursor-not-allowed text-gray-600"
                      : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
                  }
                `}
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <Result questions={questions} userAnswers={userAnswers} onRestart={onRestart} />
      )}
    </div>
  );
}