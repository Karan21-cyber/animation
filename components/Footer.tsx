"use client";
import React, { useState } from "react";
import { ReuseableText } from "./common/reusableText";
import { MouseEffect } from "@/mouse/MouseEffect";

export const Footer = () => {
  const [cursorVariant, setCursorVariant] = useState<any>("default");
  const textEnter = () => setCursorVariant("footer");
  const textLeave = () => setCursorVariant("default");
  return (
    <footer className="h-[30vh] relative flex justify-between items-center px-8 py-8 bg-slate-500">
      <ReuseableText
        title="Footer"
        textEnter={textEnter}
        textLeave={textLeave}
        className="title pl-3 text-3xl text-white w-[100px]"
      />
      {/* <MouseEffect cursorVariant={cursorVariant} /> */}
    </footer>
  );
};
