import React from 'react';

export const MetricTableRow = ({ rowData, format, prefix }) => {
  prefix = prefix ? prefix + ' ' : '';
  return (
    <tr>
      <td>{prefix + rowData.label}</td>
      <td>{format(rowData.value)}</td>
    </tr>
  );
};
