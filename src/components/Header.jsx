import { Code } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="flex justify-between items-center px-[clamp(2rem,15dvw,15%)] h-16 text-(--text-primary)">
      <div>
        <Code size={28} color="var(--text-primary)"/>
      </div>

      <nav className="flex border border-(--border-color) rounded overflow-hidden">
        <Link to="" className="px-4 py-1 hover:bg-(--surface)">
          About Me
        </Link>
        <Link to="" className="px-4 py-1 hover:bg-(--surface)">
          Projects
        </Link>
        <Link to="" className="px-4 py-1 hover:bg-(--surface)">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header;
