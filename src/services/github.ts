import axios from 'axios';

interface Repository {
	name: string;
	homepage: string;
	topics: string[];
}

const client = axios.create({ baseURL: 'https://api.github.com' });

export const githubApi = {
	async getRepoDetails(username: string, repo: string) {
		try {
			const { data: repoDetails } = await client.get<Repository>(`/repos/${username}/${repo}`);
			// const repoDetails: Repository = JSON.parse(
			// 	await fs.readFile(`${process.cwd()}/src/fixtures/${repo}.json`, 'utf-8'),
			// );
			return repoDetails;
		} catch (error) {
			console.log('Failed getting repo details:', error);
			throw error;
		}
	},
};
