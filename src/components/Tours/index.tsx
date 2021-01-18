import React, {useCallback, useEffect, useState} from 'react';
import Tour from './Tour/index';
import {Tour as TourType} from './Tour/types';
import Loading from '../Loading';
import './Tours.css';

const Tours: React.FunctionComponent = () => {
	const [tours, setTours] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const fetchTours = useCallback(async () => {
		const fetchUrl = `https://course-api.com/react-tours-project`;

		try {
			const res = await fetch(fetchUrl);
			const data = await res.json();

			setTours(data);
		} catch (err) {
			console.error(err);
		}

		setIsLoading(false);
	}, []);
	const handleRemoveTour = (id: number) => () => {
		const newTours = tours.filter((tour: TourType) => tour.id !== id);

		setTours(newTours);
	};

	useEffect(() => {
		fetchTours();
	}, [fetchTours]);

	if (isLoading) {
		return <Loading/>;
	}

	return (
		<section>
			<header>
				<h2 className={`title`}>
					{tours.length === 0 ? (
							`No tours - refresh or try again later`
						)
						: `Our Tours`}
						<span className={`title-underline`}/>
				</h2>
			</header>
			{tours.map((tour: TourType) => (
					<Tour
						key={tour.id}
						tour={tour}
						handleRemoveTour={handleRemoveTour(tour.id)}
					/>
				),
			)}
			{tours.length === 0 && (
				<button className={`refresh-button`} onClick={fetchTours}>
					Refresh
				</button>
			)}
		</section>
	);
};

export default Tours;
