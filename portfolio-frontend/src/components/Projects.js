import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="projects"
        >
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="project-card"
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Projects;