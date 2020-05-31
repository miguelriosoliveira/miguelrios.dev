import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const Routes: React.FC = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/portfolio" component={Portfolio} />
	</Switch>
);

export default Routes;
