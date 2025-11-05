import React from "react";

export default function Header({ setActiveGame }) {
  const games = ["Memory Match", "Fossil Dig", "Egg Catch", "Raptor Run"];

  return (
    <header className="bg-green-800 text-yellow-200 p-4 shadow-lg flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-2">🦖 DinoLovers.org 🦕</h1>
      <p className="mb-4 text-yellow-300">Explore, Play, and Track Your Dino Scores!</p>
      <div className="flex gap-3 flex-wrap justify-center">
        {games.map((game) => (
          <button
            key={game}
            className="bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
            onClick={() => setActiveGame(game)}
          >
            {game}
          </button>
        ))}
      </div>
    </header>
  );
}
