import React, { useState, useRef, useEffect } from 'react';
import { createMapView } from './utils/map';
import { addSearchToView } from './utils/search';
//import { makeQuery } from './utils/makeQuery';
import { queryFeatures } from '@esri/arcgis-rest-feature-layer';
import '@arcgis/core/assets/esri/themes/light/main.css';
import { styles } from './styles';

/*
TODO: 
- Implement querynpm 
*/

export const MapView = (props) => {
  const mapRef = useRef();
  const qUrl =
    'https://services1.arcgis.com/zRnwqnVJ5RJfCCJT/arcgis/rest/services/NRI_Counties_2020_October_Dashboard/FeatureServer/0';
  //const [view, setView] = useState(null);
  useEffect(() => {
    const view = createMapView(mapRef.current, props.basemap, props.zoom);
    const search = addSearchToView(view);
    search.on('search-complete', (e) => {
      const geom = e.results[0].results[0].feature.geometry;
      console.log(geom);
      queryFeatures({
        url: qUrl,
        geometryType: 'esriGeometryPoint',
        spatialRel: 'esriSpatialRelIntersects',
        geometry: {
          x: geom.x,
          y: geom.y,
          spatialReference: {
            wkid: geom.spatialReference.wkid,
          },
        },
      }).then((r) => {
        console.log(r);
        props.onQuery(r.features[0].attributes);
      });
      console.log();
    });
    return () => {
      view && view.destroy();
      search && search.destroy();
    };
  }, []);
  return <div style={styles.MapStyle} ref={mapRef}></div>;
};
