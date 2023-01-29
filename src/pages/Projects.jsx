import { projectList } from "../components/project/projectList";
import { Project } from "../components/project/Project";

const Projects = () => {

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projectList.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                title={project.title}
                                img={project.img}
                                index={index}
                            />
                        )
                    })}
                </ul>
            </div>
        </main>
    );
}

export { Projects };