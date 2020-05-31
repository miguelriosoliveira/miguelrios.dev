import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HeaderStyles, LinkStyles } from './styles';

const Header: React.FC = () => {
	const location = useLocation();

	return (
		<HeaderStyles>
			<LinkStyles selected={location.pathname === '/'}>
				<Link to="/">Home</Link>
			</LinkStyles>

			<LinkStyles selected={location.pathname === '/portfolio'}>
				<Link to="/portfolio">Portfolio</Link>
			</LinkStyles>
		</HeaderStyles>
	);
};

export default Header;
