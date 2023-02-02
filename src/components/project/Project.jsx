import { NavLink } from 'react-router-dom';
import "./_project.scss"

const Project = ({ title, img, index }) => {
	return (
		<NavLink to={`/portfolio/project/${index}`}>
			<li className="project">
				<div className='project__image'>
					<img src={img} alt={title} className="image" />
				</div>
				<h3 className="project__title">{title}</h3>
			</li>
		</NavLink>
	);
};

export { Project };
