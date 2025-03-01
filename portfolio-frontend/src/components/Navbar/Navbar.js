import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink
                        to="/work"
                        className={({ isActive }) =>
                            isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
                        }
                    >
                        Work
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink
                        to="/shelf"
                        className={({ isActive }) =>
                            isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
                        }
                    >
                        Shelf
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;