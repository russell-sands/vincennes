import { queryFeatures } from '@esri/arcgis-rest-feature-layer';

export const getAttributes = async (layerUrl, searchResult) => {
  const geom = {
    x: searchResult.results[0].results[0].feature.geometry.x,
    y: searchResult.results[0].results[0].feature.geometry.y,
    spatialReference: {
      wkid: searchResult.results[0].results[0].feature.geometry.wkid,
    },
  };
  const response = await queryFeatures({
    url: layerUrl,
    geometry: geom,
    geometryType: 'esriGeometryPoint',
    spatialRel: 'esriSpatialRelIntersects',
  });
  return response.features[0]?.attributes || {};
};
