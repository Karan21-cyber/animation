"use client";
import React, { FC, useState } from "react";

interface IProps {
  textEnter?: () => void;
  textLeave?: () => void;
  handleClick?: () => void;
}
export const Header: FC<IProps> = ({ textEnter, textLeave }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
      className="button-wrapper bg-slate-700 fixed right-0 m-5 w-20 h-20 flex pointer rounded-full items-center justify-center "
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className={`burger-wrapper w-full  ${isActive ? "burgerActive" : ""}`}
      ></div>
    </div>
  );
};
