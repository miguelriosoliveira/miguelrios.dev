import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: grid;
	grid-auto-flow: column;
	justify-content: end;
	gap: 10px;
	font-size: 1.2rem;

	@media (min-width: 768px) {
		font-size: initial;
	}
`;
