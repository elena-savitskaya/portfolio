import gitHubIcon from './gitHub-black.svg';
import "./_btnGitHub.scss"

const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline btn__hover">
			<img src={gitHubIcon} alt="img" />
			This project on GitHub
		</a>
	);
};

export { BtnGitHub };