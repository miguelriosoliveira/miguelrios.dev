import { useColor } from 'color-thief-react';
import Image from 'next/image';

import { Container } from './styles';

interface Props {
	name: string;
	imgSrc: string;
	techs: string[];
	link: string;
}

export default function ProjectCard({ name, imgSrc, techs, link }: Props) {
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

			<div className="image-container">
				<Image src={imgSrc} alt={name} layout="fill" objectFit="contain" />
			</div>
		</Container>
	);
}
