'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { getAverageColorFromImage } from '@/utils';

interface Props {
	displayName: string;
	imgSrc: string;
	techs: string[];
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
					{techs.map(tech => (
						<p key={tech} className="text-xs bg-gray-500 text-gray-300 rounded-md py-1 px-2">
							{tech}
						</p>
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
