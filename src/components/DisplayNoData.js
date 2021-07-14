import React from 'react';
import * as Constants from './Constants';

export const DisplayNoData = ({ address }) => {
  address = address ? address : 'this location';
  return (
    <div className="result-header result-summary centered">
      FEMA National Risk Index data are not available in {address}. For more
      information about the National Risk Index, refer to{' '}
      <a href={Constants.ABOUT_NRI_URL}>FEMA's documentation</a>.
    </div>
  );
};
