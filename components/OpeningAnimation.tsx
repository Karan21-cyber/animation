"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Provider } from "./Provider";

export const OpeningAnimation = () => {
  const loadingRef = useRef<any>(null);
  const logoNameRef = useRef<any>(null);

  useEffect(() => {
    const loadingPage = loadingRef.current;
    const logoName = logoNameRef.current;

    const tl = gsap.timeline();
    tl.fromTo(
      loadingPage,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        display: "none",
        duration: 2.5,
        delay: 3,
        scrollBehavior: " smooth",
      }
    );

    tl.fromTo(
      logoName,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <>
      <div
        ref={loadingRef}
        className="loading-page absolute top-0 left-0 w-full h-full flex flex-col gap-6  items-center justify-center "
        style={{
          background: "linear-gradient(to right, #2c5364, #203a43, #0f2027)",
        }}
      >
        {/* <svg
          id="svg"
          className="h-[150px] w-[150px] stroke-[#ffff]  stroke-[4px] fill-opacity-0 "
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z" />
        </svg> */}
        <svg
          id="svg"
          className="h-[150px] w-[150px] stroke-[#ffff]  stroke-[4px] fill-opacity-0 "
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M480.3 187.7l4.2 28v28l-25.1 44.1-39.8 78.4-56.1 67.5-79.1 37.8-17.7 24.5-7.7 12-9.6 4s17.3-63.6 19.4-63.6c2.1 0 20.3.7 20.3.7l66.7-38.6-92.5 26.1-55.9 36.8-22.8 28-6.6 1.4 20.8-73.6 6.9-5.5 20.7 12.9 88.3-45.2 56.8-51.5 14.8-68.4-125.4 23.3 15.2-18.2-173.4-53.3 81.9-10.5-166-122.9L133.5 108 32.2 0l252.9 126.6-31.5-38L378 163 234.7 64l18.7 38.4-49.6-18.1L158.3 0l194.6 122L310 66.2l108 96.4 12-8.9-21-16.4 4.2-37.8L451 89.1l29.2 24.7 11.5 4.2-7 6.2 8.5 12-13.1 7.4-10.3 20.2 10.5 23.9z" />
        </svg>
        <div className="name-container h-[30px] overflow-hidden">
          <div
            className="logo-name text-white text-3xl tracking-[12px] uppercase font-bold"
            ref={logoNameRef}
          >
            Karan
          </div>
        </div>{" "}
      </div>
    </>
  );
};
