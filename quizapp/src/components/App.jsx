import React, { useState } from "react";
import StartScreen from "./StartScreen";
import Quiz from "./Quiz";
import questions from "../data/questions";

export default function App() {
  const [started, setStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const handleStart = () => {
    const random10 = getRandomQuestions(questions, 10);
    setQuizQuestions(random10);
    setStarted(true);
  };

  const handleRestart = (restart = true) => {
    if (restart) {
      setStarted(false);
      setShowResult(false);
      setQuizQuestions([]);
    } else {
      setShowResult(true);
    }
  };

  if (!started) {
    return <StartScreen onStart={handleStart} />;
  }

  if (showResult) {
    return <Quiz questions={quizQuestions} onRestart={handleRestart} />;
  }

  return <Quiz questions={quizQuestions} onRestart={handleRestart} />;
}

// Helper function inside the same file or import from utils
function getRandomQuestions(allQuestions, count = 10) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}