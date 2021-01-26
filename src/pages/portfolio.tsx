import Head from 'next/head';

import githubExplorerImg from '../assets/github_explorer.png';
import projectNetflixImg from '../assets/project_netflix.png';
import projectPokedexImg from '../assets/project_pokedex.png';
import ProjectCard from '../components/ProjectCard';
import { Container } from '../styles/pages/Portfolio';

const PROJECTS = [
	{
		name: 'Project Pokédex',
		imgSrc: projectPokedexImg,
		link: 'https://project-pokedex.vercel.app',
		techs: ['ReactJS', 'Node.js', 'MongoDB', 'PokéAPI'],
	},
	{
		name: 'Project Netflix',
		imgSrc: projectNetflixImg,
		link: 'https://project-netflix.herokuapp.com',
		techs: ['ReactJS', 'TypeScript', 'TMDb API'],
	},
	{
		name: 'github_explorer',
		imgSrc: githubExplorerImg,
		link: 'https://github-explorer-ts.vercel.app',
		techs: ['ReactJS', 'TypeScript', 'GitHub API'],
	},
];

const Portfolio: React.FC = () => {
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
