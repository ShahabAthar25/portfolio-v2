"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Landing(): JSX.Element {
  const words = [
    "Frontend Developer",
    "Backend Developer",
    "Solutions Architect",
  ];

  return (
    <div className="flex justify-center flex-col h-full min-h-[calc(80vh)] text-[37px]">
      <h1 className="text-text bg-transparent">
        Hi, <span className="text-secondary">My name is</span>
      </h1>
      <h1 className="text-text text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-glow shadow-lg">
        Shahab Athar
      </h1>
      <h1 className="text-secondary">I am a</h1>
      <div className="text-text flex drop-shadow-glow shadow-2xl">
        <Typewriter words={words} loop={0} />
        <h1 className="text-transparent">S</h1>
      </div>
    </div>
  );
}
