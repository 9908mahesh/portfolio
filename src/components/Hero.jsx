import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Mahesh Vasimalla</h1>
      <p className="text-xl mb-6">ML & Web Developer | AI Enthusiast | Problem Solver</p>
      <a href="#projects" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">View My Work</a>
    </section>
  )
}

export default Hero;
