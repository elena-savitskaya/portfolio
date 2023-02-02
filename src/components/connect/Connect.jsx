import { Link } from "react-router-dom";
import "./_connect.scss"


const Connect = () => {
    return (
        <div className="connect">
            <div className="container">
                <h2 className="connect__title"><em>Get in touch with me if you have any questions about my work</em></h2>
                <Link to="/portfolio/contacts"><button className="connect__button">Contact me</button></Link>
            </div>
        </div>
    );
};

export { Connect };
