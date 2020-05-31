import styled from 'styled-components';

export const HeaderStyles = styled.header`
	display: grid;
	grid-auto-flow: column;
	justify-content: end;
	gap: 10px;

	a {
		opacity: 0.6;
		transition: opacity 0.2s;
		:hover {
			opacity: 1;
			text-decoration: underline;
		}
	}
`;
