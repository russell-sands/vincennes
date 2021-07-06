import React from 'react';
import { VariableHeader } from './VariableHeader';
import { MetricTable } from './MetricTable';

export const VariableInfo = ({ variable, variableData }) => {
  //console.log(variable, variableData, typeof variableData);
  //console.log(variableData);
  //console.log(variableData.metrics);
  return (
    <div className="variable-info">
      <VariableHeader variable={variable} rating={variableData.metrics.riskr} />
      <MetricTable
        variable={variable}
        metricData={variableData.metrics.exposure}
        metricPrefix="Exposed"
      />
      <MetricTable
        variable={variable}
        metricData={variableData.metrics.historic}
      />
      <MetricTable
        variable={variable}
        metricData={variableData.metrics.expected}
      />
    </div>
  );
};
