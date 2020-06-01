import styled from 'styled-components';

export const Ul = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 15px;

	margin-top: 20px;
	width: 100%;
	text-align: center;

	li {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		img {
			width: 200px;
			& + img {
				margin-top: 10px;
			}
		}
	}
`;
