import React from "react";

export default function Result({ questions, userAnswers, onRestart }) {
  const score = questions.reduce((acc, q) => {
    if (userAnswers[q.id] === q.correct) return acc + 1;
    return acc;
  }, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Your Score: {score} / {questions.length}
      </h2>

      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="border rounded p-4 bg-white shadow-md">
            <h3 className="font-semibold">{q.question}</h3>
            <p>
              Your answer:{" "}
              <span
                className={
                  userAnswers[q.id] === q.correct
                    ? "text-green-600 font-bold"
                    : "text-red-600 font-bold"
                }
              >
                {userAnswers[q.id] || "No answer"}
              </span>
            </p>
            {userAnswers[q.id] !== q.correct && (
              <p>
                Correct answer: <span className="text-green-600 font-bold">{q.correct}</span>
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={onRestart}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}