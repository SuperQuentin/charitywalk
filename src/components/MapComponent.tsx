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
import { Fill, Icon, Stroke, Style, Text } from 'ol/style';
import CircleStyle from 'ol/style/Circle';
import type { Coordinate } from 'ol/coordinate';
import type { Route, Runner } from '../types/interfaces';
import { StyleLike } from 'ol/style/Style';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import {getPolylineFromCoordinates, getRouteFromCoordinates} from '../utils/map'

const FLY_TO_DURATION = 1000;
const FLY_TO_ZOOM = 18;
const flyTo = (location: Coordinate, done) => {

	const zoom = mapView.getZoom();
	let parts = 2;
	let called = false;

	const callback = (complete) => {
		--parts;
		if (called) {
			return;
		}
		if (parts === 0 || !complete) {
			called = true;
			if(done) done(complete);
		}
	}
	mapView.animate({ center: location, duration: FLY_TO_DURATION, }, callback);
	mapView.animate({ zoom: FLY_TO_ZOOM - 1, duration: FLY_TO_DURATION / 2, }, { zoom: FLY_TO_ZOOM, duration: FLY_TO_DURATION / 2, }, callback);
}

const getRunnerStyle = (isFocused: boolean, runner: Runner) => (styleLike: any) => [new Style({
	image: new CircleStyle({
		radius: 15,
		fill: new Fill({color: '#eeeeee'}),
		stroke: new Stroke({
			color: '#0A1B33',
			width: isFocused ? 4 : 2,
		}),
	}),
	text: new Text({
		font: (isFocused ? 'bold 17px' : '15px') + ' Calibri,sans-serif',
		fill: new Fill({ color: '#0A1B33' }),
		stroke: new Stroke({
			color: '#eee', width: 2
		}),
		text: (runner.firstname[0]?.toUpperCase() + runner.lastname[0]?.toUpperCase())
	})
})]

const testLocation = fromLonLat([6.561902, 46.518884]); // EPFL

const mapView = new View({
	center: testLocation,
	zoom: 15,
	minZoom: 13,
	maxZoom: 20,
})

const runnersLayer = new VectorLayer();

const routesLayer = new VectorLayer({
	style: new Style({
	  stroke: new Stroke({
		 color: '#8b5cf6',
		 width: 5
	  }),
	})
});

interface IMapComponentProps {
	runners: Runner[],
	routes: Route[],
}

const MapComponent = ({ runners, routes } : IMapComponentProps) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const [map, setMap] = useState<Map>();
	const [focusedRunnerId, setFocusedRunnerId] = useState<number | null>(null);
	const [focusedRunner, setFocusedRunner] = useState<Runner | null>(null);

	const generateRunnersFeatures = (runners: Runner[]): Feature[] => {
		const runnerFeatures: Feature[] = [];
	
		for (let i = 0; i < runners.length; ++i) {
			runners[i].feature = new Feature({
				type: 'icon',
				geometry: new Point(fromLonLat(runners[i]?.latestTrackpoint as Coordinate)),
				customRunner: runners[i]
			});
	
			runners[i].feature.setStyle(getRunnerStyle(runners[i].id === focusedRunnerId, runners[i]))
	
			runnerFeatures.push(runners[i].feature);
		}
	
		return runnerFeatures;
	}

	useEffect(() => {
		runnersLayer?.setSource(new VectorSource({
			features: generateRunnersFeatures(runners),
		}),);

		runners.forEach((runner) => {
			if (runner.id === focusedRunnerId) {
				mapView.animate({ center: fromLonLat(runner.latestTrackpoint), duration: FLY_TO_DURATION });
			}
		})
	}, [runners]);

	function getColorCode() {
      const makeColorCode = '0123456789ABCDEF';
      let code = '#';
      for (let count = 0; count < 6; count++) {
         code =code+ makeColorCode[Math.floor(Math.random() * 16)];
      }
      return code;
   }

	useEffect(() => {
		const routeFeatures: Feature[] = [];

		for (let i = 0; i < routes.length; ++i) {
			// Generate path from coordinates
			const routePath = getRouteFromCoordinates(routes[i].waypoints);

			const routeFeature = new Feature({
				type: 'route',
				geometry: routePath,
			});

			routeFeature.setStyle(new Style({
				stroke: new Stroke({
				  color: getColorCode(),
				  width: 5
				}),
			}))

			routeFeatures.push(routeFeature);
		}

		routesLayer?.setSource(new VectorSource({
			features: routeFeatures
		}));
	}, [routes])

	useEffect(() => {

		const MAP_TILER_API_KEY = 'hiTaW5U5cKPTart8AbWL';
		const attributions =
		'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
		'<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

		if (mapRef.current === null) {
			console.log("BUG");
			return;
		}

		// Route layer
		/*routesLayer.setSource(new VectorSource({
			url: '/testdata/geojson_tour_migros/tracks.geojson',
			format: new GeoJSON(),
		}));*/

		// Create map
		setMap(new Map({
				target: mapRef.current,
				view: mapView,
				layers: [
					new TileLayer({
						source: new OSM()
					}),
					/*new TileLayer({ // SATELLITE MAP
						source: new XYZ({
							attributions: attributions,
							url: 'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=' + MAP_TILER_API_KEY,
							tileSize: 512,
						}),
					}),*/
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
		if (map === undefined) return;

		return () => {
			map?.setTarget(undefined);
		};
	}, [map]);

	const CURRENT_MONEY = 1200;
	const TOTAL_MONEY = 3400;

	return (
		<>
			<div ref={mapRef} className="relative grow h-screen w-full"></div>
			{/* ----- LEFT PANNEL ----- */}
			<div className='min-w-[250px] fixed bg-violet-50 left-0 rounded-md drop-shadow-2xl' style={{"left": "10px", "top": "200px"}}>
				<div className="p-[10px] font-bold border-b-2 border-black">Click to follow a runner</div>
				<div className="overflow-auto max-h-[300px]">
					{runners.map((runner) => (
						<div key={runner.id} className={'transition cursor-pointer select-none p-[10px] hover:bg-violet-500 ' + (focusedRunnerId === runner.id ? 'bg-violet-400' : '')} onClick={()=>{
							setFocusedRunnerId(runner.id);
							setFocusedRunner(runner);
							flyTo(fromLonLat(runner.latestTrackpoint));
						}}>
							{runner.firstname} {runner.lastname}
						</div>
					))}
				</div>
			</div>

			{/* ----- RIGHT PANNEL ----- */}
			{focusedRunnerId !== null &&
				<div className='overflow-auto min-w-[250px] max-h-80 fixed bg-violet-50 right-0 rounded-md drop-shadow-2xl' style={{"right": "10px", "top": "200px"}}>
					<div className='p-[10px] font-bold border-b-2 border-black'>Stats of runner</div>
					<div className="p-[10px] hover:bg-violet-500 cursor-pointer select-none" onClick={() => {setFocusedRunnerId(null); setFocusedRunner(null);}}>Stop following</div>
					<div className='p-[10px]'>{focusedRunner?.firstname} {focusedRunner?.lastname}</div>
				</div>
			}

			{/* ----- MONEY POT ----- */}
			<div className="text-center w-1/2 fixed bottom-5 h-8 rounded-md font-light text-xl	"
				style={{"background": "linear-gradient(90deg, #8b5cf6 60%, #ebe5f9 60%)"} as any}>
					{CURRENT_MONEY} / {TOTAL_MONEY}
			</div>
		</>
	);
}

export default MapComponent;
