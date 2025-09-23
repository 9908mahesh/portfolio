// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Mahesh Vasimalla. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0 text-lg">
          <a 
            href="https://github.com/9908mahesh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/mahesh-v-a79b74374/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:maheshvasimalla333@gmail.com" 
            className="hover:text-white transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
