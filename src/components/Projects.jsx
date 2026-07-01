import { PencilIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import CubeIcon from "../assets/cube-icon.png"

function Projects() {

  return (
    <section className="flex flex-col gap-4 px-[clamp(1rem,15dvw,15%)] p-32 text-(--text-primary)">
        <h2 className="text-3xl">Projects</h2>

        <p className="text-(--text-secondary)">
          I'm a software developer with experience building web applications, designing systems, and creating integrations.
          I work across both frontend and backend, building applications from scratch and following the entire development process from architecture and implementation, to deployment. 
          I also enjoy connecting systems through APIs and automating workflows to make applications work together.
          I value clean, maintainable code and practical solutions, and I'm always looking for ways to improve how I design and build software.
        </p>

        <div className="flex border border-(--border-color) rounded ">
          
        </div>
    </section>
  )
}

export default Projects;
