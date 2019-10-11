import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'Containers/App';
import { configureStore } from 'Redux/store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faEdit, faStop, faPlay, faLink, faUnlink, faList, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle, faEdit, faStop, faPlay, faLink, faUnlink, faList, faTimes);

const MainApp = () => (
	<Provider store={configureStore()}>
			<Router>
				<Switch>
					<Route path="/" component={App} />
				</Switch>
			</Router>
	</Provider>
);

export default MainApp;
