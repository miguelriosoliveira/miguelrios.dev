import { createGlobalStyle } from 'styled-components';

import meBackground from '../assets/me.png';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		height: 100vh;
		width: 100vw;

		padding: 10px 30px 30px 30px;
		font-family: Poppins, sans-serif;
		font-size: 14px;
		color: #fff;

		background-image: url(${meBackground});
		background-color: #141414;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;

		#root {
			height: 100%;
			display: flex;
			flex-direction: column;
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
