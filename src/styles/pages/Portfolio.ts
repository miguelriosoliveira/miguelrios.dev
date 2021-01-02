import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	justify-content: center;
	padding: 16px 0;

	ul {
		width: 100%;
		flex: 1;
		list-style-type: none;

		li {
			height: 400px;

			& + li {
				margin-top: 10px;
			}
		}
	}

	@media (max-width: 470px) {
		ul {
			li {
				height: 200px;
			}
		}
	}

	@media (min-width: 768px) {
		ul {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 20px;

			li + li {
				margin-top: 0;
			}
		}
	}
`;
