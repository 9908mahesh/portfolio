import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-600">Mahesh V</div>
        <div className="space-x-6">
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
