"use client";
import React, { useState } from "react";
import { ReuseableText } from "../common/reusableText";
import { MouseEffect } from "@/mouse/MouseEffect";
import { Header } from "../header/Header";

export const Navbar = () => {
  const [cursorVariant, setCursorVariant] = useState<any>("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <nav className="navbar-wrapper relative flex justify-between items-center px-8 py-8 bg-slate-500 border">
      <ReuseableText
        title="Logo"
        className="title text-2xl text-white w-[100px]"
        textEnter={textEnter}
        textLeave={textLeave}
      />

      {/* <ReuseableText
        title="Menu"
        className="title text-2xl text-white w-[100px]"
        textEnter={textEnter}
        textLeave={textLeave}
        handleClick={() => console.log("mouse clicked")}
      /> */}
      <Header  textEnter={textEnter}
        textLeave={textLeave} />
      <MouseEffect cursorVariant={cursorVariant} />
    </nav>
  );
};
