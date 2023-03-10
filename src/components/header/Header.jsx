import React from 'react';
import "./_header.scss";
import back from "../../img/backgroundes/background1.jpg";

function Header() {
    return (
        <header className="header" style={{
            backgroundImage: `url(${back})`,
        }}>
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Olena</em></strong>
                    <br></br>I am a frontend developer
                </h1>
                <div className="header__text">
                    <p>with a desire for learning and creativity</p>
                </div>
                <a className="btn btn__hover" href="https://drive.google.com/file/d/1yfrwUVn4x4f7li7HJ2Ub0BXp1M90pfeW/view?usp=sharing">Download my CV</a>
            </div>
        </header>
    )
}

export { Header }
