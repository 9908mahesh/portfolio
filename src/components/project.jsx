import React from 'react';
import amazonImg from '../assets/amazon.png';
import arcImg from '../assets/arc.png';
import crackImg from '../assets/crack.png';

const projects = [
  {
    title: "Amazon Delivery Tracker",
    description: "ML & Data Visualization project tracking deliveries.",
    image: amazonImg,
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/9908mahesh/Amazon_delivery_track"
  },
  {
    title: "ARC - AI Research Companion",
    description: "Personal AI assistant for research and task automation.",
    image: arcImg,
    tech: ["Python", "HuggingFace", "Streamlit"],
    github: "https://github.com/9908mahesh/ARC"
  },
  {
    title: "Surface Crack Detection",
    description: "Deep Learning model for crack detection on surfaces.",
    image: crackImg,
    tech: ["TensorFlow", "OpenCV", "Python"],
    github: "https://github.com/9908mahesh/SurfaceCrackDetection"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img src={proj.image} alt={proj.title} className="h-48 w-full object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, i) => <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded">{t}</span>)}
              </div>
              <a href={proj.github} target="_blank" className="text-blue-600 font-semibold hover:underline">GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
