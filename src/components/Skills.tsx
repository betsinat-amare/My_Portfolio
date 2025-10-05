import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { FaReact, FaHtml5, FaNodeJs, FaPython, FaGitAlt, FaFigma, FaGithub, FaNpm } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiExpress, SiMysql, SiPostman } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillIconMap: Record<string, React.ReactNode> = {
  'React': <FaReact color="#61dafb" />,
  'TypeScript': <SiTypescript color="#3178c6" />,
  'JavaScript': <SiJavascript color="#f7df1e" />,
  'HTML/CSS': <FaHtml5 color="#e34c26" />,
  'Next.js': <SiNextdotjs color="#fff" />,
  'Node.js': <FaNodeJs color="#3c873a" />,
  'Python': <FaPython color="#3776ab" />,
  'Express.js': <SiExpress color="#fff" />,
  'SQL': <SiMysql color="#00758f" />,
  'Git': <FaGitAlt color="#f34f29" />,
  'Figma': <FaFigma color="#a259ff" />,
  'VS Code': <VscCode color="#007acc" />,
  'Postman': <SiPostman color="#ff6c37" />,
  'GitHub': <FaGithub color="#fff" />,
  'npm': <FaNpm color="#cb3837" />,
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Next.js', level: 60 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Express.js', level: 75 },
        { name: 'SQL', level: 85 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Figma', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'npm', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {skillIconMap[skill.name]}
                        {skill.name}
                      </span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <h3 style={{
          color: '#f59e42',
          fontSize: '2rem',
          fontWeight: 800,
          textAlign: 'center',
          margin: '3rem 0 2rem 0',
          letterSpacing: '0.01em',
          textShadow: '0 2px 12px rgba(99,102,241,0.10)'
        }}>
          Educational Background & Certificates
        </h3>

        {/* Education Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', margin: '3rem 0 2.5rem 0', justifyContent: 'center' }}>
          {/* University Card */}
          <div style={{ background: '#23272f', borderRadius: 20, boxShadow: '0 4px 24px rgba(99,102,241,0.13)', padding: '2.5rem 2.5rem', minWidth: 320, maxWidth: 400, flex: 1 }}>
            <h3 style={{ color: '#f59e42', display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, fontSize: '1.35rem' }}>
              <img src="/AAU.png" alt="Addis Ababa University" style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(99,102,241,0.10)' }} /> Addis Ababa University
            </h3>
            <div style={{ color: '#f1f5f9', fontWeight: 500, fontSize: '1.1rem' }}>BSc in Software Engineering</div>
            <div style={{ color: '#a1a1aa', fontSize: '1.05rem', marginBottom: 12 }}>2023–Present</div>
            <div style={{ color: '#f1f5f9', fontSize: '1.05rem' }}>
              Astudent focused on building practical skills in software development, with a strong interest in modern technologies and real-world problem solving.
            </div>

          </div>
          {/* High School Card */}
          <div style={{ background: '#23272f', borderRadius: 20, boxShadow: '0 4px 24px rgba(99,102,241,0.13)', padding: '2.5rem 2.5rem', minWidth: 320, maxWidth: 400, flex: 1 }}>
            <h3 style={{ color: '#f59e42', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: '1.35rem' }}>
            <span role="img" aria-label="school">🏫</span> Excel Academy
            </h3>
            <div style={{ color: '#f1f5f9', fontWeight: 500, fontSize: '1.1rem' }}>Adama, Ethiopia</div>
            <div style={{ color: '#a1a1aa', fontSize: '1.05rem', marginBottom: 12 }}>2018–2022</div>
            <ul style={{ color: '#f1f5f9', fontSize: '1.05rem', margin: 0, paddingLeft: 18 }}>
              <li>Developed strong teamwork, creativity, and problem-solving skills</li>
            </ul>

          </div>
          
          {/* Current Courses Card */}
          <div style={{ background: '#23272f', borderRadius: 20, boxShadow: '0 4px 24px rgba(99,102,241,0.13)', padding: '2.5rem 2.5rem', minWidth: 320, maxWidth: 400, flex: 1 }}>
            <h3 style={{ color: '#f59e42', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: '1.35rem' }}>
            <span role="img" aria-label="books">📚</span> Self Paced Current Courses
            </h3>
            <ul style={{ color: '#f1f5f9', fontSize: '1.05rem', margin: 0, paddingLeft: 18 }}>
        
              <li>Artificial Intelligence with Python free online course offered by– <em>Harvard University (CS50)</em><br />
              </li>
            </ul>

          </div>
        </div>
        {/* Certificates Row */}
       
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2.5rem', marginBottom: '3rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'stretch' }}>
          {/* Udacity Certificate Card */}
          <div style={{ background: '#18181b', borderRadius: 24, boxShadow: '0 6px 32px rgba(0,0,0,0.15)', padding: '2.5rem', maxWidth: 700, minWidth: 320, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2.5rem', flex: 1 }}>
            <img src="/cert-udacity.jpg" alt="Udacity Certificate" style={{ width: 220, minWidth: 160, borderRadius: 16, marginBottom: 0, boxShadow: '0 2px 12px rgba(99,102,241,0.10)' }} />
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.35rem', marginBottom: 8 }}>Udacity</div>
              <div style={{ color: '#a1a1aa', fontSize: '1.13rem', marginBottom: 10 }}>Fundamentals of Programming & Frontend Development</div>
              <div style={{ color: '#6366f1', fontSize: '1.08rem' }}>Credentialed by Udacity, 2025</div>
            </div>
          </div>
          {/* SkillBridge Certificate Card */}
          <div style={{ background: '#18181b', borderRadius: 24, boxShadow: '0 6px 32px rgba(0,0,0,0.15)', padding: '2.5rem', maxWidth: 700, minWidth: 320, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2.5rem', flex: 1 }}>
            <img src="/cert-skillbridge.jpg" alt="SkillBridge Certificate" style={{ width: 220, minWidth: 160, borderRadius: 16, marginBottom: 0, boxShadow: '0 2px 12px rgba(99,102,241,0.10)' }} />
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.35rem', marginBottom: 8 }}>SkillBridge</div>
              <div style={{ color: '#a1a1aa', fontSize: '1.13rem', marginBottom: 10 }}>Data Structures & Algorithms Bootcamp</div>
              <div style={{ color: '#6366f1', fontSize: '1.08rem' }}>Issued by SkillBridge, 2025</div>
            </div>
          </div>
          {/* Oracle Certificate Card */}
          <div style={{ background: '#18181b', borderRadius: 24, boxShadow: '0 6px 32px rgba(0,0,0,0.15)', padding: '2.5rem', maxWidth: 700, minWidth: 320, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2.5rem', flex: 1 }}>
            <img src="/cert-skillbridge.jpg" alt="SkillBridge Certificate" style={{ width: 220, minWidth: 160, borderRadius: 16, marginBottom: 0, boxShadow: '0 2px 12px rgba(99,102,241,0.10)' }} />
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.35rem', marginBottom: 8 }}>Oracle University</div>
              <div style={{ color: '#a1a1aa', fontSize: '1.13rem', marginBottom: 10 }}>AI Foundations Associate Bootcamp</div>
              <div style={{ color: '#6366f1', fontSize: '1.08rem' }}>Issued by Oracle University, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 