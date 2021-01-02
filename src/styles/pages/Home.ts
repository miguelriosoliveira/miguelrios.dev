import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.languages {
		display: grid;
		grid-auto-flow: column;
		gap: 10px;
		align-self: flex-end;
		writing-mode: vertical-rl;
		text-orientation: mixed;
	}

	.name-and-roles {
		text-align: center;

		h1 {
			font-size: 54px;
			margin-top: 40px;
		}

		h2 {
			font-size: 25px;
			font-weight: normal;
			letter-spacing: 0.3px;
		}
	}

	.social-media {
		display: grid;
		gap: 10px;
		align-self: flex-end;
		justify-items: center;
	}
`;
