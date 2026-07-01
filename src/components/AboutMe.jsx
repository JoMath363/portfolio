import { PencilIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import CubeIcon from "../assets/cube-icon.png"

function AboutMe() {

  return (
    <section className="flex gap-[10%] bg-(--surface) px-[clamp(1rem,15dvw,15%)] p-16 text-(--text-primary)">
        <div className="flex-1 flex flex-col gap-4 py-8">
          <h2 className="text-3xl">About Me</h2>

          <p>
            I'm a software developer with experience building web applications, designing systems, and creating integrations.
            I work across both frontend and backend, building applications from scratch and following the entire development process from architecture and implementation, to deployment. 
            I also enjoy connecting systems through APIs and automating workflows to make applications work together.
            I value clean, maintainable code and practical solutions, and I'm always looking for ways to improve how I design and build software.
          </p>
        </div>

        <div className="flex-1 border border-(--border-color) rounded ">
          
        </div>
    </section>
  )
}

export default AboutMe;
