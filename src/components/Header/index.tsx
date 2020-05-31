import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderStyles } from './styles';

const Header: React.FC = () => (
	<HeaderStyles>
		<Link to="/">Home</Link>
		<Link to="/portfolio">Portfolio</Link>
	</HeaderStyles>
);

export default Header;
