import axios, { AxiosError } from 'axios';

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
			return repoDetails;
		} catch (error) {
			console.log('Failed getting repo details:', error);
			throw error;
		}
	},
};
