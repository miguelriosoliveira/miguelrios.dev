import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
		font-family: "Poppins";
		src: url("/fonts/Poppins-Regular.ttf");
		font-style: normal;
		font-weight: 400;
		font-display: swap;
	}

	@font-face {
		font-family: "Poppins";
		src: url("/fonts/Poppins-Bold.ttf");
		font-style: normal;
		font-weight: 700;
		font-display: swap;
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		width: 100vw;
		height: 100vh;

		padding: 16px 30px 30px 30px;

		background: ${props => props.theme.colors.background};
		background-image: url('/assets/me.webp');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		color: ${props => props.theme.colors.text};
		font: 400 14px Poppins, sans-serif;

		#__next {
			height: 100%;
			max-width: 1100px;
			margin: auto;
			display: flex;
			flex-direction: column;

			> main {
				display: flex;
				flex: 1;
			}
		}

		@media (min-width: 768px) {
			background-size: contain;
		}
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;
