import React from "react";

export default function Question({ questionData, selectedOption, onSelect }) {
  return (
    <div className="p-6 border rounded-md shadow-md bg-white max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">{questionData.question}</h2>
      <div className="flex flex-col gap-3">
        {questionData.options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`py-2 px-4 rounded border transition
              ${
                selectedOption === option
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}