import { Code } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <>
      <header className="flex justify-between items-center px-16 py-4 text-(--text-primary)">
        <div>
          <Code size={28} color="var(--text-primary)"/>
        </div>

        <nav className="flex border border-(--border-color) rounded overflow-hidden">
          <Link className="px-4 py-1 hover:bg-(--surface)">
            About Me
          </Link>
          <Link className="px-4 py-1 hover:bg-(--surface)">
            Projects
          </Link>
          <Link className="px-4 py-1 hover:bg-(--surface)">
            Contact
          </Link>
        </nav>
      </header>

      <main>
        <section className="px-16 py-32 text-(--text-primary)">
            <h1 className="text-5xl">
              FULL-STACK DEVELOPER
            </h1>
            <h1 className="text-3xl">
              José Mathias
            </h1>
        </section>
      </main>
    </>
  )
}

export default Home
