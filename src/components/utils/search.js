import Search from '@arcgis/core/widgets/Search';

export const addSearchToView = (view) => {
  const search = new Search({
    view: view,
    popupEnabled: false,
  });
  view.ui.add(search, {
    position: 'top-right',
    index: 2,
  });
  return search;
};

export const resultToGeometry = (searchResult) => {
  return {
    x: searchResult.results[0].results[0].feature.geometry.x,
    y: searchResult.results[0].results[0].feature.geometry.y,
    spatialReference: {
      wkid: searchResult.results[0].results[0].feature.geometry.wkid,
    },
  };
};
