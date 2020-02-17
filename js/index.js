import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {ProductProvider} from './context'

const app = document.getElementById('app');

ReactDOM.render(
	<ProductProvider>
		<Router>
			<App/>
		</Router>
	</ProductProvider>
	
, app);
