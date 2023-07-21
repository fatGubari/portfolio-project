import React from "react";
import { MdEmail } from "react-icons/md";
import { BsDiscord, BsGithub } from "react-icons/bs";

function Contact() {
  return (
    <div className="flex flex-col items-center bg-zinc-700 rounded-lg justify-evenly flex-wrap m-8" id="Contact">
      <h1 className="text-white font-semibold m-3">Contact Me</h1>
      <div className="flex flex-row flex-wrap">
        <a href="mailto:fatimajubary@gmail.com">
          <MdEmail className="h-8 w-8 hover:text-cyan-500 m-5" />
        </a>
        <a href="https://discord.com/">
          <BsDiscord className="h-8 w-8 hover:text-cyan-500 m-5" />
        </a>
        <a href="https://github.com/fatGubari">
          <BsGithub className="h-8 w-8 hover:text-cyan-500 m-5" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
