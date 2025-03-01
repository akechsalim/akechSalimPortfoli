import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
    const [profile, setProfile] = useState({ name: '', tagline: '' });

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/profile')
            .then((response) => setProfile(response.data))
            .catch((error) => console.error('Error fetching profile:', error));
    }, []);

    return (
        <motion.section
            className="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <h1 className="home-name">{profile.name || 'Akech Salim'}</h1>
            <p className="home-tagline">{profile.tagline || 'Java & React Developer'}</p>
        </motion.section>
    );
}

export default Home;