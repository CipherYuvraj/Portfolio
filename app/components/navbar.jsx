// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="neon-text text-3xl font-bold hover:animate-pulse transition-all duration-300 hover:scale-110">
            Yuvraj Udaywal
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline group" href="/#about">
              <div className="text-sm text-white transition-all duration-300 hover:text-neon-blue group-hover:animate-neon-pulse cyber-button rounded-lg px-3 py-1">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline group" href="/#experience">
              <div className="text-sm text-white transition-all duration-300 hover:text-neon-purple group-hover:animate-neon-pulse cyber-button rounded-lg px-3 py-1">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline group" href="/#skills">
              <div className="text-sm text-white transition-all duration-300 hover:text-neon-pink group-hover:animate-neon-pulse cyber-button rounded-lg px-3 py-1">
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline group" href="/#education">
              <div className="text-sm text-white transition-all duration-300 hover:text-neon-green group-hover:animate-neon-pulse cyber-button rounded-lg px-3 py-1">
                EDUCATION
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline group" href="/blog">
              <div className="text-sm text-white transition-all duration-300 hover:text-electric group-hover:animate-neon-pulse cyber-button rounded-lg px-3 py-1">
                BLOGS
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline group" href="/#projects">
              <div className="text-sm text-white transition-all duration-300 hover:text-plasma group-hover:animate-neon-pulse cyber-button rounded-lg px-3 py-1">
                PROJECTS
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-30"></div>
    </nav>
  );
};

export default Navbar;