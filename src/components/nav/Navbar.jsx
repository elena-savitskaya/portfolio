import React from 'react'
import "./_navbar.scss"
import { NavLink } from 'react-router-dom';
import { ButtonDarkMode } from '../buttonDarkMode/ButtonDarkMode';
import gsap from "gsap";

var tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'expo.inOut' } });

const openHandler = () => {
    if (tl.reversed()) {
        tl.play();
    } else {
        tl.to('.burger', { right: 0 })
            .to('.burger', { height: '100vh' }, '-=.1')
            .to('.burger ul li .link', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
            .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
    }
}

const closeHandler = () => {
    tl.reverse();
}

function Navbar() {

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/portfolio" className="logo">
                        <strong>Portfolio</strong>
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/portfolio" className="nav-list__link">Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/portfolio/projects" className="nav-list__link">Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/portfolio/contacts" className="nav-list__link">Contacts</NavLink>
                        </li>
                    </ul>
                    <ButtonDarkMode />
                    <div className="open"
                        onClick={() => openHandler()} >
                        <div className="bars"></div>
                    </div>
                    <div className="burger">
                        <div className="close"
                            onClick={() => closeHandler()} >
                            <div></div>
                        </div>
                        <ul>
                            <li><NavLink to="/portfolio" className="link" onClick={() => closeHandler()}>Home</NavLink></li>
                            <li><NavLink to="/portfolio/projects" className="link" onClick={() => closeHandler()}>Projects</NavLink></li>
                            <li><NavLink to="/portfolio/contacts" className="link" onClick={() => closeHandler()}>Contacts</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export { Navbar }