import { Feature } from 'ol';
import type { Coordinate } from 'ol/coordinate';

export interface Sponsor {
	name: string;
	moneyPerKilometer: number;
	sponsoring: Runner[];
}

export interface Runner {
	id: number;
	firstname: string;
	lastname: string;
	latestTrackpoint: Coordinate;
	feature: Feature;
	sponsoredBy: Sponsor[];
}

export interface Event {
	routes: Route[];
}

export interface Route {
	waypoints: Coordinate[];
}
