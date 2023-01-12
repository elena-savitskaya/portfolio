import React from 'react';
import "./_footer.scss";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://github.com/elena-savitskaya"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://linkedin.com/in/elena-savitskaya-5a3582244"><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>&reg; {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer }