import React from 'react';
import { ResultHeaderRated, ResultHeaderUnrated } from './ResultHeader';
import { ResultSummary } from './ResultSummary';
import * as Constants from './Constants';

export const ResultOverview = ({ data }) => {
  console.log(data);
  return (
    <>
      {(() => {
        if (Constants.NRI_RATINGS.includes(data.risk_ratng)) {
          return <ResultHeaderRated data={data} />;
        } else {
          return <ResultHeaderUnrated data={data} />;
        }
      })()}
      <ResultSummary data={data} />
    </>
  );
};
