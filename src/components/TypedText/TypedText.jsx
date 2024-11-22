"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypedText = () => {
  return (
    <Typewriter
      words={[
        "IT Consalting",
        "Development of Mobile Aplication",
        "User Interface and User exprience Design",
        "Optimization IT Consalting infrastructure ",
      ]}
      loop={true}
      cursor
      cursorStyle=""
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default TypedText;
