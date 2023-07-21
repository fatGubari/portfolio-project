import React from "react";
import C from "../Images/C.png";
import {
  BsFiletypeJava,
  BsFiletypeCss,
  BsAndroid2,
  BsGit,
  BsGithub,
  BsFiletypeXml,
} from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandPhp } from "react-icons/tb";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { AiOutlineConsoleSql } from "react-icons/ai";

function TechSlider() {
  return (
      <div className="flex flex-row items-center justify-evenly flex-wrap">
        <img
          src={C}
          alt="C"
          className="bg-white rounded-lg box-content h-20 w-20 m-3"
        />
        <BsFiletypeJava className="bg-white rounded-lg box-content h-20 w-20 m-3" />
        <IoLogoJavascript className="bg-white rounded-lg box-content h-20 w-20 m-3" />
        <TbBrandPhp className="bg-white rounded-lg box-content h-20 w-20 m-3" />

        <SiReact className="bg-white rounded-lg box-content h-20 w-20 m-3" />
        <TiHtml5 className="bg-white rounded-lg box-content h-20 w-20 m-3" />
        <BsFiletypeCss className="bg-white rounded-lg box-content h-20 w-20 m-3" />
        <SiTailwindcss className="bg-white rounded-lg box-content h-20 w-20 m-3" />
        <AiOutlineConsoleSql className="bg-white rounded-lg box-content h-20 w-20 m-3" />
        <BsAndroid2 className="bg-white rounded-lg box-content h-20 w-20 m-3" />
        <BsGit className="bg-white rounded-lg box-content h-20 w-20 m-3" />
        <BsGithub className="bg-white rounded-lg box-content h-20 w-20 m-3" />
        <BsFiletypeXml className="bg-white rounded-lg box-content h-20 w-20 m-3" />
      </div>
  );
}

export default TechSlider;
