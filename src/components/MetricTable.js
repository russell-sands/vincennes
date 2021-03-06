import React from 'react';
import { MetricTableRow } from './MetricTableRow';

export const MetricTable = ({ variable, metricData, showOnly }) => {
  const { header, metrics, format } = metricData;
  const metricsToDisplay = Object.keys(metricData).filter(
    (metric) => showOnly.length === showOnly.includes(metric)
  );
  return (
    <table className="metric-table">
      <thead>
        <tr className="metric-table-header">
          <th colSpan="2">{header}</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(metrics).map((metric) => {
          const rowData = { label: metric, ...metrics[metric] };
          const key = variable + '.' + metrics[metric].name;
          if (showOnly.length && showOnly.includes(metric)) {
            return (
              <MetricTableRow key={key} rowData={rowData} format={format} />
            );
          } else if (!showOnly.length) {
            return (
              <MetricTableRow key={key} rowData={rowData} format={format} />
            );
          }
        })}
      </tbody>
    </table>
  );
};
