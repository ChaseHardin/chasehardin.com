import React from 'react';
import { Link } from 'react-router-dom'
import './menu-component.css';

export default function Menu() {
    return (
        <ul className="menu nav navbar navbar-dark bg-dark justify-content-center">
            <li className="nav-item">
                <Link to='/'>
                    <span className="nav-link">Home</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/blog'>
                    <span className="nav-link">Blog</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/tutorials'>
                    <span className="nav-link">Tutorials</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/contact'>
                    <span className="nav-link">Contact</span>
                </Link>
            </li>
        </ul>
    );
}