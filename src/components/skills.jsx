import React from 'react';

const skills = {
  "Programming": ["Python", "C", "C++"],
  "Machine Learning / AI": [
    "TensorFlow", 
    "Keras", 
    "Scikit-learn", 
    "OpenCV", 
    "NLP", 
    "GANs", 
    "Deep Learning (CNNs, DNNs)"
  ],
  "Web Development": [
    "React", 
    "Tailwind CSS", 
    "HTML", 
    "CSS", 
    "JavaScript", 
    "PHP", 
    "MySQL"
  ],
  "Tools & Platforms": [
    "Git", 
    "VS Code", 
    "MS Office", 
    "Vercel/Netlify (Deployment)", 
    "MLflow"
  ],
  "Soft Skills": [
    "Teamwork", 
    "Communication", 
    "Quick Learner", 
    "Problem Solving", 
    "Detail-Oriented"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow-md">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Skills;
