import React from "react";
import { ImProfile } from "react-icons/im";
import { DiTechcrunch } from "react-icons/di";
import { AiFillProject } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-1/3 w-auto h-auto shadow-lg flex flex-col items-center justify-evenly flex-wrap bg-zinc-700 rounded">
      <a href="/" >
        <ImProfile className="text-white hover:text-cyan-500 h-6 w-6 m-2 rounded" />
      </a> 

      <a href="#Tech" >
        <DiTechcrunch className="text-white hover:text-cyan-500 h-10 w-10 m-2 rounded" />
      </a>

      <a href="#Project" >
        <AiFillProject className="text-white hover:text-cyan-500 h-7 w-7 m-2 rounded" />
      </a>

      <a href="#Contact" >
        <MdContactMail className="text-white hover:text-cyan-500 h-7 w-7 m-2 rounded" />
      </a>
    </div>
  );
}

export default Navbar;
