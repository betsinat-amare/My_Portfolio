import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Course Add and Drop App',
      description: 'A Flutter application for university students to add and drop courses, featuring a backend and modern UI.',
      technologies: ['Flutter', 'Dart', 'Node.js', 'TypeScript'],
      image: '/course.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/betsinat-amare/Course_add_and_drop_app_flutter'
    },
    {
      id: 2,
      title: 'Cross Country Bus Transport Service',
      description: 'A web application for managing and booking cross-country bus transport services, built with TypeScript, Node.js, and modern web technologies.',
      technologies: ['TypeScript', 'Node.js', 'JavaScript', 'CSS', 'HTML'],
      image: '/bus.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/betsinat-amare/Cross_country_bus_transport_service_2024_25'
    },
    {
      id: 3,
      title: 'Building Evacuation Simulator',
      description: 'A simulator for modeling and visualizing building evacuations, built with JavaScript and TypeScript.',
      technologies: ['JavaScript', 'TypeScript'],
      image: '/graphics.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/betsinat-amare/Building_Evacuation_Simulator'
    },
    {
      id: 4,
      title: 'CMMS (Computerized Maintenance Management System)',
      description: 'A web-based system for managing maintenance operations, built with React, TypeScript, and modern web technologies.',
      technologies: ['React', 'TypeScript', 'CSS', 'HTML'],
      image: '🛠️',
      liveUrl: '#',
      githubUrl: 'https://github.com/betsinat-amare/CMMS'
    },
    {
      id: 5,
      title: 'Woreda Management System',
      description: 'A management system for local government (woreda) administration, built primarily with Python and web technologies.',
      technologies: ['Python', 'JavaScript', 'CSS', 'HTML'],
      image: '/woreda.png',
      liveUrl: '#',
      githubUrl: 'https://github.com/deve1070/woreda_managment_system'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                {typeof project.image === 'string' && project.image.startsWith('/') ? (
                  <img src={project.image} alt={project.title} className="project-img" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px' }} />
                ) : (
                  <span className="project-emoji">{project.image}</span>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link live">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="project-link github">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 