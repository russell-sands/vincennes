import Search from '@arcgis/core/widgets/Search';

export const addSearchToView = (view) => {
  const search = new Search({
    view: view,
  });
  view.ui.add(search, {
    position: 'top-right',
    index: 2,
  });
  return search;
};
