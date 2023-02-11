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
                <a className="btn btn__hover" href="https://drive.google.com/file/d/1zHQIxV8Ll4wqe_asJt9jFm0kalPKeD62/view?usp=sharing">Download my CV</a>
            </div>
        </header>
    )
}

export { Header }
