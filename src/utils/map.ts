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
import { LineString, Point } from 'ol/geom';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Fill, Stroke, Style } from 'ol/style';
import CircleStyle from 'ol/style/Circle';
import type { Coordinate } from 'ol/coordinate';

const currPath = 
[
	[
		-98.907449,
		30.241299
	],
	[
		-98.907477,
		30.241337
	],
	[
		-98.907557,
		30.241449
	],
	[
		-98.907636,
		30.24156
	]
]

export const getRouteFromCoordinates = (coordinates: Coordinate[]) => {
	//return new LineString(coordinates).transform('EPSG:4326', 'EPSG:3857');
	for (let i = 0; i < coordinates.length; ++i) {
		coordinates[i] = fromLonLat(coordinates[i]);
	}
	return new LineString(coordinates); //temp
}

export const getPolylineFromCoordinates = (coordinates: Coordinate[]) => {
	return new Polyline({
		factor: 1e6
	}).writeGeometry(new LineString(coordinates));
}