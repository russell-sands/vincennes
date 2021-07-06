import React, { useState } from 'react';
import { ResultOverview } from './ResultOverview';
import { VariableInfo } from './VariableInfo';
import { getRiskData2 } from './utils/resultParsing';
import './styles.css';

// TODO: Break what is returned out into components

// Where is this broken? Answer - its broken in the variable info
// you passed a key from here and that caused the whole thing... you need to move
// the loop over variables down to within Variable Info

export const ResultPanel = ({ data }) => {
  console.log(data);
  if (Object.keys(data).length > 0) {
    const riskData = getRiskData2(data);
    console.log('risk data', riskData);
    return (
      <div className="sidebar-container">
        <div className="sidebar-content">
          <ResultOverview data={data} />
          <VariableInfo variableData={riskData} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-container">
        <div className="sidebar-content">
          Make a query first (update this message)
        </div>
      </div>
    );
  }
};
