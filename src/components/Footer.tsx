import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3 className="footer-title">Betsinat Amare</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating amazing digital experiences.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://github.com/betsinat-amare" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/betsinat-amare-23a4ab317/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="https://t.me/Coziyam" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegram size={20} /></a>
              <a href="https://leetcode.com/u/betsinat_amare/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><SiLeetcode size={20} /></a>
              <a href="https://codeforces.com/profile/Betsinat_Amare" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Codeforces"><FaCode size={20} /></a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Betsinat Amare. All rights reserved.</p>
          <p>Built with ❤️ using React & TypeScript</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 