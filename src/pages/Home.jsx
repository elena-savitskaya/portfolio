import { useState } from "react";
import { Cert } from "../components/certificates/Cert";
import { Connect } from "../components/connect/Connect";
import { Header } from "../components/header/Header";
import { ModalContent } from "../components/modal/ModalContent";

const Home = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>HTML, CSS, SASS/SCSS</p>
                            <p>JavaScript, TypeScript, ReactJS, Redux, BootStrap, Material UI, Figma</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>NodeJS</p>
                        </li>
                    </ul>
                </div>
                <Connect active={active} setActive={setActive} />
                <Cert />
                <ModalContent active={active} setActive={setActive} />
            </main>
        </>
    );
}

export { Home };