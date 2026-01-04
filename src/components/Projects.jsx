import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Sociopedia',
      description: 'A full-stack social media platform built with MERN stack. Features user authentication, posts, likes, comments, friend system, and profile management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Material-UI'],
      github: 'https://github.com/Chandu2312b/Sociopedia-Social-Media-platform-',
      demo: 'https://sociopedia-social-media-platform-1.onrender.com',
      image: 'https://in.images.search.yahoo.com/search/images;_ylt=AwrKC_rDJlppWgIAobe7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=social+media+app+images&fr2=piv-web&type=E211IN714G0&fr=mcafee#id=110&iurl=https%3A%2F%2Fs3-alpha.figma.com%2Fhub%2Ffile%2F1769198965%2Fcb3715a0-77a8-4c15-a582-1a4b3c57bff9-cover.png&action=clickhttps://s3-alpha.figma.com/hub/file/1769198965/cb3715a0-77a8-4c15-a582-1a4b3c57bff9-cover.pnghttps://i.pinimg.com/originals/6b/1c/be/6b1cbe8abad01d1ad16267f54bf902f6.png',
    },
    {
      title: 'Food Delivery',
      description: 'Frontend application for a food delivery service with a user-friendly interface and modern design.',
      tech: ['React', 'CSS', 'Vite'],
      github: 'https://github.com/Chandu2312b/food-frontend',
      demo: 'https://food-app-frontend-fhb4.onrender.com/',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/bdcb7e107413647.5fa6736f912fd.png',
    },
    {
      title: 'Chat App',
      description: 'Real-time chat application with modern UI and backend functionality using Socket.io.',
      tech: ['JavaScript', 'Socket.io', 'React'],
      github: 'https://github.com/Chandu2312b/chat-app',
      demo: 'https://chat-app-tau-five-68.vercel.app/',
      image: 'https://img.freepik.com/premium-vector/chat-app-smartphone-messenger-communication-application-ui-templates-with-sign-messaging-contacts-screens-collection-mobile-interfaces-with-buttons-vector-phones-set_176516-3076.jpg?w=2000',
    },
    {
      title: 'Fake Account Detection',
      description: 'A machine learning project to detect fake accounts using data analysis and classification techniques.',
      tech: ['Python', 'Machine Learning', 'Data Science'],
      github: 'https://github.com/Chandu2312b/FakeAccountDetection',
      demo: null,
      image: 'https://gologin.com/wp-content/uploads/Frame-122-1-1.png',
    },
    {
      title: 'Sankalpam',
      description: 'A comprehensive web platform built with modern technologies for innovative solutions and services.',
      tech: ['React', 'Node.js', 'Modern Web'],
      github: 'https://github.com/sankalpam-tech/sankalpam',
      demo: 'https://www.sankalpam.world',
      image: 'https://tse4.mm.bing.net/th/id/OIP.33m0sDLIJ4fcwiCTjByF9AHaHb?pid=Api&P=0&h=180',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub /> View Code
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn github-btn"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> GitHub Repo
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn demo-btn"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

