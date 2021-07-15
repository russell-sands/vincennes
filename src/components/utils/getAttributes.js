import { queryFeatures } from '@esri/arcgis-rest-feature-layer';
import { resultToGeometry } from './search';

export const getAttributes = async (layerUrl, searchResult) => {
  const geom = resultToGeometry(searchResult);
  const response = await queryFeatures({
    url: layerUrl,
    geometry: geom,
    geometryType: 'esriGeometryPoint',
    spatialRel: 'esriSpatialRelIntersects',
  });
  return response.features[0]?.attributes || {};
};
