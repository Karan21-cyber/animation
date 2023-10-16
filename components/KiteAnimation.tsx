"use client";
import React from "react";
import { motion } from "framer-motion";

const KiteAnimation = () => {
  return (
    <div className="absolute">
      <div className="h-[60vh]  mt-[-10%]  flex justify-center  overflow-hidden ">
        <motion.h1
          transition={{ duration: 1.5, delay: 4 }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          className="text-2xl text-white"
        >
          helo
        </motion.h1>
        <motion.h1
          transition={{ duration: 1.5, delay: 6 }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          className="text-2xl text-white"
        >
          helo
        </motion.h1>
        <motion.h1
          transition={{ duration: 1.5, delay: 8 }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          className="text-2xl text-white"
        >
          helo
        </motion.h1>
        <motion.h1
          transition={{ duration: 1.5, delay: 10 }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          className="text-2xl text-white"
        >
          helo
        </motion.h1>
        <motion.h1
          transition={{ duration: 1.5, delay: 5 }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          className="text-2xl text-white"
        >
          helo
        </motion.h1>
      </div>
    </div>
  );
};

export default KiteAnimation;
