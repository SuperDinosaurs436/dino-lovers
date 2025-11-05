import React, { useState } from "react";
import { playSound } from "../soundUtils";

export default function FossilDig() {
  const gridSize = 16; // 4x4 grid
  const [grid, setGrid] = useState(generateGrid());
  const [found, setFound] = useState([]);
  const [score, setScore] = useState(0);

  function generateGrid() {
    const cells = Array(gridSize).fill("🟫");
    const fossils = [2, 5, 7, 12]; // indices for fossils
    fossils.forEach((i) => (cells[i] = "🦴"));
    return cells;
  }

  const handleDig = (index) => {
    if (found.includes(index)) return;

    if (grid[index] === "🦴") {
      playSound("/sounds/dig.mp3");
      setFound([...found, index]);
      const newScore = score + 1;
      setScore(newScore);

      // Update Hall of Fame
      const storedScores = JSON.parse(localStorage.getItem("dinoHighScores")) || {};
      localStorage.setItem(
        "dinoHighScores",
        JSON.stringify({
          ...storedScores,
          "Fossil Dig": Math.max(newScore, storedScores["Fossil Dig"] || 0),
        })
      );
    } else {
      playSound("/sounds/jump.mp3");
    }
  };

  const restartGame = () => {
    setGrid(generateGrid());
    setFound([]);
    setScore(0);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Fossil Dig 🦴</h2>
      <p className="mb-2">Score: {score}</p>
      <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
        {grid.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleDig(index)}
            className="w-16 h-16 flex items-center justify-center text-3xl rounded-lg cursor-pointer border-2 border-yellow-400 bg-green-800"
          >
            {found.includes(index) ? "🦴" : "🟫"}
          </div>
        ))}
      </div>
      <button
        className="mt-4 bg-yellow-400 text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
        onClick={restartGame}
      >
        Restart Game
      </button>
    </div>
  );
}
