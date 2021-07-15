import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import Home from '@arcgis/core/widgets/Home';
import * as Constants from '../Constants';

export const createMapView = (ref, basemap, zoom) => {
  const webmap = new WebMap({
    portalItem: { id: Constants.NRI_MAP_ID },
  });

  const view = new MapView({
    container: ref,
    map: webmap,
  });

  const homeButton = new Home({
    view: view,
  });

  view.ui.add(homeButton, 'top-left');

  return view;
};
