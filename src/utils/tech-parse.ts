interface Tech {
	slug: string;
	displayName: string;
}

export const TECHS_MAP = new Proxy(
	{
		'create-react-app': {
			slug: 'createreactapp',
			displayName: 'CRA',
		},
		express: {
			slug: 'express',
			displayName: 'Express',
		},
		'github-api': {
			slug: 'github',
			displayName: 'GitHub API',
		},
		mongodb: {
			slug: 'mongodb',
			displayName: 'MongoDB',
		},
		monorepo: {
			slug: 'monorepo',
			displayName: 'Monorepo',
		},
		nextjs: {
			slug: 'nextdotjs',
			displayName: 'Next.js',
		},
		nodejs: {
			slug: 'nodedotjs',
			displayName: 'Node.js',
		},
		pokeapi: {
			slug: 'pokemon',
			displayName: 'PokéAPI',
		},
		react: {
			slug: 'react',
			displayName: 'ReactJS',
		},
		'tmdb-api': {
			slug: 'themoviedatabase',
			displayName: 'TMDB API',
		},
		tailwindcss: {
			slug: 'tailwindcss',
			displayName: 'Tailwind CSS',
		},
		typescript: {
			slug: 'typescript',
			displayName: 'TypeScript',
		},
		vite: {
			slug: 'vite',
			displayName: 'Vite',
		},
	},
	{
		get: (target: { [k: string]: Tech }, key: string) =>
			target[key] || { slug: key, displayName: key },
	},
);
