import styled from 'styled-components';

interface Props {
	dominantColor: string;
}

export const Container = styled.a<Props>`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${props => props.dominantColor};
	border-radius: 15px;
	overflow: hidden;
	height: 100%;

	header {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 15px 20px 0 20px;

		h2 {
			font-weight: normal;
			font-size: 1.5rem;
			margin-right: 10px;
			color: ${props => props.dominantColor};
			filter: invert(100%);
		}

		.techs {
			display: flex;
			align-items: center;

			p {
				font-size: 0.7rem;
				background-color: #4e4e53;
				color: #aeafb2;
				border-radius: 5px;
				padding: 2px 8px;

				& + p {
					margin-left: 5px;
				}
			}
		}
	}

	.image-container {
		position: relative;
		width: 100%;
		height: 100%;
		transform: rotate(15deg) translate(15%, 15%);
	}
`;
