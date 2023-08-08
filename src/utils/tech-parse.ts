export const TECHS_MAP = new Proxy(
	{
		'create-react-app': 'CRA',
		express: 'Express',
		'github-api': 'GitHub API',
		mongodb: 'MongoDB',
		monorepo: 'Monorepo',
		nextjs: 'Next.js',
		nodejs: 'Node.js',
		pokeapi: 'PokéAPI',
		react: 'ReactJS',
		'tmdb-api': 'TMDB API',
		tailwindcss: 'Tailwind CSS',
		typescript: 'TypeScript',
		vite: 'Vite',
	},
	{
		get: (target: { [k: string]: string }, key: string) => target[key] || key,
	},
);
