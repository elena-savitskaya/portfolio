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
                <a className="btn btn__hover" href="https://drive.google.com/file/d/1pJ1YkHow1FA4G6skDMUudr6m5vu24rGx/view?usp=sharing" >Download my CV</a>
            </div>
        </header>
    )
}

export { Header }
