/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import KiteAnimation from "./KiteAnimation";

export default function ImageSection() {
  const growRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const growTl = gsap.timeline({
      scrollTrigger: {
        trigger: growRef.current,
        scrub: 0.5,
        pin: true,
        start: "top center",
        end: "+=400",
        ease: "power1.out",
      },
    });

    growTl.to(growRef.current, {
      duration: 1.5,
      scale: 1,
      pin: true,
    });
    growTl.to(
      taglineRef.current,
      {
        duration: 1,
        delay: 0.7,
        opacity: 1,
        y: 0,
      },
      "<"
    );
  }, []);

  return (
    <>
      <div className="header w-full h-[90vh] flex justify-center items-center text-3xl">
        <div className="image relative flex justify-center items-center">
          <div className="w-full ">
            <img
              ref={growRef}
              id="grow"
              src="/background.jpg"
              alt="Random"
              className="w-full  object-cover transform scale-0"
            />
          </div>
          {/* <h1
            ref={taglineRef}
            className="tagline absolute opacity-0 text-black top-1/2 transform translate-y-[500px]"
          >
            At Vero Eos
          </h1> */}
          <KiteAnimation />
        </div>
      </div>
    </>
  );
}
