"use client";
import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface IProps {
  cursorVariant?: string;
}

export const MouseEffect: FC<IProps> = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#00000",
      // mixBlendMode: "difference",
    },
    text: {
      height: 50,
      width: 50, 
      fontSize: 12,
      textCentered: true,
      color: "#00000",
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      backgroundColor: "#ffff",
      mixBlendMode: "difference",
    },
    image: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#9eabde",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className="cursor h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none"
      variants={variants}
      animate={cursorVariant}
    />
  );
};
