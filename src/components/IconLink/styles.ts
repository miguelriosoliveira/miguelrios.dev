import styled from 'styled-components';

export const StyledAnchor = styled.a`
	display: flex;
	height: fit-content;
	opacity: 0.7;
	transition: transform 0.2s, opacity 0.2s;

	:hover {
		transform: scale(1.2);
		opacity: 1;
	}
`;
