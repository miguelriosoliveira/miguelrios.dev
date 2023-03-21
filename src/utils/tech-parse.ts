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
		typescript: 'TypeScript',
	},
	{
		get: (target, key) => target[key] || key,
	},
);
