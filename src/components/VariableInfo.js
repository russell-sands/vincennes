import React from 'react';
import {
  VariableDisplayRated,
  VariableDisplayUnrated,
} from './VariableDisplay';
import * as Constants from './Constants';

// Need to add the logic for handling unrated variables

export const VariableInfo = ({ variable, variableData }) => {
  const rating = variableData.metrics.riskr;
  // This should probably be somewhere else / handled better
  if (Constants.NRI_RATINGS.includes(rating))
    return (
      <VariableDisplayRated
        variable={variable}
        rating={rating}
        metricData={variableData}
      />
    );
  return <VariableDisplayUnrated variable={variable} rating={rating} />;
};
