/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// .header {
//     width: 100%;
//     height:90vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 32px;
//     /* padding: 0 10vw; */
//   }

//   .image {
//     border: 1px solid;
//     line-height: 0;
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .tagline {
//     position: absolute;
//     /* padding-bottom: 16px; */
//     color: white;
//     font-size: 48px;
//     opacity: 0;
//   }
//   .image > div {
//     width: 100%;
//   }
//   .image > #grow {
//     width: 100%;
//     object-fit: contain;
//   }

//   #grow-tagline {
//     transform: translateY(200px);
//   }

//   #grow {
//     transform: scale(0.00);
//   }

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
        // delay: -0.7,
        opacity: 1,
        y: 0,
      },
      "<" // overlap with the previous tween
    );
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <>
      <div className="header ">
        <div className="image">
          <div>
            <img
              ref={growRef}
              id="grow"
              src="https://source.unsplash.com/random/1920x1080"
              alt="Random"
              className=""
            />
          </div>
          {/* <h1 ref={taglineRef} className="tagline">
            At Vero Eos
          </h1> */}
        </div>
      </div>
    </>
  );
}
