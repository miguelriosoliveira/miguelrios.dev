import styled, { css } from 'styled-components';

export const HeaderStyles = styled.header`
	display: grid;
	grid-auto-flow: column;
	justify-content: end;
	gap: 10px;
`;

interface LinkProps {
	selected?: boolean;
}

export const LinkStyles = styled.div<LinkProps>`
	a {
		:after {
			content: '';
			width: 0px;
			height: 1px;
			display: block;
			background: #fff;
			transition: 300ms;

			${({ selected }) =>
				selected &&
				css`
					width: 100%;
				`}
		}

		:hover:after {
			width: 100%;
		}
	}
`;
