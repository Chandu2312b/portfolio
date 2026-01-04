import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p>&copy; 2026 Bheesetty Eswara Venkata Sai Chandu. All rights reserved.</p>
    </motion.footer>
  )
}

export default Footer

