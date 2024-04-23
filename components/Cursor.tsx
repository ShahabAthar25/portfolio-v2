"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor(): JSX.Element {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent): void => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  });

  const variants = {
    default: {
      x: mousePos.x,
      y: mousePos.y,
    },
  };

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 h-[32px] w-[32px] border border-solid border-secondary rounded-full flex items-center justify-center"
        variants={variants}
        animate="default"
      ></motion.div>
      <motion.div className="bg-primary h-[5px] w-[5px] rounded-full"></motion.div>
    </div>
  );
}
