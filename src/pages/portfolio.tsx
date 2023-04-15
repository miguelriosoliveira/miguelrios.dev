import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Octokit } from 'octokit';

import ProjectCard from '../components/ProjectCard';
import { Container } from '../styles/pages/Portfolio';
import { TECHS_MAP } from '../utils';

const PROJECTS = [
	{
		name: 'project-pokedex',
		displayName: 'Project Pokédex',
		imgSrc: '/assets/project_pokedex.png',
	},
	{
		name: 'project-netflix',
		displayName: 'Project Netflix',
		imgSrc: '/assets/project_netflix.png',
	},
	{
		name: 'github-explorer',
		displayName: 'github_explorer',
		imgSrc: '/assets/github_explorer.png',
	},
];

const { OCTOKIT_TOKEN } = process.env;
const ONE_HOUR_IN_SECONDS = 1 * 60 * 60;

interface Project {
	name: string;
	displayName: string;
	imgSrc: string;
	techs: string[];
	link: string;
}

interface Props {
	projects: Project[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const octokit = new Octokit({ auth: OCTOKIT_TOKEN });

	const repos = await Promise.all(
		PROJECTS.map(project =>
			octokit.rest.repos.get({ owner: 'miguelriosoliveira', repo: project.name }),
		),
	);

	const projects = repos.map(({ data }, index) => ({
		...PROJECTS[index],
		link: data.homepage,
		techs: data.topics.map(topic => TECHS_MAP[topic]),
	}));

	return {
		props: { projects },
		revalidate: ONE_HOUR_IN_SECONDS,
	};
};

const Portfolio: NextPage = ({ projects }: Props) => {
	return (
		<>
			<Head>
				<title>Miguel Rios - Portfolio</title>
			</Head>

			<Container>
				<ul>
					{projects.map(project => (
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
