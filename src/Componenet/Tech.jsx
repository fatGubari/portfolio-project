import React from "react";
import TechSlider from "./TechSlider";


function Tech() {
  return (
    <div
      className="flex flex-col items-center bg-zinc-700 rounded-lg justify-evenly flex-wrap max-w-5xl m-5"
      id="Tech"
    >
      <h1 className="text-white font-semibold m-3">Technologies I Use</h1>
      <TechSlider />
    </div>
  );
}

export default Tech;
