import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Passionate Developer & Creative Problem Solver</h3>
            <p>
              I'm Betsinat Amare, a full-stack developer and Software Engineering student at Addis Ababa University. 
              I specialize in building scalable, user-centric applications using modern web technologies.
            </p>
            <p>
              Beyond development, I actively sharpen my problem-solving skills through Data Structures and Algorithms (DSA), 
              regularly tackling coding challenges to improve my analytical thinking and coding efficiency. I'm passionate 
              about writing clean, maintainable code and continuously exploring new tools, frameworks, and best practices.
            </p>


            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              <img src="/about.jpg" alt="Betsinat Amare" className="about-photo" style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', maxHeight: '400px' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 