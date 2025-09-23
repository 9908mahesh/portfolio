import React from 'react';

const skills = ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Git", "MySQL", "PHP"];

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow-md">{skill}</span>
        ))}
      </div>
    </section>
  )
}

export default Skills;
