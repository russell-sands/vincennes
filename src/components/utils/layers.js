import { resultToGeometry } from './search';

export const getLayerView = async (view, layerViewName) => {
  const layerView = view.when(() => {
    const layer = view.map.allLayers.find(
      (layer) => layer.title === layerViewName
    );
    return view.whenLayerView(layer).then((e) => e);
  });
  return layerView;
};

export const filterLayerBySearchResult = async (searchResult, layerView) => {
  const filterGeom = resultToGeometry(searchResult);
  filterGeom.type = 'point';
  layerView.filter = {
    where: '1=1',
    geometry: filterGeom,
    spatialRelationship: 'intersects',
  };
};
