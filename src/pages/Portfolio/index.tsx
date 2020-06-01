import React from 'react';
import { uuid } from 'uuidv4';

import netflixFavorites from '../../assets/netflix-favorites.png';
import netflixHome from '../../assets/netflix-home.png';
import pokedexGeneration from '../../assets/pokedex-generation.png';
import pokedexHome from '../../assets/pokedex-home.png';

import { Ul } from './styles';

const projects = [
	{
		title: 'Pokédex',
		screenshots: [
			{ id: uuid(), src: pokedexHome, alt: 'Pokédex home' },
			{ id: uuid(), src: pokedexGeneration, alt: 'Pokédex generation' },
		],
	},
	{
		title: 'github_explorer',
		screenshots: [
			{ id: uuid(), src: pokedexHome, alt: 'Pokédex home' },
			{ id: uuid(), src: pokedexGeneration, alt: 'Pokédex generation' },
		],
	},
	{
		title: 'Netflix clone',
		screenshots: [
			{ id: uuid(), src: netflixHome, alt: 'Netflix clone home home' },
			{ id: uuid(), src: netflixFavorites, alt: 'Netflix clone favorites generation' },
		],
	},
	{
		title: 'GoFinances',
		screenshots: [
			{ id: uuid(), src: pokedexHome, alt: 'Pokédex home' },
			{ id: uuid(), src: pokedexGeneration, alt: 'Pokédex generation' },
		],
	},
	{
		title: 'GoFinances',
		screenshots: [
			{ id: uuid(), src: pokedexHome, alt: 'Pokédex home' },
			{ id: uuid(), src: pokedexGeneration, alt: 'Pokédex generation' },
		],
	},
	{
		title: 'GoFinances',
		screenshots: [
			{ id: uuid(), src: pokedexHome, alt: 'Pokédex home' },
			{ id: uuid(), src: pokedexGeneration, alt: 'Pokédex generation' },
		],
	},
	{
		title: 'GoFinances',
		screenshots: [
			{ id: uuid(), src: pokedexHome, alt: 'Pokédex home' },
			{ id: uuid(), src: pokedexGeneration, alt: 'Pokédex generation' },
		],
	},
	{
		title: 'GoFinances',
		screenshots: [
			{ id: uuid(), src: pokedexHome, alt: 'Pokédex home' },
			{ id: uuid(), src: pokedexGeneration, alt: 'Pokédex generation' },
		],
	},
	{
		title: 'GoFinances',
		screenshots: [
			{ id: uuid(), src: pokedexHome, alt: 'Pokédex home' },
			{ id: uuid(), src: pokedexGeneration, alt: 'Pokédex generation' },
		],
	},
	{
		title: 'GoFinances',
		screenshots: [
			{ id: uuid(), src: pokedexHome, alt: 'Pokédex home' },
			{ id: uuid(), src: pokedexGeneration, alt: 'Pokédex generation' },
		],
	},
	{
		title: 'GoFinances',
		screenshots: [
			{ id: uuid(), src: pokedexHome, alt: 'Pokédex home' },
			{ id: uuid(), src: pokedexGeneration, alt: 'Pokédex generation' },
		],
	},
];

const Portfolio: React.FC = () => {
	return (
		<Ul>
			{projects.map(({ title, screenshots }) => (
				<li key={title}>
					{title}
					{screenshots.map(({ id, src, alt }) => (
						<img key={id} src={src} alt={alt} />
					))}
				</li>
			))}
		</Ul>
	);
};

export default Portfolio;
