import React from 'react';
import './menu-component.css';

export default function Menu() {
    return (
        <ul className="menu nav navbar navbar-dark bg-dark justify-content-center">
            <li name='home' className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li name='blog' className="nav-item">
                <a className="nav-link" href="#">Blog</a>
            </li>
            <li name='tutorials' className="nav-item">
                <a className="nav-link" href="#">Tutorials</a>
            </li>
            <li name='contact' className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
    );
}