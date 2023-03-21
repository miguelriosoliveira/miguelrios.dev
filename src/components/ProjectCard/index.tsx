import ColorThief from 'colorthief';
import Image from 'next/image';
import { createRef, useState } from 'react';

import { Container } from './styles';

interface Props {
	name: string;
	imgSrc: string;
	techs: string[];
	link: string;
}

export default function ProjectCard({ name, imgSrc, techs, link }: Props) {
	const [dominantColor, setDominantColor] = useState('');
	const imgRef = createRef<HTMLImageElement>();

	async function handleLoad() {
		const colorThief = new ColorThief();
		const [r, g, b] = await colorThief.getColor(imgRef.current, 100);
		setDominantColor(`rgb(${r}, ${g}, ${b})`);
	}

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
				<Image
					ref={imgRef}
					src={imgSrc}
					alt={name}
					layout="fill"
					objectFit="contain"
					onLoad={handleLoad}
				/>
			</div>
		</Container>
	);
}
