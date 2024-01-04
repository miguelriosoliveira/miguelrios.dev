'use client';

import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import { getAverageColorFromImage } from '@/utils';

interface Tech {
	slug: string;
	displayName: string;
}

interface Props {
	displayName: string;
	imgSrc: string;
	techs: Tech[];
	link: string;
}

export function ProjectCard({ displayName, imgSrc, techs, link }: Props) {
	const [dominantColor, setDominantColor] = useState('');
	const imgRef = useRef<HTMLImageElement>(null);

	async function handleLoad() {
		if (!imgRef.current) {
			return;
		}
		const [r, g, b] = getAverageColorFromImage(imgRef.current);
		setDominantColor(`rgb(${r}, ${g}, ${b})`);
	}

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="flex flex-col items-center rounded-2xl overflow-hidden h-full"
			style={{ backgroundColor: dominantColor }}
		>
			<header className="w-full justify-between pt-4 px-5 pb-0">
				<h2 className="font-normal text-2xl mr-3 invert" style={{ color: dominantColor }}>
					{displayName}
				</h2>

				<div className="flex flex-wrap gap-1">
					{techs.map(({ slug, displayName }) => (
						<Image
							key={slug}
							alt="Static Badge"
							src={`https://img.shields.io/badge/${displayName}-gray?style=flat&logo=${slug}`}
						/>
					))}
				</div>
			</header>

			<div className="relative w-full h-full rotate-12 translate-x-[15%] translate-y-1/4">
				<Image
					fill
					ref={imgRef}
					src={imgSrc}
					alt={displayName}
					onLoad={handleLoad}
					className="object-contain"
				/>
			</div>
		</a>
	);
}
