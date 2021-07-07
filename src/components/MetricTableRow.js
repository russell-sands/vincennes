import React from 'react';

export const MetricTableRow = ({ rowData, format }) => {
  return (
    <tr className="metric-table-row">
      <td className="metric-table-metric">{rowData.label}</td>
      <td className="metric-table-value">{format(rowData.value)}</td>
    </tr>
  );
};
