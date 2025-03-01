import { motion } from 'framer-motion';

function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact"
        >
            <h2>Contact Me</h2>
            <p>Email: [your-email] | GitHub: [your-github]</p>
        </motion.section>
    );
}

export default Contact;