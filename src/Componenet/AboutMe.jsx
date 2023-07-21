import React from "react";
import profile from "../Images/profile.png";

function AboutMe() {
  return (
    <div className="flex flex-row items-center bg-zinc-700 rounded-lg justify-evenly flex-wrap max-w-5xl m-8">
      <h1 className="text-white font-semibold m-3">About Me</h1>
      <div className="flex flex-row items-center justify-evenly flex-wrap drop-shadow-lg">
        <img
          src={profile}
          alt="Profile"
          className="bg-white rounded-full flex-none box-content h-auto w-32 m-3"
        />
        <div className="flex-1 flex flex-col">
          <h1 className="text-cyan-500 font-semibold  m-2">
            Fatima Abdullah Gubari
          </h1>
          <p className="text-white leading-loose m-3">
            Front-end developer, student, mobile developer, also having some
            knowledge about databases and the ability to use SQL. Studying in
            Lebanese International University in Yemen IT major ;also, studying
            Front-end developer in Re:coded front-end developer course.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
