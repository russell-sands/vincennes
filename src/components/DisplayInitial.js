import React from 'react';
import * as Constants from './Constants';

export const DisplayInitial = () => {
  return (
    <div className="result-header centered">
      <span className="result-header-address">
        Use the search bar to explore FEMA's{' '}
        <a href={Constants.ABOUT_NRI_URL}>National Risk Index</a>
      </span>
    </div>
  );
};
