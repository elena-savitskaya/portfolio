import "./_connect.scss"

const Connect = ({ setActive }) => {
    return (
        <div className="connect">
            <div className="container">
                <h2 className="connect__title"><em>Get in touch with me if you have any questions about my work</em></h2>
                <button onClick={() => setActive(true)} className="btn btn__hover">Contact me</button>
            </div>
        </div>
    );
};

export { Connect };
