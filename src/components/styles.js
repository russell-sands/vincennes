const MapStyle = {
  margin: '0',
  padding: '0',
  height: '100%',
  width: '100%',
};

const modalCommon = {
  position: 'fixed',
  left: '10%',
  top: '10%',
  width: '80%',
  height: '80%',
  background: 'white',
  border: '1px solid black',
  borderRadius: '8px',
  zIndex: '1',
  paddingLeft: '8px',
  overflowY: 'auto',
  margin: '0 20px 20px 20px',
};

const ModalShow = {
  display: 'block',
  ...modalCommon,
};
const ModalHide = {
  display: 'none',
  ...modalCommon,
};

export const styles = {
  MapStyle: MapStyle,
  ModalShow: ModalShow,
  ModalHide: ModalHide,
};
