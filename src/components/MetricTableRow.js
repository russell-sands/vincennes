import React from 'react';

export const MetricTableRow = ({ rowData, format }) => {
  // Could probably handle better - this is to avoid formatting the ratings
  const formattedValue =
    rowData.label === 'Rating' ? rowData.value : format(rowData.value);
  return (
    <tr className="metric-table-row">
      <td className="metric-table-metric">{rowData.label}</td>
      <td className="metric-table-value">{formattedValue}</td>
    </tr>
  );
};
