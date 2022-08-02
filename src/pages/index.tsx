import { NextPage } from 'next';
import { useEffect } from 'react';
import {
	FaLinkedin,
	FaGithub,
	FaStackOverflow,
	FaInstagram,
	FaTwitter,
	FaEnvelope,
} from 'react-icons/fa';
import Typed from 'typed.js';

import IconLink from '../components/IconLink';
import { Container } from '../styles/pages/Home';

const ROLES = [
	'developer 👨‍💻',
	'dependent on inspiration 👓',
	'gaming enthusiast 🎮',
	'code maker 💻',
	'coffee lover ☕',
];

const LINKS = [
	{ icon: FaLinkedin, to: 'https://www.linkedin.com/in/miguelriosoliveira/?locale=en_US' },
	{ icon: FaGithub, to: 'https://github.com/miguelriosoliveira' },
	{ icon: FaStackOverflow, to: 'https://stackoverflow.com/users/4916416/miguel-rios' },
	{ icon: FaInstagram, to: 'https://www.instagram.com/miguelrisos' },
	{ icon: FaTwitter, to: 'https://twitter.com/MiguelRisos' },
	{ icon: FaEnvelope, to: 'mailto:miguelriosoliveira@gmail.com?subject=👨‍💻 Professional Contact' },
];

const Home: NextPage = () => {
	let typedElement = null;

	useEffect(() => {
		const typed = new Typed(typedElement, {
			strings: ROLES,
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, [typedElement]);

	return (
		<Container>
			<section className="languages">
				{/* <a href="#">ENG</a> */}
				{/* <a href="#">PTBR</a> */}
			</section>

			<section className="name-and-roles">
				<h1>Miguel Rios</h1>
				<h2>
					<span>I&apos;m a </span>
					<span
						ref={element_ => {
							typedElement = element_;
						}}
					/>
				</h2>
			</section>

			<section className="social-media">
				{LINKS.map(({ icon, to }) => (
					<IconLink key={to} icon={icon} to={to} />
				))}
			</section>
		</Container>
	);
};

export default Home;
