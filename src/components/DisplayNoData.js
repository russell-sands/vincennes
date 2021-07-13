import React from 'react';
import * as Constants from './Constants';

export const DisplayNoData = () => {
  return (
    <div className="display-no-data">
      FEMA National Risk Index data are not available in this location. For more
      information about the National Risk Index, refer to{' '}
      <a href={Constants.ABOUT_NRI_URL}>FEMA's documentation</a>.
    </div>
  );
};
