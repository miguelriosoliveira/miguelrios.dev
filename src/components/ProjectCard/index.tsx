import { useColor } from 'color-thief-react';

import { Container } from './styles';

interface Props {
	name: string;
	imgSrc: string;
	techs: string[];
	link: string;
}

const ProjectCard: React.FC<Props> = ({ name, imgSrc, techs, link }) => {
	const { data: dominantColor } = useColor(imgSrc, 'hex', {
		crossOrigin: 'Anonymous',
		quality: 100,
	});

	return (
		<Container href={link} target="_blank" rel="noopener noreferrer" dominantColor={dominantColor}>
			<header>
				<h2>{name}</h2>

				<div className="techs">
					{techs.map(tech => (
						<p key={tech}>{tech}</p>
					))}
				</div>
			</header>

			<img src={imgSrc} alt={name} />
		</Container>
	);
};

export default ProjectCard;
