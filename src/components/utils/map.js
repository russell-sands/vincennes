import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

export const createMapView = (ref, basemap, zoom) => {
  const map = new Map({
    basemap: basemap,
  });

  const view = new MapView({
    container: ref,
    map: map,
    center: [-118, 34],
    zoom: zoom,
  });
  return view;
};
