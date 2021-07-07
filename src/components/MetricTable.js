import React from 'react';
import { MetricTableRow } from './MetricTableRow';

export const MetricTable = ({ variable, metricData, showOnly }) => {
  const { header, metrics, format } = metricData;
  return (
    <table className="metric-table">
      <thead>
        <tr className="metric-table-header">
          <th colSpan="2">{header}</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(metrics).map((metric) => {
          const rowData = { label: metric, value: metrics[metric].value };
          const key = variable + '.' + metrics[metric].name;
          if (showOnly.length && showOnly.includes(metric)) {
            return (
              <MetricTableRow key={key} rowData={rowData} format={format} />
            );
          }
        })}
      </tbody>
    </table>
  );
};
