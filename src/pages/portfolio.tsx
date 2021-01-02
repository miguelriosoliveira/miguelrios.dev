import Head from 'next/head';

import projectNetflixImg from '../assets/project_netflix.png';
import reactdexImg from '../assets/reactdex.png';
import ProjectCard from '../components/ProjectCard';
import { Container } from '../styles/pages/Portfolio';

const Portfolio: React.FC = () => {
	return (
		<>
			<Head>
				<title>Miguel Rios - Portfolio</title>
			</Head>

			<Container>
				<ul>
					<li>
						<ProjectCard
							name="Reactdex"
							imgSrc={reactdexImg}
							link="http://www.reactdex.com/"
							techs={['ReactJS', 'Node.js', 'MongoDB', 'PokéAPI']}
						/>
					</li>

					<li>
						<ProjectCard
							name="Project Netflix"
							imgSrc={projectNetflixImg}
							link="https://project-netflix.herokuapp.com/"
							techs={['ReactJS', 'TypeScript', 'TMDb API']}
						/>
					</li>

					{/* <li>
						<ProjectCard
							name="github_explorer"
							imgSrc={githubExplorerImg}
							link="https://project-netflix.herokuapp.com/"
							techs={['ReactJS', 'The Movie Database API']}
						/>
					</li> */}
				</ul>
			</Container>
		</>
	);
};

export default Portfolio;
