import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-6">Open to internships, collaborations, and opportunities in ML & Web Development.</p>
      <div className="flex justify-center gap-6 flex-wrap">
        <a href="mailto:maheshvasimalla333@gmail.com" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Email</a>
        <a href="https://github.com/9908mahesh" target="_blank" rel="noreferrer" className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/mahesh-v-a79b74374/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
