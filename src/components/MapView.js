import React, { useRef, useEffect } from 'react';
import { createMapView } from './utils/map';
import { addSearchToView } from './utils/search';
import { getAttributes } from './utils/getAttributes';
import '@arcgis/core/assets/esri/themes/light/main.css';
import './styles.css';

/*
TODO: 
- Implement querynpm 
*/

export const MapView = (props) => {
  const mapRef = useRef();
  //const myUrl = 'https://services1.arcgis.com/zRnwqnVJ5RJfCCJT/arcgis/rest/services/NRI_Counties_2020_October_Dashboard/FeatureServer/0';
  const femaTractURL =
    'https://hazards.geoplatform.gov/server/rest/services/Hosted/NRI_Tracts_%28October_2020%29/FeatureServer/0';
  useEffect(() => {
    const view = createMapView(mapRef.current, props.basemap, props.zoom);
    const search = addSearchToView(view);
    search.on('search-complete', async (e) => {
      const attributes = await getAttributes(femaTractURL, e);
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
