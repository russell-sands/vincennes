import React from 'react';
import * as Constants from './Constants';

export const DisplayNoData = ({ address }) => {
  return (
    <div className="result-header centered">
      <div>
        {(() => {
          if (address) {
            return (
              <>
                <span className="result-header-address">{`${address}`}</span>
                <br />
              </>
            );
          } else {
            return <></>;
          }
        })()}
        <span className="result-header-content">
          FEMA National Risk Index data are not available for this location. For
          more information about the National Risk Index, refer to{' '}
          <a href={Constants.ABOUT_NRI_URL}>FEMA's documentation</a>.
        </span>
      </div>
    </div>
  );
};
