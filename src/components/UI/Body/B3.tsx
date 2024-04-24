import React from 'react';

const B3 = ({ children, color }: any) => {
  return (
    <span
      className={`text-xs font-normal leading-tight ${color} text-secondary-500`}
    >
      {children}
    </span>
  );
};

export default B3;
