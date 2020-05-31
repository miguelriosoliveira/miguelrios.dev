import React, { Fragment } from 'react';
import {
	FaLinkedin,
	FaGithub,
	FaStackOverflow,
	FaInstagram,
	FaTwitter,
	FaEnvelope,
} from 'react-icons/fa';
import Typing from 'react-typing-animation';

import IconLink from '../../components/IconLink';

import { Main } from './styles';

const roles = [
	'developer 👨‍💻',
	'dependent on inspiration 👓',
	'gaming enthusiast 🎮',
	'code maker 💻',
	'coffee lover ☕',
];

const links = [
	{ icon: FaLinkedin, to: 'https://www.linkedin.com/in/miguelriosoliveira/?locale=en_US' },
	{ icon: FaGithub, to: 'https://github.com/miguelriosoliveira' },
	{ icon: FaStackOverflow, to: 'https://stackoverflow.com/users/4916416/miguel-rios' },
	{ icon: FaInstagram, to: 'https://www.instagram.com/miguelrisos' },
	{ icon: FaTwitter, to: 'https://twitter.com/MiguelRisos' },
	{ icon: FaEnvelope, to: 'mailto:miguelriosoliveira@gmail.com?subject=👨‍💻 Professional Contact' },
];

export const Home: React.FC = () => (
	<Main>
		<section className="languages">
			{/* <a href="#">ENG</a> */}
			{/* <a href="#">PTBR</a> */}
		</section>

		<section className="name-and-roles">
			<h1 className="name">Miguel Rios</h1>
			<h4 className="roles">
				<span>I&apos;m a</span>

				<Typing loop cursorClassName="typing-cursor">
					{roles.map(role => (
						<Fragment key={role}>
							<span>{role}</span>
							<Typing.Backspace count={role.length + 2} delay={1000} />
						</Fragment>
					))}
				</Typing>
			</h4>
		</section>

		<section className="social-media">
			{links.map(({ icon, to }) => (
				<IconLink key={to} icon={icon} to={to} />
			))}
		</section>
	</Main>
);

export default Home;
