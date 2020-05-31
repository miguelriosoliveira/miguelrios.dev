import styled from 'styled-components';

export const Main = styled.main`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;

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
		.name {
			font-weight: bold;
			letter-spacing: 1px;
			margin-bottom: 10px;
			font-size: 50px;
		}
		.roles {
			display: flex;
			font-size: 25px;
			font-weight: normal;
			letter-spacing: 0.3px;
			text-align: center;
			> span {
				margin-right: 10px;
			}
			.typing-cursor {
				color: #fff;
			}
		}
	}

	.social-media {
		display: grid;
		gap: 10px;
		align-self: flex-end;
		justify-items: center;
		a {
			display: flex;
			height: fit-content;
			opacity: 0.7;
			transition: transform 0.2s, opacity 0.2s;
			:hover {
				transform: scale(1.2);
				opacity: 1;
			}
		}
	}
`;
