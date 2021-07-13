import React from 'react';
import { DisplayInitial } from './DisplayInitial';
import { DisplayResult } from './DisplayResult';
import { DisplayNoData } from './DisplayNoData';

// TODO: Break what is returned out into components

export const SidePanel = ({ data }) => {
  console.log(typeof data, data);
  return (
    <div className="sidebar-container">
      {(() => {
        if (data) {
          if (Object.keys(data).length > 0) {
            return <DisplayResult data={data} />;
          } else {
            return <DisplayInitial />;
          }
        } else {
          return <DisplayNoData />;
        }
      })()}
    </div>
  );
};
