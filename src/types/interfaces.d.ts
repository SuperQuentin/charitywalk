import type { Coordinate } from 'ol/coordinate';

export interface Runner {
	id: number;
	trackpoints: Coordinate[];
}

export interface Event {
	routes: Route[];
}

export interface Route {
	waypoints: Coordinate[];
}
