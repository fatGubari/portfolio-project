import React from "react";
import SingleProject from "./SingleProject";

function Projects({ Project }) {
  return (
    <div className="flex flex-col items-center justify-evenly flex-wrap max-w-5xl m-8 bg-zinc-700" id="Project">
      <h1 className="text-white font-semibold m-3">My Projects</h1>

      <div className="flex flex-row flex-wrap items-center justify-evenly">
        {Project.map((oneProject) => (
          <SingleProject
            key={oneProject.id}
            name={oneProject.name}
            description={oneProject.description}
            image={oneProject.image}
            link={oneProject.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
