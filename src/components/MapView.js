import React, { useRef, useEffect } from 'react';
import { createMapView } from './utils/map';
import { getLayerView, filterLayerBySearchResult } from './utils/layers';
import { addSearchToView } from './utils/search';
import { getAttributes } from './utils/getAttributes';
import * as Constants from './Constants';
import '@arcgis/core/assets/esri/themes/light/main.css';
import './styles.css';

export const MapView = (props) => {
  const mapRef = useRef();
  useEffect(() => {
    const view = createMapView(mapRef.current, props.basemap, props.zoom);
    const search = addSearchToView(view);
    search.on('search-complete', async (e) => {
      const matchAddr = e.results[0].results[0]?.feature.attributes.Match_addr;
      let attributes = {};
      // only query for attributes if a match was returned
      if (matchAddr) {
        const layerView = await getLayerView(
          view,
          'NRI_Tracts_2020_Oct - Filter'
        );
        filterLayerBySearchResult(e, layerView);
        attributes = await getAttributes(Constants.NRI_TRACT_URL, e);
      }
      attributes.matchAddr = matchAddr;
      props.onQuery(attributes);
    });
    search.on('search-clear', async (e) => {
      props.onQuery([]);
    });
    return () => {
      view && view.destroy();
      search && search.destroy();
    };
  }, []);
  return <div className="map-view" ref={mapRef}></div>;
};
