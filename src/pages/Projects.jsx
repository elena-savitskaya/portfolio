import { projectList } from "../components/project/projectList";
import { Project } from "../components/project/Project";

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projectList.map((project) => {
                        return (
                            <Project
                                key={project.title}
                                title={project.title}
                                skills={project.skills}
                                img={project.img}
                                link={project.gitHubLink}
                            />
                        )
                    })}

                </ul>
            </div >
        </main >
    );
}

export { Projects };