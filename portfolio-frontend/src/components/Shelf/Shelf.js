import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Shelf.css';

function Shelf() {
    const [posts, setPosts] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';


    useEffect(() => {
        axios
            .get(`${API_URL}/api/posts`)
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    return (
        <section className="shelf">
            <motion.h2
                className="shelf-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Shelf
            </motion.h2>
            <motion.div
                className="shelf-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <motion.div
                            key={post.id}
                            className="shelf-post"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="shelf-post-title">{post.title}</h3>
                            <p className="shelf-post-date">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                            <p className="shelf-post-excerpt">{post.excerpt}</p>
                            <a
                                href={post.link}
                                className="shelf-post-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More
                            </a>
                        </motion.div>
                    ))
                ) : (
                    <p className="shelf-empty">No posts available yet.</p>
                )}
            </motion.div>
        </section>
    );
}

export default Shelf;