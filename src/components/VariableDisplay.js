import React from 'react';
import { VariableHeader } from './VariableHeader';
import { MetricTable } from './MetricTable';
import { ScoreBar } from './ScoreBar';
import * as Constants from './Constants';

export const VariableDisplayRated = ({ variable, rating, metricData }) => {
  return (
    <div className="variable-info variable-info-rated">
      <VariableHeader variable={variable} rating={rating} />
      <ScoreBar rating={rating} />
      <MetricTable
        variable={variable}
        metricData={metricData.metrics.exposure}
        showOnly={Constants.DISPLAY_METRICS}
      />
      <MetricTable
        variable={variable}
        metricData={metricData.metrics.historic}
        showOnly={Constants.DISPLAY_METRICS}
      />
      <MetricTable
        variable={variable}
        metricData={metricData.metrics.expected}
        showOnly={Constants.DISPLAY_METRICS}
      />
    </div>
  );
};

export const VariableDisplayUnrated = ({ variable, rating }) => {
  return (
    <div className="variable-info variable-info-unrated">
      <VariableHeader variable={variable} rating={rating} />
      <p>{rating}</p>
    </div>
  );
};
