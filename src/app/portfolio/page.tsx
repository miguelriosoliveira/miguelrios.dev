import { ProjectCard } from '@/components';
import { githubApi } from '@/services';
import { TECHS_MAP } from '@/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Portfolio',
};

export const revalidate = 60;

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

export default async function Portfolio() {
	let projects;
	try {
		const repos = await Promise.all(
			PROJECTS.map(project => githubApi.getRepoDetails('miguelriosoliveira', project.name)),
		);
		projects = repos.map((repo, index) => ({
			...PROJECTS[index],
			link: repo.homepage,
			techs: repo.topics.map(topic => TECHS_MAP[topic]),
		}));
	} catch (error) {
		projects = PROJECTS.map((project, index) => ({
			...PROJECTS[index],
			link: `https://github.com/miguelriosoliveira/${project.name}`,
			techs: [],
		}));
	}

	return (
		<main className="flex justify-center py-4 px-0">
			<ul className="w-full flex-1 list-none md:grid md:grid-cols-2 md:gap-5">
				{projects.map(project => (
					<li key={project.name} className="h-96 xs:h-48 mt-2 md:mt-0">
						<ProjectCard {...project} />
					</li>
				))}
			</ul>
		</main>
	);
}
