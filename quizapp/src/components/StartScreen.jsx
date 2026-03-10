import React from "react";

export default function StartScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to the IQ Quiz App</h1>
      <p className="mb-8 max-w-xl">
        Test your intelligence with 50 carefully crafted IQ questions. Answer the questions and see how you score! After completing, you'll get detailed results showing your answers and the correct ones.
      </p>
      <button
        onClick={onStart}
        className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
      >
        Start Quiz
      </button>
    </div>
  );
}