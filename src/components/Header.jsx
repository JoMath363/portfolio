import { Code } from "@phosphor-icons/react";

function Header({ redirectTo }) {

  return (
    <header className="fixed flex bg-(--bg) justify-between items-center px-[clamp(2rem,15dvw,15%)] h-16  w-full text-(--text-primary) ">
      <div>
        <Code size={28} color="var(--text-primary)"/>
      </div>

      <nav className="flex border border-(--border-color) rounded overflow-hidden">
        <a onClick={redirectTo.hero} className="px-4 py-1 hover:bg-(--surface) cursor-pointer">
          José Mathias
        </a>
        <a onClick={redirectTo.aboutMe} className="px-4 py-1 hover:bg-(--surface) cursor-pointer">
          About Me
        </a>
        <a onClick={redirectTo.projects} className="px-4 py-1 hover:bg-(--surface) cursor-pointer">
          Projects
        </a>
        <a onClick={redirectTo.contact} className="px-4 py-1 hover:bg-(--surface) cursor-pointer">
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header;
