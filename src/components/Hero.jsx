import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode, FaCodeBranch, FaPhone  } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa';
import './Hero.css'




const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: 'easeOut',
      },
    },
  }

 const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/Chandu2312b', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/chandu-bheesetty-80a539289/', label: 'LinkedIn' },
  { icon: FaCode, url: 'https://www.codechef.com/users/bchandu2385', label: 'CodeChef' },
  { icon: FaCodeBranch, url: 'https://leetcode.com/u/chandu238/', label: 'LeetCode' },

  // 📧 Email
  { icon: FaEnvelope, url: 'mailto:bchandu2385@gmail.com', label: 'Email' },
];


  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (



    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="highlight">Chandu</span>
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            Full Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={itemVariants}>
            Motivated Computer Science undergraduate with hands-on experience in Full Stack Development,
            and machine learning. Building impactful, scalable solutions.
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('projects')
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('contact')
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
          <motion.div className="hero-social" variants={itemVariants}>
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20, rotate: -180 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <Icon />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="profile-card"
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-avatar">
              <div className="avatar-placeholder">
                <span>C</span>
              </div>
            </div>
            <div className="profile-info">
              <h3>BHEESETTY ESWARA VENKATA SAI CHANDU</h3>
              <p>Full Stack Developer</p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">14</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Internships</span>
                </div>
                <div className="stat">
                  <span className="stat-number">8.6</span>
                  <span className="stat-label">CGPA</span>
                </div>
              </div>

              <div className="contact-info">
  <p>
    <FaEnvelope className="contact-icon" />
    <a href="mailto:bchandu2385@gmail.com">
      bchandu2385@gmail.com
    </a>
  </p>

  <p>
    <FaPhone className="contact-icon" />
    <a href="tel:8341633696">
      +91 83416 33696
    </a>
  </p>
</div>
              <motion.a
  href="/chandu_resume.pdf"
  className="btn btn-primary resume-btn"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  View Resume
</motion.a>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

