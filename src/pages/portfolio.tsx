import { NextPage } from 'next';
import Head from 'next/head';

import ProjectCard from '../components/ProjectCard';
import { Container } from '../styles/pages/Portfolio';

const PROJECTS = [
	{
		name: 'Project Pokédex',
		imgSrc: '/assets/project_pokedex.png',
		link: 'https://project-pokedex.vercel.app',
		techs: ['ReactJS', 'Node.js', 'MongoDB', 'PokéAPI'],
	},
	{
		name: 'Project Netflix',
		imgSrc: '/assets/project_netflix.png',
		link: 'https://project-netflix.vercel.app',
		techs: ['Next.js', 'TypeScript', 'TMDb API'],
	},
	{
		name: 'github_explorer',
		imgSrc: '/assets/github_explorer.png',
		link: 'https://github-explorer-ts.vercel.app',
		techs: ['Next.js', 'TypeScript', 'GitHub API'],
	},
];

const Portfolio: NextPage = () => {
	return (
		<>
			<Head>
				<title>Miguel Rios - Portfolio</title>
			</Head>

			<Container>
				<ul>
					{PROJECTS.map(project => (
						<li key={project.name}>
							<ProjectCard {...project} />
						</li>
					))}
				</ul>
			</Container>
		</>
	);
};

export default Portfolio;
