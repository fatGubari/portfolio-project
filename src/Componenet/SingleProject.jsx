import React from "react";
// import GetBook from "../Images/GetBook.png";
// import Movfilx from "../Images/Movfilx.png";
// import Money_Tracker from "../Images/Money_Tracker.jpeg";
// import Jumanji_mad_libs from "../Images/Jumanji_mad_libs.png";
// import ActionCode from "../Images/ActionCode.png";
import { BsGithub } from "react-icons/bs";

function SingleProject({ name, description, image, link }) {
  return (
    <div className="flex flex-col rounded-lg items-center bg-zinc-800 justify-evenly flex-wrap w-64 m-3">
      <div>
        <img src={image} alt={image} className="rounded-lg w-64 h-48" />
      </div>
      <div className="flex flex-col items-center m-5">
        <a href={link}>
          <BsGithub className="h-8 w-8 hover:text-cyan-500 m-3" />
        </a>
        <h1 className="text-white font-semibold">{name}</h1>
        <h2 className="text-cyan-500 font-semibold">Techonolgies</h2>
        <h1 className="text-white">{description}</h1>
      </div>
    </div>
  );
}

export default SingleProject;
