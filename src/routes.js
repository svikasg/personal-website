import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from '../src/components/app';
import HomePage from '../src/components/home_page';
import About from '../src/components/about';
import Rants from '../src/components/rants';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={About} />
		<Route path="/rants" component={Rants} />
	</Route>
);

