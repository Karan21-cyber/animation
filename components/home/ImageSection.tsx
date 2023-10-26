"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import React, { FC, useRef, useEffect, useState } from "react";

interface ImageProps {
  src: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
export const ImageSection: FC<ImageProps> = ({ src }) => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef });
  const y = useParallax(scrollYProgress, 450);

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
    },
    image: {
      // height: 80,
      // width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "white",
      // mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const imageEnter = () => setCursorVariant("image");
  const imageLeave = () => setCursorVariant("default");

  return (
    <section className="image-section-wrapper  flex relative w-full h-[90vh] justify-center items-center ">
      <div
        ref={imageRef}
        onMouseEnter={imageEnter}
        onMouseLeave={imageLeave}
        className="image-container-wrapper relative w-full h-[80vh] overflow-hidden "
      >
        <Image
          src={`${src}`}
          fill
          alt="banner"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
      </div>

      <motion.h2
        style={{
          y,
          fontSize: "50px",

          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translateY(-50%,-50%)",
        }}
        id="bannerText"
        className="title"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        ##This is a banner
      </motion.h2>

      <motion.div
        className="cursor h-[100px] w-[100px]  rounded-full shadow-2xl fixed top-0 left-0 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
      >
        <h1 className="w-full h-full p-4 text-xl text-center flex justify-center items-center flex-wrap ">
          See Project
        </h1>
        
      </motion.div>
    </section>
  );
};
