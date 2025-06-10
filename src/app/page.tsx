import { DynamicRoles, IconLink } from '@/components';
import {
	FaBluesky,
	FaEnvelope,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaStackOverflow,
	FaXTwitter,
} from 'react-icons/fa6';

const LINKS = [
	{ icon: FaLinkedin, to: 'https://www.linkedin.com/in/miguelriosoliveira' },
	{ icon: FaGithub, to: 'https://github.com/miguelriosoliveira' },
	{ icon: FaStackOverflow, to: 'https://stackoverflow.com/users/4916416/miguel-rios' },
	{ icon: FaInstagram, to: 'https://www.instagram.com/miguelrisos' },
	{ icon: FaBluesky, to: 'https://bsky.app/profile/miguelrisos.bsky.social' },
	{ icon: FaXTwitter, to: 'https://x.com/MiguelRisos' },
	{ icon: FaEnvelope, to: 'mailto:miguelriosoliveira@gmail.com?subject=👨‍💻 Professional Contact' },
];

export default function Home() {
	return (
		<main className="flex items-center flex-1">
			<section className="text-center flex-1">
				<h1 className="text-5xl mt-10 font-bold">Miguel Rios</h1>
				<h2 className="text-2xl font-normal tracking-wide">
					<span>I&apos;m a </span>
					<DynamicRoles />
				</h2>
			</section>

			<section className="grid self-end gap-2 justify-items-center">
				{LINKS.map(({ icon: Icon, to }) => (
					<IconLink key={to} to={to}>
						<Icon size={30} />
					</IconLink>
				))}
			</section>
		</main>
	);
}
