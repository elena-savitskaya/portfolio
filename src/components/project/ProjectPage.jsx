import "./_project.scss"
import { useParams } from "react-router-dom";
import { BtnGitHub } from "../btnGitHub/BtnGitHub";
import { projectList } from "./projectList"

const ProjectPage = () => {
    const { id } = useParams();
    const project = projectList[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <div className="project-details__cover">
                        <img
                            src={project.img}
                            alt={project.title}
                            className="project-details__img"
                        />
                    </div>
                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    {project.gitHubLink && (
                        <BtnGitHub link={project.gitHubLink} />
                    )}
                </div>
            </div>
        </main>
    );
}

export { ProjectPage };



