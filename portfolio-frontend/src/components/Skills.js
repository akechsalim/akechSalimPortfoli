import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/skills')
            .then(response => setSkills(response.data))
            .catch(error => console.error('Error fetching skills:', error));
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="skills"
        >
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="skill-card"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Skills;