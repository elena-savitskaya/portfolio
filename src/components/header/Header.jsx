import React from 'react';
import "./_header.scss";

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Olena</em></strong>
                    <br></br>I am a frontend developer
                </h1>
                <div className="header__text">
                    <p>with a desire for learning and creativity</p>
                </div>
                <a href="#!" className="btn">Download my CV</a>
            </div>
        </header>
    )
}

export { Header }