import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import avatar from '../../assets/IMG_03051.JPG'; // Adjust path based on your setup
import './Home.css';

function Home() {
    const [profile, setProfile] = useState({ name: '', tagline: '' });
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

    // Your skills list
    const skills = [
        'Java (Spring, Spring Boot)',
        'JavaScript (React)',
        'QA Testing',
        'Docker',
        'Kubernetes (K8s)',
        'SQL',
        'Unix',
        'Git & GitHub',
        'AWS',
    ];

    useEffect(() => {
        axios
            .get(`${API_URL}/api/profile`)
            .then((response) => setProfile(response.data))
            .catch((error) => console.error('Error fetching profile:', error));
    }, []);

    return (
        <motion.section
            className="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <div className="home-content">
                <motion.img
                    src={avatar}
                    alt="Akech Salim"
                    className="home-avatar"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                />
                <motion.h1
                    className="home-name"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {profile.name || 'Akech Salim'}
                </motion.h1>
                <motion.p
                    className="home-tagline"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {profile.tagline || 'Java & React Developer'}
                </motion.p>
                <motion.div
                    className="home-skills"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    {skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            className="home-skill"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Home;