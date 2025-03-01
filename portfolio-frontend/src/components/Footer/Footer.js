import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Footer.css';

function Footer() {
    const [profile, setProfile] = useState({
        twitter: '',
        github: '',
        linkedin: '',
        email: '',
    });
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';


    useEffect(() => {
        axios
            .get(`${API_URL}/api/profile`)
            .then((response) => setProfile(response.data))
            .catch((error) => console.error('Error fetching profile:', error));
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li className="footer-item">
                        <a
                            href={profile.twitter || 'https://x.com/akechsalim_'}
                            className="footer-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                    </li>
                    <li className="footer-item">
                        <a
                            href={profile.github || 'https://github.com/akechsalim'}
                            className="footer-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li className="footer-item">
                        <a
                            href={profile.linkedin || 'https://linkedin.com'}
                            className="footer-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li className="footer-item">
                        <a
                            href={`mailto:${profile.email || 'akechsalim@gmail.com.com'}`}
                            className="footer-link"
                        >
                            Email
                        </a>
                    </li>
                </ul>
                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} Akech Salim. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;