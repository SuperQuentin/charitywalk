import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import Polyline from 'ol/format/Polyline';
import GeoJSON from 'ol/format/GeoJSON';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';
import { useEffect, useRef, useState } from 'react';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { Circle, LineString, Point } from 'ol/geom';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Fill, Icon, Stroke, Style } from 'ol/style';
import CircleStyle from 'ol/style/Circle';
import type { Coordinate } from 'ol/coordinate';


/*const flyTo = (location, done) => {
	const duration = 2000;
	const zoom = view.getZoom();
	let parts = 2;
	let called = false;

	const callback = (complete) => {
		--parts;
		if (called) {
			return;
		}
		if (parts === 0 || !complete) {
			called = true;
			done(complete);
		}
	}
	view.animate({ center: location, duration: duration, }, callback);
	view.animate({ zoom: zoom - 1, duration: duration / 2, }, { zoom: zoom, duration: duration / 2, }, callback);
}*/

const generateRunnersFeatures = (/*runners: Runner[]*/runners: Coordinate[]): Feature[] => {
	const runnerFeatures: Feature[] = [];

	for (let i = 0; i < runners.length; ++i) {
		const runnerCoordinate = runners[i] as Coordinate;
		const runnerFeature = new Feature({
			type: 'geoMark',
			geometry: new Point(fromLonLat(runnerCoordinate)),
		});

		runnerFeatures.push(runnerFeature);
	}

	return runnerFeatures;
}

interface IMapComponentProps {
	runners: Coordinate[]
}

const runnersLayer = new VectorLayer({
	style: new Style({
	  stroke: new Stroke({
		 color: 'red',
		 width: 15
	  }),
	  image: new CircleStyle({
		radius: 7,
		fill: new Fill({color: 'black'}),
		stroke: new Stroke({
		  color: 'white',
		  width: 2,
		}),
	 }),
	})
});

const routesLayer = new VectorLayer({
	style: new Style({
	  stroke: new Stroke({
		 color: 'blue',
		 width: 5
	  }),
	})
});

const MapComponent = ({ runners } : IMapComponentProps) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const [map, setMap] = useState<Map>();

	useEffect(() => {
		runnersLayer?.setSource(new VectorSource({
			features: generateRunnersFeatures(runners),
		}),);
	}, [runners]);

	useEffect(() => {
		const testLocation = fromLonLat([6.561902, 46.518884]); // EPFL
		//const testLocation = fromLonLat([ 5.3275, 45.9489 ]); // cardio running example

		const MAP_TILER_API_KEY = 'hiTaW5U5cKPTart8AbWL';
		const attributions =
		'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
		'<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

		if (mapRef.current === null) {
			console.log("BUG");
			return;
		}

		// Route layer
		routesLayer.setSource(new VectorSource({
			url: '/testdata/geojson_tour_migros/tracks.geojson',
			format: new GeoJSON(),
		}));

		// Create map
		setMap(new Map({
				target: mapRef.current,
				view: new View({
					center: testLocation,
					zoom: 15,
					minZoom: 13,
					maxZoom: 20,
				}),
				layers: [
					new TileLayer({
						source: new XYZ({
							attributions: attributions,
							url: 'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=' + MAP_TILER_API_KEY,
							tileSize: 512,
						}),
					}),
					routesLayer,
					runnersLayer
				],
			} as any)
		);

		return () => {
			map?.setTarget(undefined);
		};
	}, []);

	useEffect(() => {
		return () => {
			map?.setTarget(undefined);
		};
	}, [map]);

	return (
		<>
			<div ref={mapRef} className="relative grow h-96"></div>
			<div>LAYERS : <br/>{map?.getLayers().getArray().map(layer => (<div>layer</div>))}</div>
		</>
	);
}

export default MapComponent;
