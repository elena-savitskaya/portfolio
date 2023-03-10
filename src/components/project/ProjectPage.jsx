import "./_project.scss"
import { NavLink, useParams } from "react-router-dom";
import { BtnGitHub } from "../btnGitHub/BtnGitHub";
import { projectList } from "./projectList"
import { FaArrowLeft } from "react-icons/fa"

const ProjectPage = () => {
    const { id } = useParams();
    const project = projectList[id];

    return (
        <main className="section">
            <div className="container">
                <NavLink to="/portfolio/projects" className="button__back btn__hover"><FaArrowLeft></FaArrowLeft>Go back</NavLink>
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <a href={project.gitHubLink}>
                        <div className="project-details__cover">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="project-details__img"
                            />
                        </div>
                    </a>
                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    {project.gitHubLink && (
                        <BtnGitHub link={project.repoLink} />
                    )}
                </div>
            </div>
        </main>
    );
}

export { ProjectPage };



