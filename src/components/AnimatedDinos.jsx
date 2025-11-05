import React from "react";
import { motion } from "framer-motion";

export default function AnimatedDinos() {
  const dinos = ["🦖", "🦕", "🦖", "🦕", "🦖"];

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {dinos.map((dino, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          initial={{ x: -100, y: Math.random() * 400 }}
          animate={{ x: 1200 }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ top: Math.random() * 200 }}
        >
          {dino}
        </motion.div>
      ))}
    </div>
  );
}
