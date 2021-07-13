import React from 'react';
import { ResultOverview } from './ResultOverview';
import { VariableInfo } from './VariableInfo';
import { getRiskData } from './utils/parsing';

export const DisplayResult = ({ data }) => {
  const riskData = getRiskData(data);
  //console.log('risk data', riskData);
  return (
    <>
      <ResultOverview data={data} />
      {Object.keys(riskData).map((riskName) => {
        const riskMetrics = riskData[riskName];
        return (
          <VariableInfo
            key={riskName}
            variable={riskName}
            variableData={riskMetrics}
          />
        );
      })}
    </>
  );
};
