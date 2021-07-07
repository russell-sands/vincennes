import { render } from 'react-dom';
import { useState } from 'react';
//import { Interact } from './components/Interact';
import { MapView } from './components/MapView';
import { ResultPanel } from './components/ResultPanel';
import './components/styles.css';

function App() {
  const [locData, setLocData] = useState({});

  const updateData = (data) => {
    setLocData(data);
  };

  return (
    <>
      <ResultPanel data={locData} />
      <MapView basemap="topo-vector" zoom="13" onQuery={updateData} />
    </>
  );
}

render(<App />, document.querySelector('#root'));
