import { MapView } from './MapView';
import { ResultsModal } from './ResultsModal';

export const Interact = () => {
  return (
    <>
      <MapView basemap="topo-vector" zoom="13" />
      <ResultsModal />
    </>
  );
};
