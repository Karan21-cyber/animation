"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface IProps {
  title?: string;
  className?: string;
  textEnter?: () => void;
  textLeave?: () => void;
  handleClick?: () => void;
}
export const ReuseableText: FC<IProps> = ({
  title,
  className,
  textEnter,
  textLeave,
  handleClick,
}) => {
  return (
    <motion.h1
      className={`${className}`}
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
      onClick={handleClick}
    >
      {title}
    </motion.h1>
  );
};
