import React from 'react';
import {Helmet} from 'react-helmet-async';

const Head: React.FunctionComponent = () => {
	const fontBase = `https://fonts.googleapis.com/css2?family`;
	const fontUrl = fontBase + `"=Montserrat:wght@400;700&display=swap`;

	return (
		<Helmet>
			<title>Tours</title>
			<link rel={`preconnect`} href={`https://fonts.gstatic.com`}/>
			<link href={fontUrl} rel={`stylesheet`}/>
		</Helmet>
	);
};

export default Head;

