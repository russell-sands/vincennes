import React from 'react';
import { VariableHeader } from './VariableHeader';
import { MetricTable } from './MetricTable';

// Need to add the logic for handling unrated variables

export const VariableInfo = ({ variable, variableData }) => {
  // This should probably be somewhere else / handled better
  const metricsToDisplay = [
    'Buildings',
    'Agriculture',
    'Population',
    '... Population Equiv.',
    'Rating',
  ];
  return (
    <div className="variable-info">
      <VariableHeader variable={variable} rating={variableData.metrics.riskr} />
      <MetricTable
        variable={variable}
        metricData={variableData.metrics.exposure}
        showOnly={metricsToDisplay}
      />
      <MetricTable
        variable={variable}
        metricData={variableData.metrics.historic}
        showOnly={metricsToDisplay}
      />
      <MetricTable
        variable={variable}
        metricData={variableData.metrics.expected}
        showOnly={metricsToDisplay}
      />
    </div>
  );
};
