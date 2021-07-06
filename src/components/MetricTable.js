import React from 'react';
import { MetricTableRow } from './MetricTableRow';

export const MetricTable = ({ variable, metricData, metricPrefix }) => {
  const { header, metrics, format } = metricData;
  //console.log(metrics);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">{header}</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(metrics).map((metric) => {
          const rowData = { label: metric, value: metrics[metric].value };
          const key = variable + '.' + metrics[metric].name;
          console.log(key);
          return (
            <MetricTableRow
              key={key}
              rowData={rowData}
              format={format}
              prefix={metricPrefix}
            />
          );
        })}
      </tbody>
    </table>
  );
};
