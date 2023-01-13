import "./_project.scss"

const Project = ({ title, skills, link, img }) => {
    return (
        <li className="project">
            <a className="project__link"
                href={link} target="_blank" rel="noreferrer">
                <img
                    src={img}
                    alt={title}
                    className="project__img" />
            </a>
            <h3 className="project__title">{title}</h3>
            <p className="project__text">{skills}</p>
        </li>
    );
};

export { Project };