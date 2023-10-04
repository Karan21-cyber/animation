"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./Footer";
import { OpeningAnimation } from "./OpeningAnimation";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <RecoilRoot>
      <Navbar />
      {children}
      <Footer />
      <OpeningAnimation />
    </RecoilRoot>
  );
};
