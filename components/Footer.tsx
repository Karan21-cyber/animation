"use client";
import { motion } from "framer-motion";
import React, { FC,useEffect, useState } from "react";


export const Footer= () => {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState<any>("default");

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
      backgroundColor: "#000",
      mixBlendMode: "difference",
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <footer className="image-section-wrapper flex relative w-full h-[30vh] justify-center items-center ">
    
      <motion.h2
        id="bannerText"
        className="title text-3xl font-bold"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        ##This is a Footer
      </motion.h2>

      <motion.div
        className="cursor h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
      />
    </footer>
  );
};
