interface Tour {
	id: number;
	image: string;
	info: string;
	name: string;
	price: number;
}

type MouseButtonEvent = MouseEvent<HTMLButtonElement, MouseEvent>;

interface Props {
	tour: Tour;
	handleRemoveTour: (event: MouseButtonEvent) => void;
}

export {Props, Tour, MouseButtonEvent};
