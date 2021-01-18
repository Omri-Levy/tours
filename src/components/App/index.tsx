import './App.css';
import React from 'react';
import Tours from '../Tours';
import {HelmetProvider} from 'react-helmet-async';
import Head from '../Head';

const App: React.FunctionComponent = () => {
	return (
		<HelmetProvider>
			<Head/>
			<main className={'App'}>
				<Tours/>
			</main>
		</HelmetProvider>
	);
};

export default App;
