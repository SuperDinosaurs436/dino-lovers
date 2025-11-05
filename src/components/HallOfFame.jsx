import React, { useState, useEffect } from "react";

export default function HallOfFame() {
  const [scores, setScores] = useState({});

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("dinoHighScores")) || {};
    setScores(storedScores);
  }, []);

  const resetScores = () => {
    localStorage.removeItem("dinoHighScores");
    setScores({});
  };

  return (
    <div className="mt-8 p-4 bg-green-900 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-yellow-300">🏆 Hall of Fame</h2>
      {Object.keys(scores).length === 0 ? (
        <p className="text-yellow-200">No scores yet. Play a game!</p>
      ) : (
        <ul className="space-y-2 text-yellow-200">
          {Object.entries(scores).map(([game, score]) => (
            <li key={game} className="flex justify-between">
              <span>{game}</span>
              <span>{score}</span>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={resetScores}
        className="mt-4 bg-yellow-400 text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
      >
        Reset Scores
      </button>
    </div>
  );
}
