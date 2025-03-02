import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Work.css';

function Work() {
    const [projects, setProjects] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';


    useEffect(() => {
        axios
            .get(`${API_URL}/api/projects`)
            .then((response) => setProjects(response.data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return (
        <section className="work">
            <motion.h2
                className="work-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Work
            </motion.h2>
            <motion.div
                className="work-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="work-card"
                            whileHover={{ scale: 1.05, rotate: 1, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="work-card-image"
                            />
                            <div className="work-card-content">
                                <h3 className="work-card-title">{project.title}</h3>
                                <p className="work-card-description">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="work-card-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p className="work-empty">No projects available yet.</p>
                )}
            </motion.div>
        </section>
    );
}

export default Work;