import axios from 'axios';

interface Repository {
	name: string;
	homepage: string;
	topics: string[];
}

const client = axios.create({ baseURL: 'https://api.github.com' });

export const githubApi = {
	async getRepoDetails(username: string, repo: string) {
		const { data: repoDetails } = await client.get<Repository>(`/repos/${username}/${repo}`);
		return repoDetails;
	},
};
