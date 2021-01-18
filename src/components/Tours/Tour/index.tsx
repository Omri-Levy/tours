import React, {useState} from 'react';
import {Props} from './types';
import './Tour.css';

const Tour: React.FunctionComponent<Props> = ({tour, handleRemoveTour}) => {
	const [readMore, setReadMore] = useState(false);
	const handleReadMore = () => setReadMore((prevState) => !prevState);

	return (
		<article>
			<img src={tour.image} alt={tour.name}/>
			<footer>
				<div>
					<h4>{tour.name}</h4>
					<h4>${tour.price}</h4>
				</div>
				<p>
					{readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
					<button onClick={handleReadMore}>
						{readMore ? `Show less` : `Read more`}
					</button>
				</p>
				<button onClick={handleRemoveTour}>
					Not interested
				</button>
			</footer>
		</article>
	);
};

export default Tour;
