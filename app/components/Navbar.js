// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-amber-50 text-black p-4">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="#home">
          <span className="text-black text-xl font-semibold">Yahya Sheikh</span>
        </Link>
        <div className="ml-40 space-x-4">
          <Link href="#about">
            <span className="bg-gray-200 text-green-800 px-4 py-2 border-solid border-2  border-black rounded-full">About Me</span>
          </Link>
          <Link href="#projects">
            <span className="bg-gray-200 text-black px-4 py-2 border-solid border-2  border-black rounded-full">Projects</span>
          </Link> 
          <Link href="#work">
            <span className="bg-gray-200 text-black px-4 py-2 border-solid border-2 border-black rounded-full">Experience</span>
          </Link>
          <Link href="#skills">
            <span className="bg-gray-200 text-black px-4 py-2 border-solid border-2 border-black rounded-full">Skills</span>
          </Link>
          <Link  href="#contact">
            <span className="ml-40 bg-gray-200 text-green-800 px-4 py-2 border-solid border-2  border-black rounded-full">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
