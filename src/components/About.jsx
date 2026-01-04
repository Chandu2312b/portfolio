import { motion } from 'framer-motion'
import { FaBrain, FaCode, FaCloud, FaMobileAlt } from 'react-icons/fa'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const experiences = [
    { icon: FaBrain, title: 'Machine Learning Intern', desc: 'Model building & data preprocessing' },
    { icon: FaCode, title: 'Full Stack Web Dev Intern', desc: 'Responsive MERN applications' },
    { icon: FaCloud, title: 'AWS Data Engineering Intern', desc: 'ETL pipelines & cloud data solutions' },
    { icon: FaMobileAlt, title: 'Android WebApp Intern (EduSkills)', desc: 'Mobile-friendly web apps' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants}>
              <h3>Career Objective</h3>
              <p>
                Motivated and skilled Computer Science undergraduate with hands-on experience in Full Stack Development,
                machine learning, and cloud data engineering. Seeking opportunities to leverage strong frontend skills
                and solid backend knowledge to build impactful, scalable solutions.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3>Education</h3>
              <div className="education-item">
                <h4>B.E., Computer Science</h4>
                <p>Vignan Institute of Information Technology, Vishakapatnam (2023 - 2026)</p>
                <span className="grade">CGPA: 8.6</span>
              </div>
              <div className="education-item">
                <h4>Diploma in Civil Engineering</h4>
                <p>Government Polytechnic College (2020 - 2023)</p>
                <span className="grade">Percentage: 76%</span>
              </div>
              <div className="education-item">
                <h4>Secondary Education</h4>
                <p>Bhashyam High School (2019 - 2020)</p>
                <span className="grade">Grade: 10/10 GPA</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="about-experience"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3>Internships</h3>
            <div className="experience-grid">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <motion.div
                    key={index}
                    className="experience-card"
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="experience-icon">
                      <Icon />
                    </div>
                    <h4>{exp.title}</h4>
                    <p>{exp.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

